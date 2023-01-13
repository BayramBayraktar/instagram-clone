import { useState, useEffect } from 'react'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner'
import MainLayout from '../../layouts/main'
//Container
import ProfileContainer from '../../containers/Profile'
import NotProfile from '../../containers/NotProfile'
//Context
import ProfileContext from '../../context/userprofile'

export const getServerSideProps = async (context) => {
    const params = context.params.profile
    return {
        props: {
            params
        }
    }
}

const Profile = ({ params }) => {


    const [state, setState] = useState({
        loader: true,
        success: null,
        loggedInUser: null,
        notFound: false,
        profileInfo: {},
    })

    useEffect(() => {
        const data = async () => {
            await axios.get(`${process.env.API_URL}/user/${params}`, {
                withCredentials: true
            }).then((res) => {
                const { profile, post, success } = res.data
                if (profile && post) {
                    setState({ ...state, profileInfo: { profile, post, success }, loader: false })
                }
            }).catch((err) => {
                const { data } = err.response
                if (data.success == false) {
                    setState({ ...state, notFound: true, loader: false })
                }
            })
        }
        data()
    }, [params])

    return (
        <MainLayout title={params} >
            {
                state.loader ?
                    (
                        <div className='Loader'>
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="2"
                                animationDuration="0.75"
                                width="10%"
                                display="flex"
                                justifyContent="center"
                                visible={state.loader}
                            />
                        </div>
                    ) : (
                        state.notFound ?
                            <NotProfile />
                            :
                            <ProfileContext>
                                <ProfileContainer data={state.profileInfo} />
                            </ProfileContext>
                    )
            }

        </MainLayout>
    )
}

export default Profile