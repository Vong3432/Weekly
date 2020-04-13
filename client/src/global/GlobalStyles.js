import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    :root {
        --overlay: ${({theme}) => theme.overlay};
        --primary-color : ${({ theme }) => theme.background};
        --inner-shadow: ${({theme}) => theme.innerShadow};
        --shadow: ${({theme}) => theme.shadow}
    }

    body, 
    .navbar {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }    

    a { 
        color: ${({ theme }) => theme.text}; 
        text-decoration: none;
    }

    .soft-shadow {
        box-shadow: ${({ theme }) => theme.shadow};
    }

    .inner-shadow {
        box-shadow: ${({ theme }) => theme.innerShadow};
    }    
    
    .google-button,.profile-container, .profile-collapse-item {
        color: ${({ theme }) => theme.text} !important;
        background-color: ${({ theme }) => theme.background} !important;
        box-shadow: ${({ theme }) => theme.shadow} !important;
    }

    .google-button > div {
        background-color: ${({ theme }) => theme.background} !important;
    }

    .google-button:hover, .google-button:hover > div, .profile-collapse-item:hover {
        box-shadow: ${({ theme }) => theme.innerShadow} !important;
    }

    .day {
        color: ${({ theme }) => theme.text};
        opacity: .5;
    }

    .arrow-svg {
        fill: ${({ theme }) => theme.arrow};
    }    

    .add-svg {        
        fill: ${({ theme }) => theme.text};
    }

    .calendar-date {
        color: ${({ theme }) => theme.arrow};
    }

    .hasActivity {        
        background: ${({theme}) => theme.hasActivity} !important;
        opacity: 1;
        animation: none !important;
        box-shadow: none !important;        
    }

    .hasActivity .calendar-date {
        color: inherit !important;
    }
    
    input,     
    .date,
    form select,
    textarea {
        border: none;
        -moz-box-shadow: ${({ theme }) => theme.innerShadow};
        -webkit-box-shadow: ${({ theme }) => theme.innerShadow};
        box-shadow: ${({ theme }) => theme.innerShadow};
        background: ${({ theme }) => theme.background};
    }

    .round {
        border-radius: 50px !important; 
    }

    .neomorphism-logo { 
        border-radius: 5px;
        cursor: pointer;
        display:flex;
        flex-flow:column;
        align-items: center;
        justify-content: center;               
        box-shadow: ${({ theme }) => theme.shadow};                                   
        width: 35px;
        height: 35px;
        padding: 10px;
        background: ${({ theme }) => theme.background};
    }     

    .main-right__day:hover, .neomorphism-logo:hover {        
        animation: shadowOnHoverAnimation 100ms ease-out forwards;
    }

    @keyframes shadowOnHoverAnimation {
        from {            
            box-shadow: ${({ theme }) => theme.shadow};
        }
        to {            
            opacity: 1;
            box-shadow: ${({ theme }) => theme.innerShadow};
        }
    }

    .day:hover {
        animation: none !important;
    }
    
    .main-right::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.arrow};
    }
    
    .main-right::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.arrow};
    }
       
`