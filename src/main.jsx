import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);


// {
//     "name": "my-vite-react-app",
//     "version": "1.0.0",
//     "private": true,
//     "scripts": {
//       "dev": "vite",
//       "build": "vite build",
//       "preview": "vite preview"
//     },
//     "dependencies": {
//       "react": "^18.2.0",
//       "react-dom": "^18.2.0",
//       "react-router-dom": "^6.28.0",
//       "vite": "^4.0.0"
//     },
//     "devDependencies": {
//       "@vitejs/plugin-react": "^3.0.0"
//     }
//   }
  




// {
//     "name": "codia-react",
//     "version": "1.0.0",
//     "private": true,
//     "main": "electron.js",
//     "scripts": {
//       "dev": "webpack --config webpack.config.js",
//       "build": "vite build",
//       "preview": "vite preview",
//       "start": "electron .",
//       "electron": "electron electron.js",
//       "dist": "electron-builder --mac --win"
//     },
//     "dependencies": {
//       "axios": "^1.7.7",
//       "react": "^18.2.0",
//       "react-dom": "^18.2.0",
//       "react-router-dom": "^6.28.0",
//       "react-webcam": "^7.2.0"
//     },
//     "devDependencies": {
//       "@tailwindcss/typography": "^0.5.10",
//       "@vitejs/plugin-react": "^4.0.4",
//       "autoprefixer": "^10.4.16",
//       "electron": "^33.2.0",
//       "electron-builder": "^25.1.8",
//       "electron-is-dev": "^3.0.1",
//       "postcss": "^8.4.31",
//       "tailwindcss": "^3.3.4",
//       "typescript": "^5.1.3",
//       "vite": "^4.3.9"
//     }
//   }