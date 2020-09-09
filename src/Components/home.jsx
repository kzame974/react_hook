import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";

export function Home() {
    const dispatch = useDispatch();
    const language = useSelector((state)=>state.language)
    return (
        <>
            <div>
                <h1>redux + hooks</h1>
                <p>{language} est sélectionné </p>
                {   language === 'french' ?
                    <Button onClick={(()=>dispatch({type:"FRENCH"}))} disabled={true}>Français</Button>
                    : <Button onClick={(() => dispatch({type: "FRENCH"}))}>Français</Button>
                }
                {   language === 'english' ?
                    <Button onClick={(()=>dispatch({type:"ENGLISH"}))} disabled={true}>Anglais</Button>
                    : <Button onClick={(() => dispatch({type: "ENGLISH"}))}>Anglais</Button>
                }
            </div>
        </>
    );
}
