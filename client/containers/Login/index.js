import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router'
import { AiFillFacebook } from 'react-icons/ai';
//Components
import Carousel from '../../components/Mobile_Screen_Carousel'
import Fotter from '../../components/AccountsFooter';
import {
    Container,
    Login,
    LoginForm,
    Logo,
    FormContent,
    Input,
    Inputs,
    OR,
    WithFacebook,
    Forgot,
    Form,
    SignUp,
    GetAppStores
} from './style'

const LoginContainer = () => {

    useEffect(() => {
        document.title = "Login * Instagram"
    }, [])

    const router = useRouter()

    const [state, setState] = useState({
        name: "",
        password: "",
        visibilityPassword: "Show",
        loginBtnDisabled: true,
        message: "",
        errMessage: ""
    })

    useEffect(() => {
        if (state.name.length > 1 && state.password.length > 1) {
            setState({ ...state, loginBtnDisabled: false })
        } else {
            setState({ ...state, loginBtnDisabled: true })
        }
    }, [state.name, state.password])

    const LoginPost = async () => {

        await axios.post(`${process.env.API_URL}/login`, {
            userName: state.name,
            password: state.password
        }, {
            //We use it to create cookie on the client side.
            withCredentials: true
        }).then((response) => {
            response.data.success && router.push('/')
        }).catch((error) => {
            if (error.response.data !== "") {
                const res = error.response
                const errmsg = res.data.message
                setState({ ...state, errMessage: errmsg })
            }
        })

    }
    return (
        <Container>
            <Login>
                <Carousel />
                <LoginForm>
                    <Form>
                        <Logo src="/7a252de00b20.png" alt="" />
                        <FormContent>
                            <Inputs>
                                <Input>
                                    <label className={state.name.length > 0 && 'active'} htmlFor='name' >phone number, username, or email</label>
                                    <input className={state.name.length > 0 && 'active'} onChange={(e) => setState({ ...state, name: e.target.value })} type="text" id='name' />
                                </Input>
                                <Input>
                                    <label className={state.password.length > 0 && 'active'} htmlFor="password">Password</label>
                                    <input className={state.password.length > 0 && 'active'} onChange={(e) => setState({ ...state, password: e.target.value })} type={state.visibilityPassword === 'Show' ? "password" : "text"} id='password' />
                                    <button onClick={() => setState({ ...state, visibilityPassword: state.visibilityPassword === 'Show' ? "Hiden" : "Show" })} className='visibilityBtn'>{state.visibilityPassword}</button>
                                </Input>
                                <button onClick={LoginPost} className='logınbtn' disabled={state.loginBtnDisabled}>Log In</button>
                            </Inputs>

                            <OR>
                                <span className='solid'></span>
                                <span className='text'>OR</span>
                                <span className='solid'></span>
                            </OR>

                            <WithFacebook>
                                <Link href="/">
                                    <div className='FacebookBtn'>
                                        <AiFillFacebook width="16" height="16" />
                                        <a className='text'>Log in with Facebook</a>
                                    </div>
                                </Link>
                            </WithFacebook>

                            <Forgot>
                                <Link href='/'>
                                    <a>Forgot Password?</a>
                                </Link>
                                <p>{state.message || state.errMessage}</p>
                            </Forgot>
                        </FormContent>
                    </Form>
                    <SignUp>
                        Don't have an account ? <Link href="/accounts/signup"><a className='evident'>sign Up</a></Link>
                    </SignUp>

                    <GetAppStores>
                        <a className='title'>Get the App.</a>
                        <div className='StoreImgBox'>
                            <img src="/appstore.png" alt="" />
                            <img src="/playstore.png" alt="" />
                        </div>
                    </GetAppStores>

                </LoginForm>

            </Login>

            <Fotter />
        </Container>
    )
}

export default LoginContainer