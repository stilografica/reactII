import styled from 'styled-components';

const StyledWelcome = styled.h3`
    font-size: 1.4rem;
    line-height: 1.3rem;
    color: white;
    text-align: center;
    margin:0;
    display: ${({logged}) => logged ? "block" : "none"};
        hr{
            width: 3rem;
        }
`;

export default (props) => {
    return(
        <StyledWelcome logged={true}>
            {props.name}, ¿ensayamos?
            <hr />
        </StyledWelcome>
    )
}