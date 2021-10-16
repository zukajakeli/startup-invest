import media from './media';
import { screenSizes } from './media';

const theme = {
  colors: {
    darkGray: '#acbcd4',
    gray: '#d0d9e7',
    ash: '#dbe2ee',
    white: '#ffffff',
    red: '#ff563f',
    orange: '#FF9A05',
    black: '#323b4b',
    green: '#26acb9',
    darkGreen: '#22a3c3',
    errorRed: '#E44E61',
  },
  screenSizes,
  ...media,
};

export default theme;
