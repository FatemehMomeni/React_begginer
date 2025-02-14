import React, {useContext, useEffect, useRef} from "react";
import "./TutorialSubjects.css";
import Image from "../Image/Image";
import Button from "../Button/Button";
import ThemeContext from "../../contexts/ThemeContext";
import CartContext from "../../contexts/CartContext";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router";
import PropTypes from "prop-types";
import { convertToPersianNum } from "../../utils/validation";


const TutorialSubjects = ({data}) => {
    const themeValues = useContext(ThemeContext);
    const {carts, dispatchCart} = useContext(CartContext);
    const tutorialSubjectRef = useRef(null);    
    const added = carts.includes(data.id);

    const handleAdd = () => {
        if(added) {
            dispatchCart({
                type: "REMOVE_FROM_CART",
                id: data.id
            })
        }
        else {            
            dispatchCart({
                type: "ADD_TO_CART",
                id: data.id
            })
        }
    }

    useEffect( () => {
        tutorialSubjectRef.current.classList.add('visible');
    }, [])

    return (
        <li className="TutorialSubjects" ref={tutorialSubjectRef}>
            <Link to={`/course/${data.id}`}>
                <h3>{data.name}</h3>
            </Link>
            <Image imgSrc={data.image} />
            <span>قیمت: {convertToPersianNum(data.price)}</span><br/>
            <Button handleClick={handleAdd} 
                style={{
                    backgroundColor: themeValues.theme.color, 
                    border: themeValues.theme.color, 
                    color: themeValues.theme.textColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {added ? 
                    <>
                        حذف از سبد خرید
                        <MdOutlineRemoveShoppingCart />
                    </> 
                    : 
                    <>
                        افزودن به سبد خرید
                        <IoMdAdd />
                    </>}                
            </Button>
        <br/></li>
    )
}

TutorialSubjects.propTypes = {
    data: PropTypes.array,
}

export default TutorialSubjects;