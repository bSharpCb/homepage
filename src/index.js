import ReactDOM from "react-dom";
import App from "./App";
import {StrictMode} from 'react';
import "./index.css"
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);

//ReactDOM.render(<App />, document.querySelector("#root"));