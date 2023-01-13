import style from 'styled-components'

const Wrapper = style.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-Y:scroll; 
    
`;

const Container = style.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const MessagesArea = style.div`
        padding:60px; 
        display: flex;
        flex-direction: column;     
   
    &>.From {
        align-self: flex-end;
    }

`;

const İnputArea = style.div`
    position: sticky;
    display: flex;
    bottom:0px;
    background: #fff;
    width: 100%;
    left: 0px;

    &>input {
        width: 100%;
        padding: 8px;
    }

    &>button {
        border: none;
        outline:none;
        margin-left: 8px;
        padding: 8px;


    }


`;





export {
    Wrapper,
    Container,
    MessagesArea,
    İnputArea

}