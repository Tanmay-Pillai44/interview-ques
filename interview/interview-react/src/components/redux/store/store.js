import { configureStore } from '@reduxjs/toolkit';
import handleMyCounter from '../reducer/reducer';

const store = configureStore({
    reducer: handleMyCounter,
})

export default store;