import fs from 'node:fs'
import path from 'node:path'
import { describe, expect } from 'vitest'
import { test } from 'vitest'

import { version } from '../../../package.json'

const AUTHOR_NAME = 'Alex McGovern'
const EXCLUDED_DIRECTORIES = ['node_modules', '.next', 'dist', '.turbo']
const LICENSE_IDENTIFIER = 'MIT'
const NODE_VERSION = '22.x'
const PATH_TO_ROOT = path.join(import.meta.dirname, '../../..')
const REPO_GIT_URL = 'https://github.com/alex-mcgovern/ui-kit.ai'

/**
 * Recursively get the contents of all src package.json files within a directory.
 */
function getPackageJsons(dir: string): { content: string; dir: string }[] {
    const packageJsons: { content: string; dir: string }[] = []
    const files = fs.readdirSync(dir)

    files.forEach((file) => {
        const fullPath = path.join(dir, file)
        const stat = fs.lstatSync(fullPath)

        if (
            stat.isDirectory() &&
            EXCLUDED_DIRECTORIES.every((excluded) => !fullPath.includes(excluded))
        ) {
            packageJsons.push(...getPackageJsons(fullPath))
        } else if (file === 'package.json') {
            const content = fs.readFileSync(fullPath, 'utf8')
            packageJsons.push({ content, dir: fullPath })
        }
    })

    return packageJsons
}

describe('package.json', () => {
    const packageJsons = getPackageJsons(PATH_TO_ROOT)

    packageJsons.forEach(({ content, dir }) => {
        const packageJson = JSON.parse(content)
        const packageName = packageJson.name ?? dir

        test(`${packageName} has version matching the root package.json version: ${version}`, () => {
            expect(
                'version' in packageJson,
                `package.json for ${packageName} should have "version" property`
            ).toBe(true)
            expect(
                packageJson.version,
                `package.json for ${packageName} should have version matching root package.json: "${version}"`
            ).toBe(version)
        })

        test(`${packageName} has type "module"`, () => {
            expect(
                'type' in packageJson,
                `package.json for ${packageName} should have "type" property`
            ).toBe(true)
            expect(
                packageJson.type,
                `package.json for ${packageName} should have "module" in "type"`
            ).toBe('module')
        })

        test(`${packageName} has engines: ${NODE_VERSION}`, () => {
            expect(
                'engines' in packageJson,
                `package.json for ${packageName} should have "engines" property`
            ).toBe(true)
            expect(
                packageJson.engines?.node,
                `package.json for ${packageName} should have "${NODE_VERSION}" in "engines.node"`
            ).toBe(NODE_VERSION)
        })

        test(`${packageName} has author property`, () => {
            expect(
                'author' in packageJson,
                `package.json for ${packageName} should have "author" property`
            ).toBe(true)
            expect(
                packageJson.author,
                `package.json for ${packageName} should have "${AUTHOR_NAME}" in "author"`
            ).toBe(AUTHOR_NAME)
        })

        test(`${packageName} has license property`, () => {
            expect(
                'license' in packageJson,
                `package.json for ${packageName} should have "license" property`
            ).toBe(true)
            expect(
                packageJson.license,
                `package.json for ${packageName} should have "${LICENSE_IDENTIFIER}" in "license"`
            ).toBe(LICENSE_IDENTIFIER)
        })

        test(`${packageName} has repository property`, () => {
            expect(
                'repository' in packageJson,
                `package.json for ${packageName} should have "repository" property`
            ).toBe(true)
            expect(
                packageJson.repository.type,
                `package.json for ${packageName} should have "git" in "repository.type"`
            ).toBe('git')
            expect(
                packageJson.repository.url,
                `package.json for ${packageName} should have "${REPO_GIT_URL}" in "repository.url"`
            ).toBe(REPO_GIT_URL)
        })

        test(`${packageName} has "homepage" property`, () => {
            expect(
                'homepage' in packageJson,
                `package.json for ${packageName} should have "homepage" property`
            ).toBe(true)
            expect(
                packageJson.homepage,
                `package.json for ${packageName} should have "https://ui-kit.ai" in "homepage"`
            ).toBe('https://ui-kit.ai')
        })
    })
})
