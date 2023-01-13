import styled from "styled-components";



const Wrapper = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content:center;
    border-bottom 1px solid rgba(219, 219, 219);
    background-color: rgba(255, 255, 255);
    top: 0px;
    z-index:999;


`;


const Container = styled.div`
    max-width:975px;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;

`;

const LogoContainer = styled.div`
    display: flex;
    flex: 1 0 127px;
    cursor: pointer;
`;

const Logo = styled.img`
    width: 103px;
    height: 29px;
`;

const RightContent = styled.div`
    display: flex;

`;



const InputSection = styled.div`
    position: relative;
    width: 268px;

    @media(max-width:640px) {
        display: none;
    }

    

`;

const Accounts = styled.div`
    position: absolute;
    width: 375px;
    height: 362px;
    overflow: hidden;
    overflow-Y: scroll; 
    top: 50px;
    left: -55px;
    background-color: #fff; 
    -webkit-filter: drop-shadow(0 0 5px rgba( 0 , 0 , 0, 0.0975));

 

    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: -10px;
        width: 15px;
        height: 10px;
        background-image:
          linear-gradient(to bottom right, transparent 50%, rgba(255, 255, 255) 0),
          linear-gradient(to top right, rgba(255, 255, 255) 50%, transparent 0);
        background-size: 50% 100%;
        background-repeat: no-repeat;
        background-position: left, right;
        -webkit-filter: drop-shadow(0 0 5px rgba( 0 , 0 , 0, 0.0975));
    }
    
`;

const Account = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const AccountsOption = styled.div`
    padding: 12px 0 0px 0px;
    >a {
        display: flex;
        align-items:center;
        padding: 8px 0 8px 16px;
        &>img {
            width: 44px;
            height: 44px;
            margin-right:12px;
        }

        &>.section-name{
            display: flex;
            flex-direction:column;
            justify-content:center;
            font-size:14px;


            &>.uniq-name {
                color: rgba(38.38.38)
            }
            
            &>.user-name {
                color: rgba(142,142,142)
            }

        }   
    }


`;

const InputContainer = styled.div`
  
    background-color: rgba(239, 239, 239);
    border-radius:8px;
    display: flex;
    align-items:center;
    padding: 0 16px;
    height: 36px;
    
    &>input {
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        background: transparent;
        font-size:100%;
        font-weight:100;

            ::-webkit-search-cancel-button {
                -webkit-appearance: none;
                height: 20px;
                width: 20px;
                background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;
                background-size: contain;

            }
       
        }

    }

    &>svg {
        transform: scale(1.3);
        margin-right: 12px;
        display: block;

        &.active {
            display: none;
        }
    }
`;

const NavBar = styled.ul`
    display: flex;
    flex:1 0 127px;
    list-style:none;
    justify-content: flex-end;
    align-items:center;
    position: relative;

    &>li {
        margin-left:22px;
        cursor: pointer;
        display: flex;
        
        &>div {
            .notification {
                position: relative;
                ::after {
                    content: "";
                    position:absolute;
                    border-radius:50%;
                    width: 3px;
                    height: 3px;
                    background: red;
                    bottom:0px;
                    left: 10px;
                }
            }
        }


    }

    

`;

const UserProfile = styled.div`
    position: relative;

`;


const Avatar = styled.img`
    width: 24px;
    height: 24px;
`;


const UserMenu = styled.div`
    position: absolute;
    width: 214px;
    right: -29px;
    padding: 12px 0 0 0;
    top: 40px;
    list-style:none;
    background-color: #fff; 
    -webkit-filter: drop-shadow(0 0 5px rgba( 0 , 0 , 0, 0.0975));
    

    &:before {
        content: "";
        position: absolute;
        right: 30px;
        top: -16px;
        width: 20px;
        height: 15px;
        background-image:
          linear-gradient(to bottom right, transparent 50%, rgba(255, 255, 255) 0),
          linear-gradient(to top right, rgba(255, 255, 255) 50%, transparent 0);
        background-size: 50% 100%;
        background-repeat: no-repeat;
        background-position: left, right;
        -webkit-filter: drop-shadow(0 0 5px rgba( 0 , 0 , 0, 0.0975));


    }

    &>.user-Logout-button {
        padding: 8px 0 8px 16px;
        border-top: solid 1px   rgba( 0 , 0 , 0, 0.0975);
        font-size:14px;
    }
    

