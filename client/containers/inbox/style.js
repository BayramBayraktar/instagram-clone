import styled from "styled-components";


const Wrapper = styled.div`
`;

const Container = styled.div`
    position: relative;
    width: 350px;
    height: 100%;

&>ul {
        display: flex;
        flex-direction:column;
        height: 100%;
        border: solid 1px rgb(219,219,219);
        overflow: hidden;
        overflow-y:scroll;
        list-style:none;
        
        &>li {
            display: flex;
            align-items:center;
            padding: 10px 7px;           
            cursor: pointer;
            &>img {
                width:40px;
                height: 40px;
            }

            &>span {
                font-size:18px;
                margin-left:10px;
            }
        }
    }

`;




export {
    Wrapper,
    Container
}