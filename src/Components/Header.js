import styled from 'styled-components';
import Images from "../Assets/Images"

const StyledHeader = styled.div`
    display: block;
    margin: 0 auto;
    padding: 2.5rem  2.5rem 0 2.5rem;
`;

export default () => {
    return(
        <StyledHeader>
            <img src={Images[0].img} alt={Images[0].alt}/>
        </StyledHeader>
    )
}