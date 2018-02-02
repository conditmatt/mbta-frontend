import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";


const render = () => {
        ReactDOM.render(
        <AppContainer>
            <App/>
        </AppContainer>,
        document.getElementById("root")
    )
    }
;

render();

if (module.hot) {
    // module.hot.accept(
    module.hot.accept()
}