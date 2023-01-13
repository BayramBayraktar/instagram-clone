import React from 'react'
import Link from 'next/link'

import {
    Container,

} from './style'

import Slider from 'react-slick'


const Story = () => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,

    };

    return (
        <Container>
            <Slider {...settings}>
                <Link href="/">
                    <a>
                        <img src="/noUser.jpg" alt="" />
                        <div className='user'>Bayram</div>
                    </a>
                </Link>

                <Link href="/">
                    <a>
                        <img src="/noUser.jpg" alt="" />
                        <div className='user'>Bayram</div>
                    </a>
                </Link>

                <Link href="/">
                    <a>
                        <img src="/noUser.jpg" alt="" />
                        <div className='user'>Bayram</div>
                    </a>
                </Link>

                <Link href="/">
                    <a>
                        <img src="/noUser.jpg" alt="" />
                        <div className='user'>Bayram</div>
                    </a>
                </Link>

                <Link href="/">
                    <a>
                        <img src="/noUser.jpg" alt="" />
                        <div className='user'>Bayram</div>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <img src="/noUser.jpg" alt="" />
                        <div className='user'>Bayram</div>
                    </a>
                </Link>

                <Link href="/">
                    <a>
                        <img src="/noUser.jpg" alt="" />
                        <div className='user'>Bayram</div>
                    </a>
                </Link>


            </Slider>

        </Container>
    )
}
export default Story