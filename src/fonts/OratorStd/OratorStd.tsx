import { createGlobalStyle } from 'styled-components';
import OratorStd from './OratorStd.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'OratorStd';
        font-style: normal;
        font-weight: normal;
        src: local('OratorStd'), url(${OratorStd}) format('woff');
    }
`;
