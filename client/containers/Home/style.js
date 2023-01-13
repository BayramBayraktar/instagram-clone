import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    padding-top:60px;
    background-color:  rgba(250, 250, 250);
    overflow-y:none,
`;

const Container = styled.div`
    margin-top:16px;
    margin-right: 32px; 
    padding-top:16px;

    @media(max-width:900px) {
        display: flex;
        flex-direction:column;
        align-items:center;
        margin: 0 32px;
        width: 100%;
    }

    @media(max-width:485px) {
        align-items:normal;
        margin: 0px 0 0 32px !important;

    }

   
`;

const FotterContainer = styled.div`
    margin-top:32px;
    width: 319px;

    @media(max-width:900px) {
        display: none;
    }

    &>.footer {

        
        
        &>section {
            display: block;
            margin-bottom:16px;

            word-wrap: break-word;

            color: rgb(199,199,199);
            font-weight:400;
            font-size:12px;
            
            &>a {

                ::after {
                    content:"*";
                    margin: 0 0.25em 0 0.25em;
                    font-size:10px;  
                }

                :last-child{
                    ::after {
                        content: "";
                    }
                }   
            }

            &>.Copyright {
                font-size:12px;
            }
        }
    }
`;




export {
    Wrapper,
    Container,
    FotterContainer
}