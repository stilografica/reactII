import styled from 'styled-components';
import Linia from "./Linia"
import Textos from "../textos.json"
import {useState} from "react"

const StyledContent = styled.div`
    padding: 0 2.5rem 0 2.5rem;
    color: #fff;
    height: 250px;
        p{
            font-family: 'Merriweather', serif;
            font-size: 1.1rem;
            line-height: 1.6rem;
        }
`;

const StyledButton = styled.button`
    font-family: 'Merriweather', serif;
    font-size: 1rem;
    color: #fff;
    background-color: red;
    border:none;
    padding: 5px;
    margin: 0 .5rem;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:hover{
        opacity: 0.8;
    }
`;

let i = 0;

export default () => {
    const textTeatre = Textos.map(linia=> <Linia text = {linia} />)
    const [sentence, SetSentence] = useState(textTeatre[0])
    //Función para acceder a la siguiente frase
    const next = () =>{
        i++;
        if( i < textTeatre.length) {
            SetSentence(textTeatre[i]);
        } else { //Condición para que por mucho que se intente avanzar más allà del array no se pueda
            i=6;  
        }
    }
    //Función para retroceder a la anterior frase
    const prev = () =>{
        i--;
        if(i >= 0) {
            SetSentence(textTeatre[i]);
        } else { //Condición para que por mucho que se intente retroceder más allà del array no se pueda
            i = 0;   
        }
    }
    return (
        <StyledContent>
            <StyledButton onClick={() => prev()}>Anterior</StyledButton>
            <StyledButton onClick={() => next()}>Siguiente</StyledButton>
            {sentence}
        </StyledContent>
    );
};