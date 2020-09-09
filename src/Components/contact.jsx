import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";

export function Contact() {
    const language = useSelector((state)=>state.language)
    const dispatch = useDispatch();
    return (
        <>
            <h1>{language} est sélectionné </h1>
            {   language === 'english' ?
                <Button onClick={(()=>dispatch({type:"ENGLISH"}))} disabled={true}>Anglais</Button>
                : <Button onClick={(() => dispatch({type: "ENGLISH"}))}>Anglais</Button>
            }
            {   language === 'french' ?
                <Button onClick={(()=>dispatch({type:"FRENCH"}))} disabled={true}>Français</Button>
                : <Button onClick={(() => dispatch({type: "FRENCH"}))}>Français</Button>
            }
        </>
    );
}
