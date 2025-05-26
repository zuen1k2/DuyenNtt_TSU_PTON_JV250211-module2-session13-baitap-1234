import { configureStore } from "@reduxjs/toolkit" ;
import RootReducers from "../reducers/combine";

const Store = configureStore({
    reducer: RootReducers,
})
export default Store
