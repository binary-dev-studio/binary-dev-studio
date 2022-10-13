import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.background.default};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  .text-ellipsis{
    width:100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  
  *:focus {
    outline: 0 !important;
  }

.ant-menu-item,
.ant-menu-submenu-title {
  padding: 0px;
  height: 50px;
}


`;



// a{
//   color:${(props) => props.theme.palette.link.main};
//   &:hover {
//     color: ${(props) => props.theme.palette.link.hover};
//   }
//   &:active {
//     color: ${(props) => props.theme.palette.link.active};
//   }
//   &:disabled {
//     color: ${(props) => props.theme.palette.link.disabled};
//   }
// }

export default GlobalStyle;
