# Contributing to ui-kit.ai

## Project Setup

This project is a [pnpm workspaces](https://pnpm.io/workspaces) monorepo managed with [Turborepo](https://turbo.build/repo) for task running and caching.

## Monorepo Structure

- `packages/components` - Core UI components
- `packages/docs` - Documentation site (auto-generated)
- `packages/eslint` - ESLint configuration
- `packages/mcp-server` - Model Context Protocol server
- `packages/metadata` - Component metadata
- `packages/mocks` - Mock data and services
- `packages/prettier` - Prettier configuration
- `packages/storybook` - Component development and testing
- `packages/tests` - Test utilities
- `packages/theme` - Design tokens and theming
- `packages/tsconfig` - TypeScript configuration
- `packages/vite` - Vite configuration
- `packages/vitest` - Vitest configuration

## Development Workflow

- Most changes should be made in `packages/components`
- Validate and test your changes with `packages/storybook`
- The documentation site (`packages/docs`) is primarily auto-generated from Storybook and rarely requires manual updates

## Commits and Releases

- This project follows [Conventional Commits](https://www.conventionalcommits.org/)
- Commit messages are enforced with [commitlint](https://commitlint.js.org/)
- Format: `type(scope): message` (e.g., `feat(button): add size variants`)
- Automated releases are generated based on commit messages

## Pull Request Process

1. Create a branch with format `type/description` (e.g., `feat/button-variants`)
2. Make your changes
3. Ensure tests and linting pass: `pnpm test && pnpm lint`
4. Submit a pull request
