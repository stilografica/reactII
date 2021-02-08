import styled from 'styled-components';
import {keyframes} from 'styled-components'
import Content from "./Content"
import Header from "./Header"
import Welcome from "./Welcome"
import Footer from "./Footer"

const appear = keyframes`
    0% {
      transform: translateX(-40px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: none;
    }
  `;

const StyledArticle = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20.75rem;
    height: 43.75rem;
    border-radius: 4rem;
    border: 2px solid white;
    background-color: #060e1e;
    background-image: url(../../src/Assets/Images/lloyd-dirks-4SLz_RCk6kQ-unsplash.jpg);
    background-blend-mode: luminosity;
    -webkit-animation: ${appear} 1s both;
          animation: ${appear} 1s both;
`;

export default () => {
  return(
    <StyledArticle>
      <Header />
      <Welcome name="Marc"/>
      <Content />
      <Footer />
    </StyledArticle>
    )
}
