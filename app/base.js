import { css } from 'styled-components';

const media = (content, breakpoint) => css`
  @media only screen and (max-width: ${breakpoint}) {
    ${content}
  }
`;

const bp = {
  bp600: '37.5em', // 600px
};

export { media, bp };
