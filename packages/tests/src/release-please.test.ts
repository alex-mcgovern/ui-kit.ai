import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, test } from 'vitest'

import releasePleaseConfig from '../../../release-please-config.json' assert { type: 'json' }
import releasePleaseManifest from '../../../release-please-manifest.json' assert { type: 'json' }

describe('Release Please Configuration', () => {
    const PATH_TO_ROOT = path.join(import.meta.dirname, '../../..')
    const PACKAGES_DIR = path.join(PATH_TO_ROOT, 'packages')
    const EXCLUDED_DIRECTORIES = ['node_modules', '.next', 'dist', '.turbo']

    // Read the release-please config and manifest files

    // Get all package directories
    function getPackageDirectories(dir: string): string[] {
        return fs
            .readdirSync(dir, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .filter((dirent) => !EXCLUDED_DIRECTORIES.includes(dirent.name))
            .map((dirent) => dirent.name)
    }

    const packageDirectories = getPackageDirectories(PACKAGES_DIR)

    test('All packages should be included in release-please-config.json', () => {
        const configPackages = Object.keys(releasePleaseConfig.packages).map((key) =>
            key.replace('packages/', '')
        )

        packageDirectories.forEach((packageDir) => {
            expect(
                configPackages.includes(packageDir),
                `Package "${packageDir}" is missing from release-please-config.json`
            ).toBe(true)
        })
    })

    test('All packages should be included in release-please-manifest.json', () => {
        const manifestPackages = Object.keys(releasePleaseManifest).map((key) =>
            key.replace('packages/', '')
        )

        packageDirectories.forEach((packageDir) => {
            expect(
                manifestPackages.includes(packageDir),
                `Package "${packageDir}" is missing from release-please-manifest.json`
            ).toBe(true)
        })
    })

    test('All packages in config should have the same configuration', () => {
        for (const [packagePath, config] of Object.entries(releasePleaseConfig.packages)) {
            const packageName = packagePath.replace('packages/', '')

            expect(
                config['always-update'],
                `Package "${packageName}" should have "always-update" set to true in release-please-config.json`
            ).toBe(true)
        }
    })

    test('All packages should have the same version in release-please-manifest.json', () => {
        const versions = new Set(Object.values(releasePleaseManifest))

        expect(
            versions.size,
            `All packages should have the same version in release-please-manifest.json, but found ${versions.size} different versions`
        ).toBe(1)
    })

    test('No extra packages in release-please-config.json', () => {
        const configPackages = Object.keys(releasePleaseConfig.packages).map((key) =>
            key.replace('packages/', '')
        )

        configPackages.forEach((configPackage) => {
            if (configPackage === '.') return
            expect(
                packageDirectories.includes(configPackage),
                `Package "${configPackage}" in release-please-config.json doesn't exist in packages directory`
            ).toBe(true)
        })
    })

    test('No extra packages in release-please-manifest.json', () => {
        const manifestPackages = Object.keys(releasePleaseManifest).map((key) =>
            key.replace('packages/', '')
        )

        manifestPackages.forEach((manifestPackage) => {
            if (manifestPackage === '.') return
            expect(
                packageDirectories.includes(manifestPackage),
                `Package "${manifestPackage}" in release-please-manifest.json doesn't exist in packages directory`
            ).toBe(true)
        })
    })

    test('Each package entry should have a "component" property with the correct name', () => {
        for (const [packagePath, config] of Object.entries(releasePleaseConfig.packages)) {
            const componentName = config.component
            expect(
                componentName,
                `Package "${packagePath}" is missing the "component" property in release-please-config.json`
            ).toBeDefined()

            if (packagePath === '.') {
                expect(
                    componentName,
                    `Root package's component name should be "ui-kit.ai-monorepo"`
                ).toBe('ui-kit.ai-monorepo')
            } else {
                const expectedName = `@ui-kit.ai/${packagePath.replace('packages/', '')}`
                expect(
                    componentName,
                    `Component name for "${packagePath}" should be "${expectedName}"`
                ).toBe(expectedName)
            }
        }
    })

    test('All components defined in packages should be present in the linked-versions plugin', () => {
        const linkedComponentsList = releasePleaseConfig.plugins[0]?.components ?? []
        const linkedComponentsSet = new Set(linkedComponentsList)

        for (const [packagePath, config] of Object.entries(releasePleaseConfig.packages)) {
            const componentName = config.component
            expect(
                linkedComponentsSet.has(componentName),
                `Component "${componentName}" for package "${packagePath}" is missing from the linked-versions plugin components list`
            ).toBe(true)
        }

        // Also verify there are no extra components in the linked versions plugin
        expect(
            linkedComponentsList.length,
            `The linked-versions plugin has ${linkedComponentsList.length} components but there should be ${Object.keys(releasePleaseConfig.packages).length}`
        ).toBe(Object.keys(releasePleaseConfig.packages).length)
    })
})
