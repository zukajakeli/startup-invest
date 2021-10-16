import { css } from 'styled-components';

export const screenSizes = {
  mobileS: 320,
  mobile: 480,
  tablet: 768,
  laptop: 1368,
  desktop: 1920,
};

export default Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => {
    if (args.length > 0) {
      const [firstArg, ...restOfArgs] = args;

      return css`
        @media (max-width: ${screenSizes[label]}px) {
          ${css(firstArg, ...restOfArgs)}
        }
      `;
    }
  };

  return acc;
}, {});
