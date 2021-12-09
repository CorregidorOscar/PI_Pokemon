import styled, { keyframes } from "styled-components";

export const BackgroundColor = styled.div`
  &.normal {
    background: rgb(168, 167, 122);
    background: radial-gradient(
      circle,
      rgba(168, 167, 122, ${(props) => props.glass}) 0%,
      rgba(168, 167, 122, ${(props) => props.glass}) 35%,
      rgba(140, 139, 105, ${(props) => props.glass}) 100%
    );
  }
  &.fire {
    background: rgb(238, 129, 48);
    background: radial-gradient(
      circle,
      rgba(238, 129, 48, ${(props) => props.glass}) 0%,
      rgba(238, 129, 48, ${(props) => props.glass}) 35%,
      rgba(255, 90, 0, ${(props) => props.glass}) 100%
    );
  }
  &.water {
    background: rgb(99, 144, 240);
    background: radial-gradient(
      circle,
      rgba(99, 144, 240, ${(props) => props.glass}) 0%,
      rgba(99, 144, 240, ${(props) => props.glass}) 35%,
      rgba(35, 105, 255, ${(props) => props.glass}) 100%
    );
  }
  &.electric {
    background: rgb(247, 208, 44);
    background: radial-gradient(
      circle,
      rgba(247, 208, 44, ${(props) => props.glass}) 0%,
      rgba(247, 208, 44, ${(props) => props.glass}) 35%,
      rgba(230, 156, 36, ${(props) => props.glass}) 100%
    );
  }
  &.grass {
    background: rgb(122, 199, 76);
    background: radial-gradient(
      circle,
      rgba(122, 199, 76, ${(props) => props.glass}) 0%,
      rgba(122, 199, 76, ${(props) => props.glass}) 35%,
      rgba(81, 186, 18, ${(props) => props.glass}) 100%
    );
  }
  &.ice {
    background: rgb(179, 236, 233);
    background: radial-gradient(
      circle,
      rgba(179, 236, 233, ${(props) => props.glass}) 0%,
      rgba(150, 217, 214, ${(props) => props.glass}) 35%,
      rgba(86, 219, 213, ${(props) => props.glass}) 100%
    );
  }
  &.fighting {
    background: rgb(194, 46, 40);
    background: radial-gradient(
      circle,
      rgba(194, 46, 40, ${(props) => props.glass}) 0%,
      rgba(194, 46, 40, ${(props) => props.glass}) 35%,
      rgba(187, 24, 17, ${(props) => props.glass}) 100%
    );
  }
  &.poison {
    background: rgb(156, 66, 154);
    background: radial-gradient(
      circle,
      rgba(156, 66, 154, ${(props) => props.glass}) 0%,
      rgba(163, 62, 161, ${(props) => props.glass}) 35%,
      rgba(160, 26, 143, ${(props) => props.glass}) 100%
    );
  }
  &.ground {
    background: rgb(218, 108, 30);
    background: radial-gradient(
      circle,
      rgba(218, 108, 30, ${(props) => props.glass}) 0%,
      rgba(218, 112, 36, ${(props) => props.glass}) 50%,
      rgba(177, 94, 33, ${(props) => props.glass}) 100%
    );
  }
  &.flying {
    background: rgb(163, 145, 255);
    background: radial-gradient(
      circle,
      rgba(163, 145, 255, ${(props) => props.glass}) 0%,
      rgba(134, 128, 255, ${(props) => props.glass}) 50%,
      rgba(117, 110, 254, ${(props) => props.glass}) 100%
    );
  }
  &.psychic {
    background: rgb(249, 85, 135);
    background: radial-gradient(
      circle,
      rgba(249, 85, 135, ${(props) => props.glass}) 0%,
      rgba(249, 85, 135, ${(props) => props.glass}) 35%,
      rgba(228, 58, 110, ${(props) => props.glass}) 100%
    );
  }
  &.bug {
    background: rgb(191, 213, 26);
    background: radial-gradient(
      circle,
      rgba(191, 213, 26, ${(props) => props.glass}) 0%,
      rgba(166, 185, 26, ${(props) => props.glass}) 35%,
      rgba(98, 185, 26, ${(props) => props.glass}) 100%
    );
  }
  &.rock {
    background: rgb(168, 153, 122);
    background: radial-gradient(
      circle,
      rgba(168, 153, 122, ${(props) => props.glass}) 0%,
      rgba(168, 153, 122, ${(props) => props.glass}) 50%,
      rgba(147, 123, 70, ${(props) => props.glass}) 100%
    );
  }
  &.ghost {
    background: rgb(115, 87, 151);
    background: radial-gradient(
      circle,
      rgba(115, 87, 151, ${(props) => props.glass}) 0%,
      rgba(115, 87, 151, ${(props) => props.glass}) 35%,
      rgba(107, 41, 142, ${(props) => props.glass}) 100%
    );
  }
  &.dragon {
    background: rgb(118, 61, 255);
    background: radial-gradient(
      circle,
      rgba(118, 61, 255, ${(props) => props.glass}) 0%,
      rgba(111, 53, 252, ${(props) => props.glass}) 35%,
      rgba(74, 0, 255, ${(props) => props.glass}) 100%
    );
  }
  &.dark {
    background: rgb(47, 47, 47);
    background: radial-gradient(
      circle,
      rgba(47, 47, 47, ${(props) => props.glass}) 0%,
      rgba(24, 24, 24, ${(props) => props.glass}) 50%,
      rgba(0, 0, 0, ${(props) => props.glass}) 100%
    );
  }
  &.steel {
    background: rgb(183, 183, 206);
    background: radial-gradient(
      circle,
      rgba(183, 183, 206, ${(props) => props.glass}) 0%,
      rgba(183, 183, 206, ${(props) => props.glass}) 35%,
      rgba(103, 103, 103, ${(props) => props.glass}) 100%
    );
  }
  &.fairy {
    background: rgb(214, 133, 173);
    background: radial-gradient(
      circle,
      rgba(214, 133, 173, ${(props) => props.glass}) 0%,
      rgba(214, 133, 173, ${(props) => props.glass}) 35%,
      rgba(210, 97, 153, ${(props) => props.glass}) 100%
    );
  }
`;
// export default BackgroundColor;
export const StyledButton = styled.button`
  width: 5rem;
  height: 2rem;
  color: var(--colors-secondary);
  background-color: var(--colors-black);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: solid black 2px;
  transition: filter 250ms;
  border-radius: 0.5rem;
  transition: all 1s;
  /* margin: 0.25rem; */
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    /* transition: 0.2s ease-in; */
  }
  &:active {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const back = keyframes`

