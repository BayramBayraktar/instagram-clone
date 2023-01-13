import React from 'react'
import {
    Wrapper
} from './style'
//utils
import { RotatingLines } from 'react-loader-spinner'


const Loader = () => {
    return (
        <Wrapper>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="2"
                animationDuration="0.75"
                width="10%"
                display="flex"
                justifyContent="center"
            />
        </Wrapper>
    )
}

export default Loader