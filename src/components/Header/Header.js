import React, {useContext} from 'react';
import { useLocation } from 'react-router';
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import { CiShoppingCart } from "react-icons/ci";
import CartContext from '../../contexts/CartContext';
import { convertToPersianNum } from '../../utils/validation';


const Header = () => {
    let {pathname} = useLocation();    
    let title = '';
    const {carts} = useContext(CartContext);    

    if (pathname === "/") title = "خانه";
    if (pathname === "/blog") title = "بلاگ";
    if (pathname === "/contact") title = "تماس با ما";
    if (pathname === "/about") title = "درباره‌ی ما";
    if (pathname === "/emoji") title = "جست‌وجوی ایموجی";
    if (pathname.includes("course")) title = "دوره";


    return (
        <div className='Header'>
            <div className='TopBar'>
                <Navbar />
                <div className='Cart'>
                    <h5>{convertToPersianNum(carts.length)}</h5> 
                    <CiShoppingCart />                                   
                </div>
            </div>
            <h3>{title}</h3>
        </div>
    )
}

export default Header;