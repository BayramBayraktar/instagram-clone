import styled from "styled-components";

const Wrapper = styled.div`
    margin-top:16px;

`;

const Container = styled.div`

`;

const Card = styled.div`
    width: 470px;
    border: solid 1px rgba(219,219,219);
    border-radius:8px; 
    background: rgba(255,255,255);
    margin-bottom:12px;
`;

const CardHeader = styled.div`
    display: flex;
    align-items:baseline;
    justify-content:space-between;
    

    margin: 8px 4px 8px 12px;

    &>a {
        display: flex;
        align-items:center;

        &>.Post-sharing-img {
            width: 32px;
            height: 32px; 
        }

        &>.Post-sharing-title {
            margin-left:12px;
        }


    }

    &>.Points {
        padding-right: 8px;        
    }

`;


const CardContent = styled.div`
    width: 470px;
    height: 470px;

    &>.slick-slider {
        height: 100%;

        &>.slick-prev {
            left: 15px;
            z-index:99;
        }
        &>.slick-disabled {
            display: none!important;
        }
        &>.slick-next {
            right: 15px;
            z-index:99;
        }

        &>.slick-list {
            height: 100%;
            display: flex;
            flex-direction:column;
            justify-content:center;
            background-color:#000000b8;
        }

    }


    &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


`;

const CardBottom = styled.div`


    &>.up-side {
        display: flex;
        padding: 4px 16px 4px 12px;
        justify-content:space-between;
        margin-top:4px;
        padding-bottom:8px; 
        
        &>.like-commend-share {
            
            &>span {    
                margin: 8px;

                :nth-child(1) {
                    margin-left:0px;
                }
            }

        }

    }

    &>.middle-side {
        display: flex;
        flex-direction:column;
        padding: 4px 16px 4px 12px;


        &>.like-post {
            margin-bottom:8px;
            color: rgba(38,38,38)
            font-size:14px;
        }

        &>.textBox {
            width: 100%;
            display: block;
            word-wrap:break-word;
            margin-bottom: 8px;
            
            
            &>.posted-by {
                color: rgba(38,38,38);
                font-weight: 600;
                float: left;
            }
            

            &>.explanation {
                margin-left: 2px;
                display: initial;
            }

        }

        &>.View-comments {
            margin-bottom:8px;
            font-size:14px;
            font-weight:400;
            color: rgba(142,142,142);
            cursor: pointer;
        }

        &>.time {
            margin-bottom:12px;
            font-size:10px;
            font-weight:400;
            color: rgba(142,142,142);
        }

    }

    &>.under-side {
        display: flex;
        align-items:center;
        border-top: 1px solid rgba(239,239,239);
        padding: 4px 16px 4px 12px;

        &>textarea {
            width: 100%;
            border: none;
            outline: none;
            resize: none;
            font-size:initial;
            padding: 8px 0 8px 0;
            height: 37px;

            color: rgba(38,38,38);
            font-size:15px;
            font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

            ::placeholder {
                color: rgba(38,38,38);
                font-size:16px;
                font-weight:500;
            }
        }
        &>button {
            padding: 0px;
            border: none;
            outline: none;
            color: rgba(0,149,246);
            background: transparent;
            cursor: pointer;

        }

    }


      


`;





export {
    Wrapper,
    Container,
    Card,
    CardHeader,
    CardContent,
    CardBottom
}