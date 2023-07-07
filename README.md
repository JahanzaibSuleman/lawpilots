# UI Component Library

This is a UI component library built using React and TypeScript. The library includes reusable components for common UI elements such as buttons, inputs, dropdowns, and modals. The components are designed to be customizable, visually appealing, and easy to use in your React projects.

## Components

The library includes the following components:

- **Button**: A customizable button component with support for different styles, sizes, and user interactions.
- **Input**: An input component with various input types, placeholder text, and optional validation support.
- **Dropdown**: A dropdown component that allows selecting an option from a list of options.
- **Modal**: A modal component for displaying content on top of the main page.

## Installation

To use this UI component library in your project, you can install it via npm or yarn. Run the following command:

```
npm install
```

## Usage

Import the desired component from the library and use it in your React components. Here's an example of using the Button component:

```

import React from 'react';
import { Button } from 'your-component-library';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button label="Click me" onClick={handleClick} variant="primary" size="medium" />
    </div>
  );
};

export default App;

```

Please refer to the documentation or source code of each component for detailed usage instructions and available props.

## Styling

The components in this library are styled using CSS-in-JS (styled-components). The styling can be customized by passing appropriate props or by extending the components and modifying the styles as needed.

## Unit Testing

Unit tests have been written for at least one component in this library. The tests can be executed using your preferred testing library/framework (e.g., Jest, React Testing Library). Run the following command to execute the tests:

```
npm test
```

## Run Storybook

To run Storybook in your browser, run the following command:

```
npm run storybook
```
