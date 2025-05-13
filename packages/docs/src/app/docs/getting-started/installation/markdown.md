# Installation

Getting up and running is quick and easy.

### 1. Install the package

Install the package from your command line:

```shell
npm i @ui-kit.ai/components
```

### 2. Configure Tailwind CSS

This library depends on Tailwind V4.0.0 or later. If you don't have Tailwind CSS installed, you can set it up by following the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

Once you have Tailwind installed, you will need to add the following to your CSS
file that imports tailwind:

```diff
@import 'tailwindcss';
@import '../node_modules/@ui-kit.ai/components/dist/style.css';

@plugin "tailwindcss-react-aria-components";
@source "../node_modules/@ui-kit.ai/components/dist";
@source "../node_modules/@ui-kit.ai/theme/dist";
```
