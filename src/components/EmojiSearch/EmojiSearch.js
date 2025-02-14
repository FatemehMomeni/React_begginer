import Reac, {useEffect, useState, useRef} from "react";
import "./EmojiSearch.css";
import "./emojiList.json";


const EmojiSearch = () => {
    const [emojiList, setEmojiList] = useState(null);
    const [title, setTitle] = useState('');
    const inputTitleRef = useRef(null);

    // const loadEmojiList = async () => {
    //     const response = await fetch('https://github.com/ahfarmer/emoji-search/blob/master/src/emojiList.json');
    //     const responseList = await response.json();
    //     await setEmojiList(responseList);
    // }

    // useEffect(() => {
    //     loadEmojiList();
    // }, [])

    const findEmoji = () => {
        emojiList.map( (item) )
        let index = emojiList.findIndex( (inputTitle) => inputTitle === title );
        console.log(index);
    }

    const handleTitle = (event) => {
        setTitle(event.target.value);
        findEmoji();
    }

    return (
        <div className="Emoji">
            <input type="text" useRef={inputTitleRef} onChange={handleTitle}></input>
        </div>
    )
}

export default EmojiSearch;
