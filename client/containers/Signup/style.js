import styled from 'styled-components'

const Wrapper = styled.div`

`;

const Container = styled.div`
    width: 350px;
    margin: 12px auto;
    padding: 10px 0px;
`;

const Section = styled.div`
    border:1px solid rgba(var(--b6a,219,219,219),1);
    padding: 10px 0;

`;

const Content = styled.div`
    margin:0 40px;
    display: flex;
    flex-direction:column;

    &>.title-top {
        text-align:center;
        color: rgba(var(--f52,142,142,142),1);
        font-size: 17px;
    }


    &>.text-more {
        color: rgba(var(--f52,142,142,142),1);
        font-size: 12px;
        line-height: 16px;
        margin: 10px 0px;
        text-align: center;
    }
`;

const SignBtn = styled.button`

    &:disabled {
        background-color: rgba(var(--d69,0,149,246),.3);
    }
    margin: 8px 0 8px 0;
    border: none;
    background-color: rgba(var(--d69,0,149,246),1);
    color: rgba(var(--eca,255,255,255),1);
    font-size: 14px;
    font-weight: 600;
    padding: 5px 9px;
    border-radius:3px;
    cursor: pointer;
`;

const Logİn = styled.div`
    border:1px solid rgba(var(--b6a,219,219,219),1);

    display: flex;
    align-items: center;
    justify-content:center;
    color: rgba(var(--i1d,38,38,38),1);
    font-size: 14px;
    margin: 15px;

    &>a {
        color: rgba(var(--d69,0,149,246),1);
        margin-left: 2px; 
    }


`;

const Logo = styled.img`
    margin: 36px auto 12px auto;
    
`;
const FacebookWİth = styled.div` 
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 8px; 

    &>a {
        display: flex;
        justify-content: center;
        align-items:center;
        width: 100%;
        background-color: rgba(var(--d69,0,149,246),1);
        border: 1px solid transparent;
        color: #fff;
        border-radius:4px;
        font-size:14px;
        padding: 5px 9px;

        &>svg {
            margin-right: 8px; 
            transform: scale(1.3);
        }
    }

`;
const OR = styled.div`
    margin: 10px 0px 18px; 
    display: flex;
    align-items: center;

    &>.solid {
        height: 1px;
        background-color: rgba(var(--b38,219,219,219),1);
        width: 100%;
    }

    &>.text {
        margin: 0 18px;
        font-size:13px;
    }


`;

const SignupForm = styled.div`

`;


const InputArea = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    margin-bottom: 6px; 

    &>label {
        position: absolute;
        top: 9px;
        font-size:12px;
        left: 8px;
        color: rgba(var(--f52,142,142,142),1);

        &.active {
            top: 0px;
        }
    }

    &>input {
        width: 100%;
        border: none;
        outline: none;
        height: 36px;
        padding: 9px 0 7px 8px;

        &.active {
            font-size: 12px;
            padding: 14px 0 2px 8px !important;
        }

    }

    &>.visibilityPassword{
        border: none;
        background: transparent;
        color: rgba(var(--f75,38,38,38),1);
        cursor: pointer;
        outline: none;
    }
`;

const GetAppStores = styled.div`
    text-align: center;
    margin: 20px 0 0 0; 
    &>.title {
        color: rgba(var(--i1d,38,38,38),1);
        font-size: 14px;
    }

    &>.StoreImgBox {
        display: flex;
        align-items:center;
        justify-content: center;
        margin: 20px 0 10px 0;
        &>img {
            height: 40px;
            margin-right:8px;
        }
    }

`;

const Message = styled.div`
    padding: 10px 0;
    color: green;
    font-size: 12px;
    
    &.Active {
        color:red;
    }
    
`;


export {
    Wrapper,
    Container,
    Section,
    Content,
    Logİn,
    SignBtn,
    Logo,
    FacebookWİth,
    OR,
    SignupForm,
    InputArea,
    GetAppStores,
    Message
}