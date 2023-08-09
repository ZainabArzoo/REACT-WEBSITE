import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";


const getCartData = () => {
    let cartData = localStorage.getItem('cart')
    if(cartData == 'null'){
        return []
    }
    else{
        return JSON.parse(cartData)
    }


}

const data = {
    cart: getCartData()
}

export const GlobalContext = createContext("Initial Value");

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
