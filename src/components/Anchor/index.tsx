import styled from 'styled-components';

const AnchorButton = styled.button`
    background: none;
    border: none;
    color: ${({theme}) => theme.primary};
    font-family: inherit;
    cursor: pointer;

    :hover{
        text-decoration: underline;
    }
`



export default AnchorButton;