import { useState, useEffect } from "react";
import React from 'react'


function TypingText() {
    const words = ["Frontend Developer", "React Developer", "Ant Design"];

    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1));

                if (text === currentWord) {
                    setIsDeleting(true);
                }
            } else {
                setText(currentWord.substring(0, text.length - 1));

                if (text === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    });

    return (
        <h1>
            {text}|
        </h1>
    );
}


export default TypingText;

