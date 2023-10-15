import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppHolder/App';
import { Navbar } from './NavbarHolder/Navbar';
import { Gallery } from './GalleryHolder/Gallery';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render components inside a single root
root.render(
  <>
    <App />
    <Navbar />
    <Gallery />
  </>
);

