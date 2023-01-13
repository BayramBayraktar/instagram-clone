import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    max-width:975px;
    margin: 60px auto 0px; 
    padding: 30px 20px 0px;

`;

const Container = styled.div`
    display: flex;
    margin-bottom:44px;

    &.post {
        flex-direction:column; 
    }
    
    &.Content-wrapper {
        flex-direction:column; 
    }
  
`;

const ProfilePicture = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-grow:1;
    margin-right:30px;
    
    &>img {
        width: 150px;
        height: 150px; 
    }
`;

const ProfileDetail = styled.div`
    flex-grow:1;
`;

const TopSection = styled.div`
    display: flex;
    align-items:center;
    margin-bottom:20px;

    &>.title {
        color: rgb(38,38,38);
        font-weight:300;
        font-size:28px;
        line-height:32px;
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        margin: 10px 0 5px;

    }

    &>.btns {
        display: flex;
        align-items:center;
        margin-left:20px;

        &>.btn {
            background-color: transparent;
            border: solid 1px rgb(219,219,219);
            color: rgb(38,38,38);
            border-radius:4px;
            cursor: pointer;
            font-size:14px;
            padding: 5px 9px;
            text-align:center;
            font-weight:600;
            font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            margin-left:8px;
      
        }

        &>.follow {
            &>svg {
                margin: 0 16px 0 16px;
            }
        }

        &>.follow-text {
            padding: 5px 25px;
            background-color:rgb(0,149,246) ;
            color: #fff;
        }

        &>.dots {
            padding: 0px;
            border: none;
        }
    }
`;


const MiddleSection = styled.div`
        display: flex;
        margin-bottom:20px;

        &>div {
            margin-right:40px;
            font-size:16px;

            &>span {
                color: rgb(38,38,38);
                font-weight:600;
            }
        }
`;

const EndSection = styled.div`

        &>.title{
            color: rgb(38,38,38);
            font-weight:600;
        }

`;

const Header = styled.div`
    display: flex;
    justify-content:center;
    list-style:none;
    border-top: 1px solid rgb(219,219,219);
    
    &>li {
        display: flex;
        height: 52px;
        align-items:center;
        margin-right:60px;
        color: rgb(142,142,142);
        cursor: pointer;
        font-size:14px;

        &>span {
            margin-right:8px;
        }
       
        &.active {
            border-top: solid 1px rgb(38,38,38);
            color: rgb(38,38,38);           
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    column-gap: 28px;
    row-gap:28px;

    @media(max-width:635px) {
        column-gap:3px;
        margin-bottom:3px;
    }

`;


const Card_Hover = styled.div`
    position:absolute;
    display: none;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 100%;
    background-color:rgb(0, 0, 0, 0.3);
    top: 0px;
  

    @media(max-width:635px) {
        flex-direction:column;
    }

    &>span {
        color: #fff;
        font-size:14px;
        margin-right:30px;

        &>svg {
            margin-right:8px;
            fill:#fff;
        }

    }
`;


const Card = styled.div`
    position:relative;
    width: 293px;
    height: 293px;
    cursor: pointer;

 
    &:hover ${Card_Hover} {
        display: flex !important;
    }
`;

const Card_Content = styled.div`
    width: 100%;
    height: 100%;
    
    &>img {
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
`;



export {
    Wrapper,
    Container,
    ProfilePicture,
    ProfileDetail,
    TopSection,
    MiddleSection,
    EndSection,
    Header,
    Content,
    Card,
    Card_Content,
    Card_Hover
}