import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';


//components
import Fotter from '../../components/AccountsFooter';
//svg ICONs
import { AiFillFacebook } from 'react-icons/ai';

//style 
import {
    Wrapper,
    Container,
    Section,
    Content,
    Logİn,
    SignBtn,
    Logo,
    FacebookWİth,
    OR,
    SignupForm,
    InputArea,
    GetAppStores,
    Message

} from './style'


const Signup = () => {

    const [state, setState] = useState({
        emailOrNumber: "",
        fullName: "",
        userName: "",
        password: "",
        visibilityPassword: "Show",
        signBtnDisabled: true,
        errMessage: "",
        message: ""
    })

    const { emailOrNumber, fullName, userName, password } = state

    useEffect(() => {

        if (emailOrNumber.length > 0 && fullName.length > 0 && userName.length > 0 && password.length > 0) {
            setState({ ...state, signBtnDisabled: false })
        } else {
            setState({ ...state, signBtnDisabled: true })
        }
    }, [emailOrNumber, fullName, userName, password])


    const signPost = async () => {

        setState({ ...state, message: "", errMessage: "" }) //clear message 

        await axios.post(`${process.env.API_URL}/signup`, {
            emailOrNumber,
            fullName,
            userName,
            password
        }).then((response) => {
            if (response.data !== "") {
                const message = response.data.message
                setState({ ...state, message: message }) // write message
            }
        }).catch((error) => {
            if (error.response.data !== "") {
                const res = error.response
                const errmsg = res.data.error
                setState({ ...state, errMessage: errmsg }) // write message
            }
        })
    }

    return (

        <Wrapper>

            <Container>
                <Section>
                    <Content>
                        <Logo src="/7a252de00b20.png" alt="" />
                        <div className='title-top'>
                            Sign up to see photos and videos from your friends.
                        </div>
                        <FacebookWİth>
                            <Link href="/">
                                <a>
                                    <AiFillFacebook />
                                    Log in with Facebook
                                </a>
                            </Link>
                        </FacebookWİth>
                        <OR>
                            <span className='solid'></span>
                            <span className='text'>OR</span>
                            <span className='solid'></span>
                        </OR>

                        <SignupForm>
                            <InputArea>
                                <label className={state.emailOrNumber.length > 0 && 'active'} htmlFor='email'>Mobile Number or Email</label>
                                <input className={state.emailOrNumber.length > 0 && 'active'} onChange={(e) => setState({ ...state, emailOrNumber: e.target.value })} type="text" id="email" />
                            </InputArea>
                            <InputArea>
                                <label className={state.fullName.length > 0 && 'active'} htmlFor='fullName'>Full Name</label>
                                <input className={state.fullName.length > 0 && 'active'} onChange={(e) => setState({ ...state, fullName: e.target.value })} type="text" id="fullName" />
                            </InputArea>

                            <InputArea>
                                <label className={state.userName.length > 0 && 'active'} htmlFor='userName'>Username</label>
                                <input className={state.userName.length > 0 && 'active'} onChange={(e) => setState({ ...state, userName: e.target.value })} type="text" id="userName" />
                            </InputArea>
                            <InputArea>
                                <label className={state.password.length > 0 && 'active'} htmlFor='password'>password</label>
                                <input className={state.password.length > 0 && 'active'} onChange={(e) => setState({ ...state, password: e.target.value })} type={state.visibilityPassword === "Show" ? "password" : "text"} id="password" />
                                {state.password.length > 0 && <button onClick={() => setState({ ...state, visibilityPassword: state.visibilityPassword === 'Show' ? "Hide" : "Show" })} className='visibilityPassword'>{state.visibilityPassword}</button>}
                            </InputArea>
                        </SignupForm>

                        <div className='text-more'>
                            People who use our service may have uploaded your contact information to Instagram.
                            <Link href="/" >
                                <a>Learn More</a>
                            </Link>
                        </div>

                        <div className='text-more'>
                            By signing up, you agree to our Terms , Privacy Policy and
                            <Link href="/" >
                                <a>Cookies Policy .</a>
                            </Link>
                        </div>

                        <SignBtn onClick={() => signPost()} disabled={state.signBtnDisabled} >Sign up</SignBtn>
                        <Message className={state.errMessage !== '' && 'Active'} >{state.message || state.errMessage}</Message>
                    </Content>
                </Section>

                <Logİn>
                    <p>Have an account ?</p>
                    <Link href="/accounts/login">
                        Log in
                    </Link>
                </Logİn>

                <GetAppStores>
                    <a className='title'>Get the App.</a>
                    <div className='StoreImgBox'>
                        <img src="/appstore.png" alt="" />
                        <img src="/playstore.png" alt="" />
                    </div>
                </GetAppStores>
            </Container>
            <Fotter />
        </Wrapper>
    )
}

export default Signup