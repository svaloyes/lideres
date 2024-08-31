# Líderes React Project

This project is a modern, responsive website for an educational institution, built with React and enhanced with Chakra UI and Framer Motion for a dynamic user experience.

## Features

- Responsive design for all device sizes
- Interactive header with navigation menu
- Dynamic animations using Framer Motion
- Global state management
- Dark mode support

## Technologies Used

- React 18.3.1
- Chakra UI 2.8.2
- Framer Motion 11.3.31
- React Router DOM 6.26.1

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/lideres-react.git
   cd lideres-react
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Animation Features

This project uses Framer Motion to create smooth, engaging animations. Some key features include:

- Logo: Scale animation on hover
- Navigation buttons: Scale animation on hover
- Color mode toggle: Scale and rotate animation on hover

Example of animation implementation in the Header component:

```jsx
import { motion } from 'framer-motion';

const MotionImage = motion(Image);
const MotionButton = motion(Button);

<MotionImage
  src="/img/Logo_gimnasio_lideres.png"
  alt="Logo de la Institución"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
/>

<MotionButton
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>
  Nosotros
</MotionButton>
```

For more information on how to use Framer Motion, visit their [official documentation](https://www.framer.com/motion/).

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

For Chakra UI, visit their [official documentation](https://chakra-ui.com/).
