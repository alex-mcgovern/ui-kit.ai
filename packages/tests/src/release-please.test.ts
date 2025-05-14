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

    test('All packages should be included in linked-versions plugin', () => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        const linkedPackages = releasePleaseConfig.plugins[0]?.components ?? []
        const linkedPackageNames = linkedPackages.map((pkg) => pkg.replace('packages/', ''))

        packageDirectories.forEach((packageDir) => {
            expect(
                linkedPackageNames.includes(packageDir),
                `Package "${packageDir}" is missing from linked-versions plugin in release-please-config.json`
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

            expect(
                config['extra-label'],
                `Package "${packageName}" should have "extra-label" matching its name in release-please-config.json`
            ).toBe(packageName)
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
            expect(
                packageDirectories.includes(manifestPackage),
                `Package "${manifestPackage}" in release-please-manifest.json doesn't exist in packages directory`
            ).toBe(true)
        })
    })
})
