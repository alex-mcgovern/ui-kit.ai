# Getting started

`@ui-kit.ai/components` is a UI library designed with AI integration in mind. It aims to simplify the development process for developers and designers, providing a toolkit that works seamlessly with AI to build more efficient and intelligent user interfaces.

## Installation

Getting up and running is quick and easy.

### 1. Install the package

Install the package from your command line:

```shell
npm install @ui-kit.ai/components
```

### 2. Import the CSS file

Import the global CSS file at the root of your application:

```jsx
import '@ui-kit.ai/components/styles.css'
```

### 3. Add the Provider component

Add the UI Kit Provider to your application, wrapping your root component:

```jsx
import { UIKitProvider } from '@ui-kit.ai/components'

export default function () {
    return (
        <UIKitProvider>
            <YourApp />
        </UIKitProvider>
    )
}
```

### 4. Start building

You are now ready to use UI Kit components:

```jsx
import { Box, Text, Button } from '@ui-kit.ai/components'

function YourApp() {
    return (
        <Box
            gap='medium'
            direction='vertical'
        >
            <Text>Hello from UI Kit AI</Text>
            <Button>Get Started</Button>
        </Box>
    )
}
```

## Key Features

This library includes an MCP server that offers detailed usage examples to large language models (LLMs), ensuring accurate component implementation and reducing errors. This eliminates the need for extensive debugging and promotes cleaner, more reliable code.

## Batteries Included

Unlike some other libraries, `@ui-kit.ai/components` comes fully equipped, offering a straightforward and quick installation process. While modification is restricted, customization is still possible through a built-in theme editor, accessible at `/theme` on this website.

## Customizing Your Theme

### Using the Theme Editor

You can customize the appearance of components without code changes by using our built-in theme editor:

1. Navigate to the `/theme` page on this website
2. Adjust colors, spacing, and other design tokens
3. Export your custom theme configuration
4. Apply it to your UIKitProvider:

```jsx
import { UIKitProvider } from '@ui-kit.ai/components'
import myCustomTheme from './my-theme.json'

export default function () {
    return (
        <UIKitProvider theme={myCustomTheme}>
            <YourApp />
        </UIKitProvider>
    )
}
```

## Solid Foundation

`@ui-kit.ai/components` utilizes React Aria components, a well-maintained library from Adobe. This ensures accessibility, reliability, and longevity, providing the benefits of a professional-grade library without the need for extensive custom development.

## Next Steps

Explore our component library to see all available components and discover how they can help you build powerful, accessible, and AI-ready user interfaces.
