import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.min.css';
import 'bulma-extensions/bulma-pageloader/bulma-pageloader.css'
import 'bulma-extensions/bulma-switch/bulma-switch.css'
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();