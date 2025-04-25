import { readFileSync, writeFileSync } from 'fs'
import { resolve, join } from 'path'
import { glob } from 'glob'

type VersionIncrement = 'major' | 'minor' | 'patch' | 'alpha'

/**
 * Bumps a semantic version string based on the increment type
 * @param version Current version string (e.g., "1.2.3" or "1.2.3-alpha.1")
 * @param increment The type of increment to perform
 * @returns The new version string
 */
function bumpVersion(version: string, increment: VersionIncrement): string {
    // Parse version parts
    const preReleaseSeparatorIndex = version.indexOf('-')
    const isPreRelease = preReleaseSeparatorIndex !== -1

    const versionCore = isPreRelease ? version.substring(0, preReleaseSeparatorIndex) : version

    const preReleaseTag = isPreRelease ? version.substring(preReleaseSeparatorIndex + 1) : ''

    // Parse version numbers
    const [major, minor, patch] = versionCore.split('.').map((part) => parseInt(part, 10))

    if (increment === 'major') {
        return `${major + 1}.0.0`
    } else if (increment === 'minor') {
        return `${major}.${minor + 1}.0`
    } else if (increment === 'patch') {
        return `${major}.${minor}.${patch + 1}`
    } else if (increment === 'alpha') {
        if (!isPreRelease) {
            // If not already a prerelease, add -alpha.0
            return `${versionCore}-alpha.0`
        } else {
            // Extract prerelease tag and number
            const preReleaseTagParts = preReleaseTag.split('.')
            const preReleaseType = preReleaseTagParts[0]
            const preReleaseNum =
                preReleaseTagParts.length > 1 ? parseInt(preReleaseTagParts[1], 10) : 0

            return `${versionCore}-${preReleaseType}.${preReleaseNum + 1}`
        }
    }

    throw new Error(`Invalid increment type: ${increment}`)
}

/**
 * Updates all package.json files in the repository
 * @param increment The type of version increment to perform
 */
async function updateVersions(increment: VersionIncrement): Promise<void> {
    const rootDir = resolve(import.meta.dirname, '..')
    const packageJsonFiles = await glob('**/package.json', {
        cwd: rootDir,
        ignore: ['**/node_modules/**', '**/dist/**'],
    })

    if (packageJsonFiles.length === 0) {
        console.log('No package.json files found')
        return
    }

    console.log(`Found ${packageJsonFiles.length} package.json files`)

    let rootVersion: string | null = null

    // First, find the root package.json to get the main version
    for (const filePath of packageJsonFiles) {
        if (filePath === 'package.json') {
            const fullPath = join(rootDir, filePath)
            const content = JSON.parse(readFileSync(fullPath, 'utf8'))
            rootVersion = content.version
            break
        }
    }

    if (rootVersion == null) {
        // If no root package.json, use the first one found
        const fullPath = join(rootDir, packageJsonFiles[0])
        const content = JSON.parse(readFileSync(fullPath, 'utf8'))
        rootVersion = content.version
    }
    if (rootVersion == null) {
        console.error('No version found in any package.json file')
        return
    }

    const newVersion = bumpVersion(rootVersion, increment)
    console.log(`Updating versions: ${rootVersion} → ${newVersion}`)

    // Update all package.json files
    for (const filePath of packageJsonFiles) {
        const fullPath = join(rootDir, filePath)
        try {
            const content = JSON.parse(readFileSync(fullPath, 'utf8'))
            content.version = newVersion

            // Pretty format with 2 space indentation to maintain formatting
            writeFileSync(fullPath, JSON.stringify(content, null, 2) + '\n', 'utf8')
            console.log(`Updated ${filePath}`)
        } catch (error) {
            console.error(`Failed to update ${filePath}:`, error)
        }
    }

    console.log(`Version bump complete: ${newVersion}`)
}

/**
 * Main function to parse arguments and run the version update
 */
async function main(): Promise<void> {
    const args = process.argv.slice(2)

    if (args.length !== 1 || !['major', 'minor', 'patch', 'alpha'].includes(args[0])) {
        console.error(
            'Error: Please provide a valid version increment type: major | minor | patch | alpha'
        )
        process.exit(1)
    }

    const increment = args[0] as VersionIncrement
    await updateVersions(increment)
}

// Execute the script
main().catch((error) => {
    console.error('Error:', error)
    process.exit(1)
})
