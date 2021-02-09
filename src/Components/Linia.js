import styled from 'styled-components';

export const StyledParagraph = styled.p`
    font-family: 'Merriweather', serif;
    color: #fff;
    line-height: 1.3rem;
    background-color: ${({isMarked}) => isMarked ? "red" : "transparent"};
    :before{
        content: "-";
    }
`;

export default (props) => {
    return(
        <StyledParagraph>
            {props.text}
        </StyledParagraph>
    )
}

