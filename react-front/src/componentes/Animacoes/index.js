import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from {
        opacity: 0;
        
    }
    to {
        opacity: 1;
        
    }
`;
export const rotateFromRight = keyframes`
from {
    transform: translateX(100%) rotate(360deg);
}
to {
    transform: translateX(0) rotate(0deg);
}
`;

export const popIn = keyframes`
0% {
    opacity: 0;
    transform: scale(0.5);
  }
100% {
    opacity: 1;
    transform: scale(1);
  }
`