import styled from "styled-components";


const Container = styled.div`
    position: relative;
`;

const MobileSccren = styled.img`
`;

const ImagesContent = styled.div`
    position: absolute;
    width: 255px;
    height: 545px;
    top: 23px;
    left:154px;
    z-index:999;
    overflow: hidden;
    border-radius:20px;

`;

const Img = styled.img`
    width: 100%;

`;

export {
    Container,
    MobileSccren,
    ImagesContent,
    Img

}