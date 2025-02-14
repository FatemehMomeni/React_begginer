import React, {useContext} from "react";
import "./Footer.css";
import ThemeContext from "../../contexts/ThemeContext";


const Footer = () => {
    const themeValues = useContext(ThemeContext);
    return (
        <div className="Footer">
            <h5>کلیه‌ی حقوق این سایت متعلق به توسعه‌دهنده می‌باشد.</h5>
            <div>
                <button onClick={ () => themeValues.setActiveTheme('pink') } className="Pink" 
                    style={{
                        background: "#f7bac3",
                        color: "#91295a",
                    }}>
                    صورتی
                </button>
                
                <button onClick={ () => themeValues.setActiveTheme('orange') } className="Orange" 
                    style={{
                        background: "#f7b679",
                        color: "#e06c00",
                    }}>
                    نارنجی
                </button>            
            </div>
        </div>
    )
}

export default Footer;