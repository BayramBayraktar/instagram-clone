import { useEffect, useState } from "react"
//page Layout
import MainLayout from "../layouts/main"
//utils
import axios from "axios"
//Containers
import HomeContainer from "../containers/Home"
import LoginContainer from "../containers/Login"
//component
import Loader from '../components/Loader'
//context
import ProfileContext from '../context/userprofile'




export default function Home() {

  const [state, setState] = useState({
    success: false,
    loader: true,
    user: ""
  })

  //authority control
  useEffect(() => {
    axios.get(`${process.env.API_URL}/verify`, { withCredentials: true })
      .then((res) => {
        if (res.data !== '') {
          const { success, user } = res.data
          setState({ ...state, success: success, loader: false, user: user })
        }
      })
      .catch((err) => {
        if (err.response.data !== '') {
          const { success } = err.response.data
          setState({ ...state, success: success, loader: false })
        }
      })
  }, [])

  return (
    <ProfileContext>
      {
        state.loader ? (
          <Loader />
        ) : (
          state.success ?
            <MainLayout title={"Instagram"} >
              <HomeContainer />
            </MainLayout>
            :
            <LoginContainer />
        )
      }
    </ProfileContext>

  )
}

