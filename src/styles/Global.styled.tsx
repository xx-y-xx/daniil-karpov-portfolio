import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    section:nth-of-type(odd){
        background-color: ${Theme.colors.primaryBg};        
    }
    section:nth-of-type(even){        
        background-color: ${Theme.colors.secondaryBg};
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        a {
            font-family:"Poppins", sans-serif;
            text-decoration: none;
            color: ${Theme.colors.font};
            &:hover {
                cursor: pointer;
            }
        }

        ul {
            list-style: none;            
        }
        
        button {
            background-color: unset;
            border: none;
        }
        color: ${Theme.colors.font};
    }
    h2{
        font-family:"Poppins", sans-serif;    
        font-weight: 600;
        font-size: 46px;
        color: ${Theme.colors.font};
    }
    h3{
        text-align: center;
        font-family:"Poppins", sans-serif;
        font-weight: 600;
        font-size: 30px;
        line-height: 89%;
        color: ${Theme.colors.font};
        text-transform: uppercase;
    }
`