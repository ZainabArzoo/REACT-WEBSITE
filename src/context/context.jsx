import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const GlobalContext = createContext("Initial Value");



const getCartData = () => {
    let cartData = localStorage.getItem('cart')
    if(cartData == []){
        return []
    }
    else{
        return JSON.parse(cartData)
    }

}

const data = {
    cart: getCartData()
}

export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])


    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}