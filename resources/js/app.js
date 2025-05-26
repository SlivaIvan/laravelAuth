import React from 'react';
import { createRoot } from 'react-dom/client';
import UserInfo from './components/Example';

const rootElement = document.getElementById('user-info');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<UserInfo />);
}