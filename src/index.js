//This will be the first file executed
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
//This is the instruction to render our page from our App.js file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
