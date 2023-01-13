import { useState, useContext, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RotatingLines } from 'react-loader-spinner'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import Slider from "react-slick";
import OutsideClickHandler from 'react-outside-click-handler';
//Svg -- assets/svg
import * as Svg from '../../assets/Svg/index'
import { ProfileContext } from '../../context/userprofile'
import axios from 'axios'


//Style
import {
    Wrapper,
    Container,
    LogoContainer,
    Logo,
    RightContent,
    InputSection,
    Accounts,
    Account,
    AccountsOption,
    InputContainer,
    NavBar,
    UserProfile,
    Avatar,
    UserMenu,
    UserOprtion,
    PostModalWrapper,
    PostModal,
    PostModalContent,
    Activity,
} from './style'


const Header = () => {




    const router = useRouter()
    const { user, socket } = useContext(ProfileContext)

    const [state, setState] = useState({
        SearchMenu: false,
        UserMenu: false,
        postModalVisibility: false,
        Activity: null,
        imageFiles: [],
        images: [],
        nextstep: null,
        PostBody: '',
        message: "",
        loader: false,
        SearchValue: null,
        searchResult: "",
        searchMessage: "",
        notification: null
    })


    const [notifications, setNotifications] = useState([])


    const NOT_API = process.env.NOT_API



    const handleLogout = async () => {
        await axios.get(`${process.env.API_URL}/logout`, { withCredentials: true }).then((result) => {
            const { data } = result
            if (data.success == false) {
                return router.push('/accounts/login')
            }
        }).catch((error) => {
            const { data } = error.response
            if (data.success == false) {
                return router.push('/accounts/login')
            }
        })

    }

    const handleFiles = (e) => {
        const { files } = e.target
        const ValidImageFiles = []
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            ValidImageFiles.push(file)
        }

        if (ValidImageFiles) {
            setState({ ...state, imageFiles: ValidImageFiles })
        }
    }


    useEffect(() => {

        const images = [], fileReaders = [];
        if (state.imageFiles) {
            state.imageFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        images.push(result)
                    }
                    if (images.length === state.imageFiles.length) {
                        setState({ ...state, images: images, nextstep: 'preview' })
                    }
                }
                fileReader.readAsDataURL(file)
            })
        };
        return () => {
            fileReaders.forEach(fileReader => {
                if (fileReader) {
                    fileReader.abort()
                }
            })
        }
    }, [state.imageFiles])
    //user search
    useEffect(() => {

        if (state.SearchValue !== "") {
            const data = async () => {
                await axios.get(`${process.env.API_URL}/search/${state.SearchValue}`, {
                    withCredentials: true
                }).then((response) => {
                    const { data } = response
                    setState({ ...state, searchResult: data, searchMessage: data.message })
                })
            }
            data()
        } else {
            setState({ ...state, SearchValue: null })
        }

    }, [state.SearchValue])

    const handleCreatePost = async () => {

        const formdata = new FormData();

        for (let i = 0; i < state.imageFiles.length; i++) {
            formdata.append('Photos', state.imageFiles[i])
        }

        formdata.append('Post', state.PostBody)

        const Axios = axios.create({
            withCredentials: true,
            baseURL: process.env.API_URL
        })
        await Axios.post('/createpost', formdata).then((result) => {
            setState({ ...state, loader: true })
            const { message, success } = result.data
            if (success) {
                setState({ ...state, loader: false, message: message, nextstep: null, imageFiles: [], images: [], PostBody: "", })
            }
        }).catch((err) => {
            const { data } = err.response
            if (data !== '') {
                setState({ ...state, loader: false, message: data.message, imageFiles: [], images: [], PostBody: "", nextstep: null })
            }
        });
    }

    //Closes the search bar when switching between profiles
    useEffect(() => {
        setState({ ...state, SearchMenu: false })
    }, [router.query])


    //socket notification 
    useEffect(() => {
        socket.on("notificationResult", async ({ content, to }) => {
            setNotifications((prev) => [{ content, to }, ...prev])
            setState({ ...state, notification: true })
        })
    }, [])



    useEffect(() => {
        const data = async () => {
            await axios.get(`${process.env.API_URL}/allnotification/like`, {
                withCredentials: true
            }).then((res) => setNotifications(res.data))
        }
        data()
    }, [])



    //carousle config
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Wrapper>
            {
                state.postModalVisibility && <PostModalWrapper>
                    <OutsideClickHandler onOutsideClick={() => setState({ ...state, postModalVisibility: false, message: "" })}>
                        <PostModal>
                            <PostModalContent>
                                {
                                    state.loader ?
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
                                        :
                                        state.message ? <p className='resultMessage'>{state.message}</p>
                                            :
                                            <>
                                                {
                                                    state.nextstep == null && <div className='SelectPictures'>
                                                        <h1 className='title'>
                                                            create new post
                                                        </h1>
                                                        <div className='container'>
                                                            <div>{Svg.PictureMovie}</div>
                                                            <h2 className='drag-title'>drag photos and videos</h2>
                                                            <input onChange={handleFiles} type="file" name='Photos' accept="image/*,video/*" id='Photos' required multiple />
                                                            <label className='files-label' htmlFor='Photos' >select from computer</label>
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    state.nextstep == 'preview' && <div className='Preview'>
                                                        <div className='goBack'>
                                                            <BsArrowLeft onClick={() => setState({ ...state, nextstep: null })} />
                                                            <p onClick={() => setState({ ...state, nextstep: 'postAbout' })} className='next'>Next</p>
                                                        </div>
                                                        <Slider {...settings}>
                                                            {
                                                                state.images.map((img) => {
                                                                    return <img src={img} alt="" />
                                                                })
                                                            }
                                                        </Slider>
                                                    </div>
                                                }
                                                {
                                                    state.nextstep == 'postAbout' && <div className='postAbout'>
                                                        <div className='goBack'>
                                                            <BsArrowLeft onClick={() => setState({ ...state, nextstep: 'preview' })} />
                                                            <button disabled={state.PostBody.length > 0 ? false : true} onClick={handleCreatePost} className='next'>Create post</button>
                                                        </div>
                                                        <textarea value={state.PostBody} rows="10" onChange={(e) => setState({ ...state, PostBody: e.target.value })} placeholder='write a description'></textarea>
                                                    </div>
                                                }
                                            </>
                                }
                            </PostModalContent>
                        </PostModal>
                    </OutsideClickHandler>
                </PostModalWrapper>
            }
            <Container>
                <LogoContainer>
                    <Logo onClick={() => router.push('/')} src="/7a252de00b20.png" />
                </LogoContainer>

                <InputSection>
                    <InputContainer>
                        <AiOutlineSearch className={state.SearchMenu && 'active'} />
                        <input type="search" value={state.SearchValue} onChange={(e) => setState({ ...state, SearchValue: e.target.value })} onClick={() => setState({ ...state, SearchMenu: true })} placeholder="Search" />
                        {
                            state.SearchMenu && <Accounts  >
                                <OutsideClickHandler onOutsideClick={() => setState({ ...state, SearchMenu: false })}>
                                    <Account>
                                        {state.SearchValue == null ?
                                            <AccountsOption>
                                                no calls nearby
                                            </AccountsOption>
                                            :
                                            <>
                                                {state.searchMessage ?
                                                    <AccountsOption>
                                                        {state.searchMessage}
                                                    </AccountsOption>
                                                    :
                                                    state.searchResult && state.searchResult.map((result, index) => (
                                                        <AccountsOption key={index}>
                                                            <Link href={`/${result.userName}`}>
                                                                <a>
                                                                    <img src={result.profilePicture} alt="" />
                                                                    <div className="section-name">
                                                                        <span className="uniq-name">{result.userName}</span>
                                                                        <span className="user-name">{result.fullName}</span>

                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </AccountsOption>
                                                    ))
                                                }
                                            </>
                                        }
                                    </Account>
                                </OutsideClickHandler>

                            </Accounts>
                        }
                    </InputContainer>
                </InputSection>
                <NavBar>
                    <li>
                        <Link href="/" >{Svg.Home}</Link>
                    </li>
                    <li>
                        <Link href="/direct/inbox" >{Svg.Direction}</Link>
                    </li>
                    <li onClick={() => setState({ ...state, postModalVisibility: true })}>{Svg.Plus}</li>
                    <li>
                        <Link href="/explore" >{Svg.Explore}</Link>
                    </li>
                    <li>
                        <div onClick={() => setState({ ...state, Activity: true })}  >
                            <div className={state.notification && 'notification'}>
                                {Svg.Activity}
                            </div>
                            {
                                state.Activity &&
                                <OutsideClickHandler onOutsideClick={() => setState({ ...state, Activity: false, notification: false })}>
                                    <Activity>
                                        <div className='container'>
                                            {notifications?.map((notification) => (
                                                <div className='item'>
                                                    <div className='user'>
                                                        <img className='current' src={notification.to.profilePicture} alt="" />
                                                        <span className='current-name'>{notification.to.user}</span>
                                                    </div>
                                                    <p className='notification-content'>{notification?.desc}</p>
                                                    <img className='different' src={`http://localhost:8000/Uploads/img/${notification.content}`} alt="" />
                                                </div>
                                            ))}
                                        </div>
                                    </Activity>
                                </OutsideClickHandler>
                            }
                        </div>
                    </li>

                    <li>
                        <UserProfile>
                            <Avatar onClick={() => setState({ ...state, UserMenu: true })} src={user && user.profilePicture} alt="" />
                            <OutsideClickHandler
                                onOutsideClick={() => {
                                    setState({ ...state, UserMenu: false })
                                }} >
                                {
                                    state.UserMenu &&
                                    <UserMenu>
                                        <UserOprtion>
                                            <Link href={`${user.userName}`} >
                                                <a>
                                                    <span className="icon">{Svg.Profile}</span>
                                                    <span className="title">Profile</span>
                                                </a>
                                            </Link>
                                        </UserOprtion>
                                        <UserOprtion>
                                            <span className="icon">{Svg.Saved}</span>
                                            <span className="title">Saved</span>
                                        </UserOprtion>
                                        <UserOprtion>
                                            <span className="icon">{Svg.Switch}</span>
                                            <span className="title">Switch apparance</span>
                                        </UserOprtion>
                                        <UserOprtion>
                                            <span className="icon">{Svg.Setting}</span>
                                            <span className="title">Settings</span>
                                        </UserOprtion>
                                        <UserOprtion>
                                            <span className="icon">{Svg.SwitchAccount}</span>
                                            <span className="title">Switch accounts</span>
                                        </UserOprtion>

                                        <div onClick={() => handleLogout()} className="user-Logout-button">
                                            Log Out
                                        </div>

                                    </UserMenu>
                                }
                            </OutsideClickHandler>

                        </UserProfile>
                    </li>
                </NavBar>
            </Container>
        </Wrapper >
    )
}

export default Header