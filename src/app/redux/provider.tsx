//provider connects our nextjs app with redux store
//creates a wrapper of redux store around our app
'use client';
const { Provider } = require('react-redux');
import { Store } from './store';

export const ReduxProvider = ({ children }: any) => {
    return (
        <Provider store={Store}>{/* passing store with the provider to our app, so that whatever data present in store can be accessed by our app components */}
            {children}
        </Provider>
    ) 
};
