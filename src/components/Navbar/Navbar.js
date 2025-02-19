import React from "react";
import {Link} from "react-router";
import "./Navbar.css";


const Navbar = () => (
    <ul className="Navbar">        
        <li>
            <Link to="/">
                <button>خانه</button>
            </Link>
        </li>        
        <li>
            <Link to="/blog">
                <button>بلاگ</button>
            </Link>
        </li>
        <li>
            <Link to="/about">
                <button>درباره‌ی ما</button>
            </Link>
        </li>
        <li>
            <Link to="/contact">
                <button>تماس با ما</button>
            </Link>
        </li>
        <li>
            <Link to="/emoji">
                <button>جست‌وجوی ایموجی</button>
            </Link>
        </li>
        <li>
            <Link to="/crypto">
                <button>ارز دیجیتال</button>
            </Link>
        </li>
    </ul>
)

export default Navbar;