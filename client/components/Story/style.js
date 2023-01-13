import styled from "styled-components";

const Container = styled.div`
    width: 470px;
    border: 1px solid rgba(219,219,219);
    border-radius:8px;
    background-color: rgba(255,255,255);

    &>.slick-slider {
        
        &>.slick-list {
            
            &>.slick-track {
                
                padding: 16px 0;
                
                &>.slick-slide {
                    
                    transform: translateX(16px);
                    
                    &>div {
                        
                        &>a {
                            width: 64px !important;
                            display: flex !important;
                            flex-direction:column;
                            align-items:center ;
                            justify-content:center;
                            padding: 0 4px;
                            outline: none;
                    
                            &>img {
                                width: 66px;
                                height: 66px;
                            }
                    
                            &>.user {
                                font-size:12px;
                            }
                        }

                    }

                }
            }
        }

    }

   
`;

const UserStory = styled.div`
       

`;

export {
    Container,
    UserStory
}