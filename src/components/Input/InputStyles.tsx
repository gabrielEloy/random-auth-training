import styled from 'styled-components';


const InputWrapper = styled.div`
    display: flex;
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 5px;
    overflow: hidden;

    .preffix-wrapper{
        padding: 10px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input{
        border: none;
        color: ${({theme}) => theme.text};
        font-family: 'Noto Sans', sans-serif;
        width: 100%;
        :focus{
            outline: none;
        }
    }

`



export default InputWrapper;