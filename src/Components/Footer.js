import styled from 'styled-components';
import Images from "../Assets/Images"

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 0 0 27rem 27rem;
    padding: 0;
    height: 60px;
    transform: translateY(3px);
        img {
            max-width:30px;
            padding: 0 0.9rem 0 0.9rem;
        }
`;

export default () => {
    return(
        <StyledFooter>
            <img src={Images[1].img} alt={Images[1].alt}/>
            <img src={Images[2].img} alt={Images[2].alt}/>
        </StyledFooter>
    )
}