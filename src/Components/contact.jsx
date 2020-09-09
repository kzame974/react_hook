import React from "react";
import {useSelector} from "react-redux";

export function Contact() {
    const language = useSelector((state)=>state.language)
    return (
        <h1>{language} est sélectionné </h1>
    );
}
