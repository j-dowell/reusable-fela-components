import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RendererProvider } from 'react-fela';
import { createRenderer } from 'fela';

const renderer = createRenderer()

ReactDOM.render(
    <RendererProvider renderer={renderer}>
        <App />
    </RendererProvider>,
document.getElementById('root'));
