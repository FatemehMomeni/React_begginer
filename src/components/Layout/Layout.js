import React, {useReducer} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartContext from "../../contexts/CartContext";
import CartReducer from "../../reducers/Carts";
import PropTypes from "prop-types";


const Layout = ({children}) => {
    let carts = JSON.parse(localStorage.getItem("carts"));
    const [state, dispatch] = useReducer(CartReducer, {carts: carts || []});
    
    return (
        <CartContext.Provider value={
            {carts: state.carts, dispatchCart: dispatch}
            }>                
            <div className="Template">                
                <Header />
                {children}
                <Footer />
            </div>            
        </CartContext.Provider>
    )    
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
}

export default Layout;