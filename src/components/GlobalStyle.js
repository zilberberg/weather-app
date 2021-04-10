import { createGlobalStyle} from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    }
    #root {
        font-coloe: ${({ theme }) => theme.text};
    }
    .header {
        background: ${({ theme }) => theme.header};
    }
    .header a {
        color: ${({ theme }) => theme.linksSecondary};
    }
    .brand a {
        color: ${({ theme }) => theme.links};
    }
    .main {
        background: ${({ theme }) => theme.body};
    }
    .tiles li {
        border-color:  ${({ theme }) => theme.border};;
    }
    .tiles div {
        color: ${({ theme }) => theme.text};
    }
    .MuiTypography-body1 {
        color: ${({ theme }) => theme.links};
    }
`