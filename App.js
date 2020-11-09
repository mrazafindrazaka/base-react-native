import React from 'react';
import Navigation from "./Navigation/Navigation";
import {Provider} from 'react-redux'
import Store from './Store/configStore'

const App = () => {
    return (
        <Provider store={Store}>
            <Navigation/>
        </Provider>
    )
}

export default App
