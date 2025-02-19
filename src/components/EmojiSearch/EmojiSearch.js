import React, {useEffect, useState, useRef} from "react";
import "./EmojiSearch.css";
import EMOJI from "./emojiList.json";


const EmojiSearch = () => {
    const [emojiList, setEmojiList] = useState([]);
    const [title, setTitle] = useState('');
    const [symbol, setSymbol] = useState(null);
    const inputTitleRef = useRef(null);

    const loadEmojiList = async () => {
        const response = await fetch('https://github.com/andrewagain/emoji-search/blob/master/src/emojiList.json', 
            {mode: "no-cors"}
        );
        console.log(response);
        const responseList = await response.json();
        await setEmojiList(responseList);
        console.log(emojiList);
    }

    useEffect(() => {
        loadEmojiList();
    }, [])

    useEffect( () => {
        inputTitleRef.current.focus();
    }, []);

    const findEmoji = () => {
        let flag = true;
        emojiList.map( (item) => {
            if (item.title === title) {
                setSymbol(item.symbol);
                flag = false;
            }                           
        })        
        if (title && flag){
            emojiList.map( (item) => {
                if (item.keywords.includes(title))
                    setSymbol(item.symbol);
            })   
        }
    }    

    const handleInput = (event) => {
        setTitle(event.target.value);
    }

    useEffect( () => {
        findEmoji();
    }, [title])

    return (
        <div className="Emoji">
            <input type="text" ref={inputTitleRef} onChange={handleInput}></input>
            <span> :متن را وارد کنید</span><br/><br/>
            <span>{symbol} :ایموجی نظیر</span>
        </div>
    )
}

export default EmojiSearch;
