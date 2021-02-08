import styled from 'styled-components';
import Linia from "./Linia"
import Textos from "../textos.json"

const StyledContent = styled.div`
    padding: 0 2.5rem 0 2.5rem;
`;

export default () => {
    const textTeatre = Textos.map(linia=> <Linia text = {linia} />)
    return (
        <StyledContent>
            {textTeatre}
       </StyledContent>
    );
};