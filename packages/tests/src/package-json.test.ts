import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { describe, expect } from "vitest";
import { test } from "vitest";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const AUTHOR_NAME = "Alex McGovern";
const EXCLUDED_DIRECTORIES = ["node_modules", ".next", "dist", ".turbo"];
const LICENSE_IDENTIFIER = "MIT";
const NODE_VERSION = "22.x";
const PATH_TO_ROOT = path.join(__dirname, "../../..");
const REPO_GIT_URL = "https://github.com/alex-mcgovern/ui-kit.ai";

/**
 * Recursively get the contents of all src package.json files within a directory.
 */
function getPackageJsons(dir: string): { content: string; dir: string }[] {
    const packageJsons: { content: string; dir: string }[] = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.lstatSync(fullPath);

        if (
            stat.isDirectory() &&
            EXCLUDED_DIRECTORIES.every(
                (excluded) => !fullPath.includes(excluded),
            )
        ) {
            packageJsons.push(...getPackageJsons(fullPath));
        } else if (file === "package.json") {
            const content = fs.readFileSync(fullPath, "utf8");
            packageJsons.push({ content, dir: fullPath });
        }
    });

    return packageJsons;
}

describe("package.json", () => {
    const packageJsons = getPackageJsons(PATH_TO_ROOT);

    packageJsons.forEach(({ content, dir }) => {
        const packageJson = JSON.parse(content);
        const packageName = packageJson.name ?? dir;

        test(`${packageName} has type "module"`, () => {
            expect(
                "type" in packageJson,
                `package.json for ${packageName} should have "type" property`,
            ).toBe(true);
            expect(
                packageJson.type,
                `package.json for ${packageName} should have "module" in "type"`,
            ).toBe("module");
        });

        test(`${packageName} has engines: ${NODE_VERSION}`, () => {
            expect(
                "engines" in packageJson,
                `package.json for ${packageName} should have "engines" property`,
            ).toBe(true);
            expect(
                packageJson.engines?.node,
                `package.json for ${packageName} should have "${NODE_VERSION}" in "engines.node"`,
            ).toBe(NODE_VERSION);
        });

        test(`${packageName} has author property`, () => {
            expect(
                "author" in packageJson,
                `package.json for ${packageName} should have "author" property`,
            ).toBe(true);
            expect(
                packageJson.author,
                `package.json for ${packageName} should have "${AUTHOR_NAME}" in "author"`,
            ).toBe(AUTHOR_NAME);
        });

        test(`${packageName} has license property`, () => {
            expect(
                "license" in packageJson,
                `package.json for ${packageName} should have "license" property`,
            ).toBe(true);
            expect(
                packageJson.license,
                `package.json for ${packageName} should have "${LICENSE_IDENTIFIER}" in "license"`,
            ).toBe(LICENSE_IDENTIFIER);
        });

        test(`${packageName} has repository property`, () => {
            expect(
                "repository" in packageJson,
                `package.json for ${packageName} should have "repository" property`,
            ).toBe(true);
            expect(
                packageJson.repository.type,
                `package.json for ${packageName} should have "git" in "repository.type"`,
            ).toBe("git");
            expect(
                packageJson.repository.url,
                `package.json for ${packageName} should have "${REPO_GIT_URL}" in "repository.url"`,
            ).toBe(REPO_GIT_URL);
        });

        test(`${packageName} has correct scripts`, () => {
            expect(
                "scripts" in packageJson,
                `package.json for ${packageName} should have "scripts" property`,
            ).toBe(true);

            expect(
                Object.keys(packageJson.scripts).includes("check:prettier"),
                `package.json for ${packageName} should have "check:prettier" script`,
            ).toBe(true);
            expect(
                Object.keys(packageJson.scripts).includes("fix:prettier"),
                `package.json for ${packageName} should have "fix:prettier" script`,
            ).toBe(true);

            if (packageName.includes("tsconfig") === false) {
                expect(
                    Object.keys(packageJson.scripts).includes("check:eslint"),
                    `package.json for ${packageName} should have "check:eslint" script`,
                ).toBe(true);
                expect(
                    Object.keys(packageJson.scripts).includes("fix:eslint"),
                    `package.json for ${packageName} should have "fix:eslint" script`,
                ).toBe(true);

                expect(
                    Object.keys(packageJson.scripts).includes("check:tsc"),
                    `package.json for ${packageName} should have "check:tsc" script`,
                ).toBe(true);

                expect(
                    Object.keys(packageJson.scripts).includes("check:vitest"),
                    `package.json for ${packageName} should have "check:vitest" script`,
                ).toBe(true);
            }
        });
    });
});
