import React from 'react';
import 'normalize.css';
import ReactDOM from 'react-dom';
import App from './components/App';
import WorkerProxy from './WorkerProxy';
import { workerContext } from './lib/contexts';

async function main() {
    const proxy = await new (WorkerProxy as any)();

    ReactDOM.render(
        <workerContext.Provider value={proxy}>
            <App />,
        </workerContext.Provider>,
        document.querySelector('.root'),
    );
}

main();
