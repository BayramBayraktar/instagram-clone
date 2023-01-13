import styled from "styled-components";



const Fotter = styled.div`
    text-align:center;
    margin-bottom: 52px;

    &>.links {
        a {
            margin: 0 8px 12px 8px;
            display: inline-block;
            font-size:12px;
            color rgba(var(--f52,142,142,142),1);
        }
    }
    
    &>.SelectedLanugage {
        display: flex;
        justify-content:center;
        
        &>select {
            border: none;
            color rgba(var(--f52,142,142,142),1);
            outline: none;
        }

        &>.copyright {
            color rgba(var(--f52,142,142,142),1);   
            font-size: 14px;
            margin-left:8px;
        }
    }
`;


export {
    Fotter
}