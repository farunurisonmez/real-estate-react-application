import { configureStore } from '@reduxjs/toolkit'
import {useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import {setupListeners} from "@reduxjs/toolkit/query";
import { advertApi } from './slices/advertSlice';

const store = configureStore({
    reducer: {
        [advertApi.reducerPath]: advertApi.reducer,
    
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(advertApi.middleware)
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch)