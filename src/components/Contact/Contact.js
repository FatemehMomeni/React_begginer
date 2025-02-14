import React, {useState, useRef, useEffect} from "react";
import validator from "validator";
import Button from "../Button/Button";
import "./Contact.css";
import Modal from "./Modal";
import { validateSubject } from "../../utils/validation";


const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors,setErrors] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const inputSubjectRef = useRef(null);

    const handleSubject = (event) => {
        if (validateSubject(event.target.value)){
            setSubject(event.target.value);
            setErrors({
                ...errors,
                subject: null
            })
        } else {
            setErrors({
                ...errors,
                subject: "عنوان باید بیشتر از ۸ کاراکتر باشد"
            })
        }
        setSubject(event.target.value);
    };
    
    const handelEmail = (event) => {
        console.log("subject: ", subject);
        console.log("message: ", message);
        if (validator.isEmail(event.target.value)){
            setEmail(event.target.value);
            console.log("email", email);
            setErrors({
                ...errors,
                email: null
            })
        } else {
            setErrors({
                ...errors,
                email: "ایمیل نامعتبر"
            })
        }
    };

    const handleMessage = (event) => {
        setMessage(event.target.value);
    };
    
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleSubmit = () => {
        setOpenModal(true);        
    };

    useEffect( () => {
        inputSubjectRef.current.focus();
    }, []);

    return (
        <div className="Contact">            
            <input ref={inputSubjectRef} type="text" onChange={handleSubject} />
            <span> :موضوع پیام</span><br/>
            {errors.subject && <span>{errors.subject}</span>}<br/>

            <input type="email" onChange={handelEmail} />            
            <span> :آدرس ایمیل</span><br/>            
            {errors.email && <span>{errors.email}</span>}<br/>
            
            <span> :متن پیام</span><br/>
            <textarea onChange={handleMessage}></textarea><br/>                        
            
            <div className="ModalMsg">
                <Button handleClick={handleSubmit}>ارسال</Button>
                <Modal isOpen={openModal} onClose={handleCloseModal}>
                    <h3>با تشکر از پیام شما</h3>
                </Modal>
            </div>
        </div>
    );
}

export default Contact;