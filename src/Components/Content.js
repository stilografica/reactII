import {useState} from "react"
import styled from 'styled-components';
import Linia, {StyledParagraph} from "./Linia"
import Textos from "../textos.json"

const StyledContent = styled.div`
    padding: 0 2.5rem 0 2.5rem;
    color: #fff;
    height: 350px;
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

let i = -1;
let textTeatre;

const textState = Textos.map(linia=> <Linia text = {linia} />)
export default () => {
    const [sentence, SetSentence] = useState(textState)
    //Función para acceder a la siguiente frase
    const next = () => {
        i++;
        if( i < textState.length) {
            getMap();
            SetSentence(textTeatre);
        } else { //Condición para que por mucho que se intente avanzar más allà del array no se pueda
            i=6;  
        }
    }
    //Función para retroceder a la anterior frase
    const prev = () => {
        i--;
        if( i >= 0) {
            getMap();
            SetSentence(textTeatre);
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
//Función en la que creo otro map para poder hacer la comparación "linia==textState[i].props.text"
const getMap = () =>{
    textTeatre = Textos.map((linia)=> {
        return( linia == textState[i].props.text ? <StyledParagraph isMarked={true}>{linia}</StyledParagraph> : <StyledParagraph>{linia}</StyledParagraph>
        )
    })
}