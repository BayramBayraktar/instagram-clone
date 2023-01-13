import styled from 'styled-components'

const Container = styled.div`
    width: 820px;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:32px auto 0 ;
`;

const Login = styled.div`
    display: flex;

`;

const LoginForm = styled.div`

`;

const Form = styled.div`
    width:350px;
    display: flex;
    flex-direction:column;
    border:1px solid rgba(var(--b6a,219,219,219),1);
    padding: 10px 0;
    margin-bottom:10px;

`;

const Logo = styled.img`

    margin: 36px auto 12px auto;
`;
const FormContent = styled.div`

`;
const Inputs = styled.div`
    margin: 0 40px 6px ;

    &>.logınbtn {
        width: 100%;
        margin-top:8px;
        padding: 5px 9px;
        background-color: rgba(var(--d69,0,149,246),1); 
        border: 1px solid transparent;
        border-radius:4px; 
        border: none;
        color: #fff;
        font-size:15px;
        cursor: pointer;
        &:disabled {
            background-color: rgba(var(--d69,0,149,246),.3);
        }
    }



`;

const Input = styled.div`
    
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


    &>.visibilityBtn {
        border: none;
        background: transparent;
        cursor: pointer;
    }


`;

const OR = styled.div`
    display: flex;
    align-items:center;
    margin: 10px 40px 18px;
    
    &>.solid {
        width: 100%;
        height: 0.3px;
        background:rgba(var(--b38,219,219,219),1);;
    }

    &>.text {
        font-size: 13px;
        margin: 0 18px;
        color: rgba(var(--f52,142,142,142),1)
    } 

`;

const WithFacebook = styled.div`
    cursor: pointer;
    
    &>div {
        display: flex;
        justify-content:Center;
        align-items:center;
        color: #385185;

        &>svg {
            margin-right:8px;
        }
    }
`;

const Forgot = styled.div`
    margin:  20px 40px 0;
    text-align:center;
    font-size:12px;
    color: rgba(var(--fe0,0,55,107),1);

    &>p {
        color: red;
    }
`;

const SignUp = styled.div`
    text-align:center;
    border:1px solid rgba(var(--b6a,219,219,219),1);
    padding: 15px;
    margin: 0 0 10px;
    font-size:14px;

        &>.evident {
             color: rgba(var(--d69,0,149,246),1);
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







export {
    Container,
    Login,
    LoginForm,
    Form,
    Logo,
    FormContent,
    Input,
    Inputs,
    OR,
    WithFacebook,
    Forgot,
    SignUp,
    GetAppStores,

}