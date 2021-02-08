import styled from 'styled-components';

const StyledParagraph = styled.p`
    font-family: 'Merriweather', serif;
    color: #fff;
    line-height: 1.5rem;
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
