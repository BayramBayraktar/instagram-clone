import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { useRouter } from 'next/router'
import axios from 'axios'

import {
  Wrapper,
} from './style'



const Activate = () => {
  const router = useRouter()

  const [state, setState] = useState({
    loader: true,
    token: "",
    message: ""
  })

  useEffect(() => {

    const { token } = router.query
    if (token) {
      handleToken(token)
    }
  }, [router])

  const handleToken = async (token) => {

    const Axios = axios.create({
      baseURL:process.env.API_URL,
      withCredentials:true
    })

    Axios.post('/activation', {
      token
    }).then(res => {
      if (res.data.success) {
        setState({ ...state, message: res.data.message, loader: false })
        setInterval(() => {
          router.push('/accounts/login')
        }, 5000);
      }
      if (res.data.error) {
        setState({ ...state, message: res.data.error, loader: false })
        setInterval(() => {
          router.push('/accounts/signup')
        }, 5000);
      }
    }).catch(err => {
      if (err) {
        setState({ ...state, loader: false, message: 'something went wrong' });
        setInterval(() => {
          router.push('/accounts/signup')
        }, 5000);
      }
    })
  }
  return (

    <Wrapper>
      <ToastContainer />

      {
        state.message ? (
          state.message
        ) : (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )

      }
    </Wrapper>
  )
}

export default Activate