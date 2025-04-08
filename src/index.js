import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CartProvider from "./utils/CartProvider";


ReactDOM.render(
    <CartProvider>
        <App/>
    </CartProvider>,
    document.getElementById("root")
)