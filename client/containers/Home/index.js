import Link from 'next/link'


import {
    Wrapper,
    Container,
    FotterContainer
} from './style'

//Components
import Story from '../../components/Story'
import CardPost from '../../components/CardPost'
import Suggestions from '../../components/Suggestions'




const HomeContainer = () => {



    return (
        <Wrapper>
            <Container>
                <Story />
                <CardPost />
            </Container>
            <FotterContainer>
                <Suggestions />
                <div className='footer'>
                    <section>
                        <Link href="/" >
                            About
                        </Link>
                        <Link href="" >
                            Help
                        </Link>
                        <Link href="" >
                            Press
                        </Link>

                        <Link href="" >
                            API
                        </Link>

                        <Link href="" >
                            Jobs
                        </Link>

                        <Link href="" >
                            Privacy
                        </Link>
                        <Link href="" >
                            Terms
                        </Link>

                        <Link href="" >
                            Locations
                        </Link>

                        <Link href="" >
                            Language
                        </Link>
                    </section>
                    <section>
                        <span className='Copyright'>© 2022 Instagram from Meta</span>
                    </section>
                </div>
            </FotterContainer>
        </Wrapper>
    )
}

export default HomeContainer