`;

const UserOprtion = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 0 8px 16px;

    &>.icon {
        margin-right:12px;
        display: flex;
    }

    &>.title {
        font-size:14px;
    }
`;


const PostModalWrapper = styled.div`
    position: absolute;
    display: flex;
    align-Items: center;
    justify-content: center;
    background-color: rgb(0 0 0 / 55%);
    width: 100%;
    height: 100vh;
    z-index: 999;
    top: 0px;
    left: 0px;
`;

const PostModal = styled.div`
    position: relative;
    width: 406px;
    max-width:662px;
    min-width:348px;
    min-height:391px;
    max-height:705px; 
    background: #fff;
    border-radius:8px;

`;


const PostModalContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    .Loader {
        display: flex;
        align-items:center;
        justify-content:center;
        height: 100%;
    }

    .resultMessage {
        display: flex;
        align-items: center;
        justify-content:center;
        height: 100%;
    }

    .SelectPictures {
        display: flex;
        flex-direction:column;
        align-items: center;
        height: 100%;
        
        .title {
            font-weight:600;
            font-size:16px;
            text-align:center;
            line-height:24px;
        }
        
        .container {
            height: 100%;
            display: flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width: 100%;

            .drag-title {
                color:rgb(38,38,38);
                font-weight:300;
                font-size:22px;
            }

            .files-label {
                padding: 8px;
                color: #fff;
                background: rgb(0, 149,246);
                border-radius:8px;
            }


            border-top:1px solid rgb(219,219,219);

                input[type='file']{
                    display: none;
                }
        }
    }

    .Preview {
        .goBack {
            padding: 0  15px;
            background: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
        
            svg {
                font-size:20px;
                cursor: pointer;
            }

            .next {
                color: rgb(0, 149, 246);
                font-size:14px;
                cursor: pointer;
            }
            
        }
    }

    .postAbout {
        height: 100%;
        display: flex;
        flex-direction:column;

        
        textarea {
            resize: none;
            outline: none;
            padding: 15px;
        }

        .goBack {
            padding: 15px;
            background: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;

        
            svg {
                font-size:20px;
                cursor: pointer;
            }

            .next {
                color: rgb(0, 149, 246);
                font-size:14px;
                cursor: pointer;
                outline: none;
                border: none;
                background: transparent;
            }

    }

`;

const Activity = styled.div`
    position: absolute;
    top: 45px;
    width: 500px;
    right: 0px;
    background: #ffff;
    border-radius: 6px;
    -webkit-filter: drop-shadow(0 0 5px rgba( 0 ,0 ,0,0.0975));
    z-index:9999;


    &>.container {
        display: flex;
        flex-direction:column;
        height: 362px;
        overflow: hidden;
        overflow-Y:scroll; 

        

        &>.item {
            display: flex;
            align-items:center;
            padding: 12px 16px 13px;

            &>.user {
                display: flex;
                align-items:center;

                &>.current-name {
                    margin-left:10px;
                    font-size:14px;
                }

                &>.current {
                    width: 44px;
                    height: 44px;
                } 
            }

           

            &>.notification-content {
                margin-left:15px;
            }

            &>.different {
                width: 44px;
                height: 44px;
                margin-left:auto;
            }
            
            
        }
    }
`;



export {
    Wrapper,
    Container,
    LogoContainer,
    Logo,
    RightContent,
    Accounts,
    Account,
    AccountsOption,
    InputSection,
    InputContainer,
    NavBar,
    UserProfile,
    Avatar,
    UserMenu,
    UserOprtion,
    PostModalWrapper,
    PostModal,
    PostModalContent,
    Activity,
}