import styled from "styled-components";

const Container = styled.div`

`;

const SwitchAccount = styled.div`

        display: flex;
        align-items: center;
        margin-top:23px;
        margin-bottom:10px; 


        &>img {
            width: 56px;
            height: 56px;
            margin-right:6px;
        }

        &>.Account-Container {
            display: flex;
            flex-direction:column;
            flex: 1 1 auto;
            margin-left:12px;
            
            &>span {
                font-size:14px;
            }

            &>.uniq {
                color: rgb(38,38,38);
                font-weight:600;
            }

            &>.name {
                color: rgb(142,142,142);
                font-weight:400;
            }


        }

        &>.Switch {
            border: none;
            outline: none;
            font-weight:600;
            font-size:12px;
            color: rgb( 0, 149, 246);
            background: transparent;
            cursor: pointer;

        }

`;

const SuggestionsContainer = styled.div`
margin-bottom:12px;

`;
const Title = styled.div`
    display: flex;
    align-items:center;
    padding: 6px 4px 4px 0;
    color: rgb(142,142,142);
    font-weight:600;
    font-size:14px;


    &>span {
        flex:1 1 auto;
    }

    &>.See {
        text-align:end;
        color: rgb(38,38,38);
        font-size:12px;
        font-weight:600;
        cursor: pointer;
    }

`;

const SuggestionsAccounts = styled.div`
    padding: 8px 0 8px 0;
    margin-left:4px;

`;

const Account = styled.div`
    display: flex;
    padding: 8px 0 8px 0;

    &>img {
        width: 32px;
        height: 32px;
        margin-right:12px;
    }

    &>.Account-Container {
        display: flex;
        flex-direction:column;
        flex:1 1 auto; 

        &>span {
            font-weight:600;
            font-size:14px;
            color: rgb(38,38,38);
        }

        &>.newFrends {
            marign-top:8px;
            color: rgb(142,142,142);
            font-weight:400;
            font-size:12px;
        }
    }

    &>.Follow {
        border: none;
        outline: none;
        font-weight:600;
        font-size:12px;
        color: rgb( 0, 149, 246);
        background: transparent;
        cursor: pointer;
    }




`;




export {
    Container,
    SwitchAccount,
    SuggestionsContainer,
    Title,
    SuggestionsAccounts,
    Account,
}