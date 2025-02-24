# Vite React Starter

⚡ A ready-to-use Vite + React starter template, pre-configured with essential tools for quick and efficient development.

## Features

- 🚀 **Vite**: Lightning-fast bundler and dev server
- ⚛️ **React** 19
- 🔀 **React Router v7 Framework Mode**: File-based routing, supporting both SPA and SSR
- 🟦 **TypeScript**: Adds type safety to the code
- ✔️ **ESLint**: Configured for code quality checks
- 💅 **Prettier**: Code formatting and [sorting imports](https://github.com/IanVS/prettier-plugin-sort-imports)
- ✂️ **Knip**: Detects unused files, dependencies, and exports
- 🧩 **Zod**: Type-safe schema validation
- 🐶 **Husky**: Manages Git hooks that run automatically during commits and pushes
- 🔄 **Lint Staged**: Automatically run code formatting and linters on pre-committed files
- 📝 **Commitlint**: Enforces [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/)
- ✍️ **Commitizen**: Simplifies the process of writing consistent commit messages
- 🧰 **Vite Plugins**:
  - `vite-plugin-checker`: TypeScript and ESLint integration
  - `vite-plugin-pwa`: Progressive Web App support
  - `vite-tsconfig-paths`: Path alias support
- 📊 **Bundle Analyzer**: Visualizes bundle size with rollup-plugin-visualizer
- 📁 **Absolute Import and Path Alias**: Import components using the `@/` prefix
- 💻 **VSCode**: Includes settings and recommended extensions

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org) (version 20 or later)
- [Bun](https://bun.sh)

> **Note:** If using npm, Yarn, or pnpm, adjust the package commands accordingly, including Husky commit hooks.

## Getting Started

### 1. Start a New Project

You can start a new project using this repository as a template in three ways:

1. Use This Repository as Template

   ![use-this-template-button](https://i.imgur.com/XO4Wntx.png)

2. Using Git Clone

   ```bash
   git clone https://github.com/hanskym/vite-react-starter my-project-name
   ```

### 2. Install Dependencies

```bash
bun install
```

### 3. Prepare Husky

```bash
bun prepare
```

### 4. Run the Development Server

```bash
bun dev
```

Open http://localhost:5173 in your browser to view your Vite React application. You can start editing the app by modifying `src/routes/_index.tsx`, and the changes will update in real time.
