import styled from 'styled-components';


const Button = styled.button`
    font-family: 'Noto Sans', sans-serif;
    color: ${({theme}) => theme.contrastText};
    padding: 0.58rem 9.9rem;
    background: ${({theme}) => theme.primary};
    border-radius:0.5rem;
    border: none;
`



export default Button;