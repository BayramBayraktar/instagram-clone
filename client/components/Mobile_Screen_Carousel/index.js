import Slider from 'react-slick'
import {
    Container,
    MobileSccren,
    ImagesContent,
    Img
} from './style'

const MobileScreenCarousel = () => {


    //Caraousel-Setting
    const settings = {
        fade: true,
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        slidesToShow: 1
    }

    return (
        <Container>
            <MobileSccren src="/1dc085cdb87d.png" alt='' />
            <ImagesContent>
                <Slider  {...settings} >
                    <Img src="/4d62acb667fb.png" alt="" />
                    <Img src="/94edb770accf.png" alt="" />
                    <Img src="/a4fd825e3d49.png" alt="" />
                    <Img src="/fdfe239b7c9f.png" alt="" />
                </Slider>
            </ImagesContent>

        </Container>
    )
}

export default MobileScreenCarousel