0%,100% {
  background: rgb(168,167,122);
  background: radial-gradient(circle, rgba(168,167,122,1) 0%, rgba(168,167,122,1) 35%, rgba(140,139,105,1) 100%);
}
5% {
  background: rgb(238,129,48);
  background: radial-gradient(circle, rgba(238,129,48,1) 0%, rgba(238,129,48,1) 35%, rgba(255,90,0,1) 100%);
}
10% {
  background: rgb(99,144,240);
  background: radial-gradient(circle, rgba(99,144,240,1) 0%, rgba(99,144,240,1) 35%, rgba(35,105,255,1) 100%);
}
15%{
  background: rgb(247,208,44);
  background: radial-gradient(circle, rgba(247,208,44,1) 0%, rgba(247,208,44,1) 35%, rgba(230,156,36,1) 100%);
}
20% {
  background: rgb(122,199,76);
  background: radial-gradient(circle, rgba(122,199,76,1) 0%, rgba(122,199,76,1) 35%, rgba(81,186,18,1) 100%);
}
25% {        
  background: rgb(179,236,233);
  background: radial-gradient(circle, rgba(179,236,233,1) 0%, rgba(150,217,214,1) 35%, rgba(86,219,213,1) 100%);
}
30% {
  background: rgb(194,46,40);
  background: radial-gradient(circle, rgba(194,46,40,1) 0%, rgba(194,46,40,1) 35%, rgba(187,24,17,1) 100%);
}
35% {
  background: rgb(156,66,154);
  background: radial-gradient(circle, rgba(156,66,154,1) 0%, rgba(163,62,161,1) 35%, rgba(160,26,143,1) 100%);
}
40% {
  background: rgb(218,108,30);
  background: radial-gradient(circle, rgba(218,108,30,1) 0%, rgba(218,112,36,1) 50%, rgba(177,94,33,1) 100%);
}
45%{
  background: rgb(163,145,255);
  background: radial-gradient(circle, rgba(163,145,255,1) 0%, rgba(134,128,255,1) 50%, rgba(117,110,254,1) 100%);
}
50% {
  background: rgb(249,85,135);
  background: radial-gradient(circle, rgba(249,85,135,1) 0%, rgba(249,85,135,1) 35%, rgba(228,58,110,1) 100%);
}
55% {
  background: rgb(191,213,26);
  background: radial-gradient(circle, rgba(191,213,26,1) 0%, rgba(166,185,26,1) 35%, rgba(98,185,26,1) 100%);
}
60%{
  background: rgb(168,153,122);
  background: radial-gradient(circle, rgba(168,153,122,1) 0%, rgba(168,153,122,1) 50%, rgba(147,123,70,1) 100%);
}
65% {
  background: rgb(115,87,151);
  background: radial-gradient(circle, rgba(115,87,151,1) 0%, rgba(115,87,151,1) 35%, rgba(107,41,142,1) 100%);
}
70%{
  background: rgb(118,61,255);
  background: radial-gradient(circle, rgba(118,61,255,1) 0%, rgba(111,53,252,1) 35%, rgba(74,0,255,1) 100%);
}
75% {
  background: rgb(47,47,47);
  background: radial-gradient(circle, rgba(47,47,47,1) 0%, rgba(24,24,24,1) 50%, rgba(0,0,0,1) 100%);
 
}
80% {
  background: rgb(183,183,206);
  background: radial-gradient(circle, rgba(183,183,206,1) 0%, rgba(183,183,206,1) 35%, rgba(103,103,103,1) 100%);
} 
90%{
  background: rgb(214,133,173);
  background: radial-gradient(circle, rgba(214,133,173,1) 0%, rgba(214,133,173,1) 35%, rgba(210,97,153,1) 100%);
}
`;
export const BackgroundAnimated = styled.div`
  animation: ${back} 60s infinite;
`;
