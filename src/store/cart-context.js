import React from "react";

const cartContext = React.createContext({
    items : [],
    TotalAmount : 0,
    addItem : (item) => {},
    removeItem : (id) => {},
    clearItems : () => {}   
})

export default cartContext;