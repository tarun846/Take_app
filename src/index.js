import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Toaster } from "react-hot-toast";


ReactDOM.render(
<>

<App />
<Toaster position = 'top-right' />
</>
,document.getElementById('root'));
