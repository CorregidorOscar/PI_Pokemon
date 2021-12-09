import styled, { keyframes } from "styled-components";
import bg1 from "../../assets/background/1.jpeg";
import bg2 from "../../assets/background/2.jpeg";
import bg3 from "../../assets/background/3.jpeg";
import bg4 from "../../assets/background/4.jpeg";

export default function Background() {
  return <Container></Container>;
}
const fade = keyframes`
  0%, 10%{
      background-image: url(${bg1})}
      15%,35% {
          background-image: url(${bg2})}
  40%,60% {
    background-image: url(${bg3})
  }
  65%, 85%{
    background-image: url(${bg4})
  }
  
  90%, 100%{
    background-image: url(${bg1})

  }
`;
const Container = styled.div`
  width: 50vw;
  height: 50vh;
  animation: ${fade} 16s infinite;
`;
