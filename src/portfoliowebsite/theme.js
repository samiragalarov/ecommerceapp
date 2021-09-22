import { createGlobalStyle } from "styled-components"
export const lightheme = {
    body:"#fff",
    fontcolor:"#000"

};
export const darktheme = {
    body:"#000",
    fontcolor:"#fff"

}
export const GlobalStyles=createGlobalStyle`
     body{
         background-color: ${props =>props.theme.body}
     }


`


    

