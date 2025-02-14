import React, { useContext ,} from "react";
import { useParams } from 'react-router';
import COURSES from '../App/COURSES.json';
import Image from '../Image/Image';
import Button from '../Button/Button';
import ThemeContext from "../../contexts/ThemeContext";
import CartContext from "../../contexts/CartContext";
import './SingleCourse.css';
import { MdAdd, MdRemoveShoppingCart } from "react-icons/md"; 
import { convertToPersianNum } from "../../utils/validation";


const SingleCourse = (props) => {
    const { id } = useParams()
    const product = COURSES.find(item => item.id === id)
    const themeValues = useContext(ThemeContext);
    const { carts, dispatchCart } = useContext(CartContext);
    const added = carts.includes(product.id);
    
    const handleAdd = () => {
      if (added) {
        dispatchCart({
          type: "REMOVE_FROM_CART",
          id: product.id,
        });
      } else {
        dispatchCart({
          type: "ADD_TO_CART",
          id: product.id,
        });
      }
    };

    return (
      <div className="SingleCourse">
        <h2>{product.name}</h2>
        <Image imgSrc={product.image} />
        <p>قیمت: {convertToPersianNum(product.price)}</p>
        <Button
          handleClick={handleAdd}
          style={{
            color: themeValues.theme.textColor,
            borderColor: themeValues.theme.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {added ? (
            <>
                <MdRemoveShoppingCart />              
                حذف از سبد خرید              
            </>
          ) : (
            <>
                <MdAdd />              
                افزودن به سبد خرید              
            </>
          )}
        </Button>
      </div>
    );
};

export default SingleCourse;