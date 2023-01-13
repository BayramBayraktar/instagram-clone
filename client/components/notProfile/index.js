import React from 'react'
import Link from 'next/link'
import {
    Wrapper,
    Title,
    Explanation
} from './style.js'


const NotProfile = () => {
    return (
        <Wrapper>
            <Title >
                Sorry, this page is unavailable.
            </Title>
            <Explanation>
                It may be the link you clicked on or the page may have been removed. <Link href='/'>Back to Instagram.</Link>
            </Explanation>
        </Wrapper>
    )
}

export default NotProfile