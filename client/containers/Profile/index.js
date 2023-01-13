import { useState, useContext, useEffect } from 'react'
import { ProfileContext } from '../../context/userprofile'

import {
    Wrapper,
    Container,
    Header,
    Content,
    Card,
    Card_Content,
    Card_Hover,
    ProfilePicture,
    ProfileDetail,
    TopSection,
    MiddleSection,
    EndSection
} from './style'


import { FaComment, FaHeart } from 'react-icons/fa'
//svg-icon
import { PostsSvg, RellsSvg, TaggedSvg, DownArrow, Following, ProfileDots } from '../../assets/Svg/index';
import axios from 'axios';


const AccountContainer = ({ data }) => {

    const { user, handleUser } = useContext(ProfileContext)
    const { profile, post, success } = data



    const [state, setstate] = useState({
        fallow: user,
        Arrow: false,
        activeMenu: "POSTS",
    })



    const handleFollow = async (id) => {
        await axios.put(`${process.env.API_URL}/follow`, { id }, { withCredentials: true }).then((result) => {
            handleUser(result.data)
        })
    }

    const handleUnFollow = async (id) => {
        await axios.put(`${process.env.API_URL}/unfollow`, { id }, { withCredentials: true }).then((result) => {
            handleUser(result.data)
        })
    }

    //slider
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <Wrapper>
            <Container>
                <ProfilePicture>
                    <img src={profile.profilePicture} />
                </ProfilePicture>
                <ProfileDetail>
                    <TopSection>
                        <h2 className='title'>{profile.userName}</h2>
                        <div className='btns'>
                            {success ?
                                <button>edit profile</button>
                                :
                                <>
                                    <button className='btn'>Message</button>
                                    {user.followings?.includes(profile?._id) ? (<button onClick={() => handleUnFollow(profile?._id)} className='btn follow'>{Following}</button>) : (<button onClick={() => handleFollow(profile?._id)} className='btn follow-text'>Follow</button>)}
                                    <button className={state.Arrow ? 'btn arrow active' : "btn arrow"}>{DownArrow}</button>
                                    <button className='btn dots'>{ProfileDots}</button>
                                </>
                            }

                        </div>
                    </TopSection>
                    <MiddleSection>
                        <div>
                            <span>{post.length}</span> posts
                        </div>
                        <div>
                            <span>{profile.followers.length}</span> followers
                        </div>
                        <div>
                            <span>{profile.followings.length}</span> following
                        </div>
                    </MiddleSection>
                    <EndSection>
                        <section className='title'>{profile.aboutTitle}</section>
                        {
                            profile?.aboutBody.map((body) => (
                                <section>{body}</section>
                            ))
                        }
                    </EndSection>
                </ProfileDetail>

            </Container>

            <Container className='post'>
                <Header>
                    <li onClick={() => setstate({ ...state, activeMenu: "POSTS" })} className={state.activeMenu == 'POSTS' && 'active'}><span>{PostsSvg}</span> POSTS</li>
                    <li onClick={() => setstate({ ...state, activeMenu: "REELS" })} className={state.activeMenu == 'REELS' && 'active'}><span>{RellsSvg}</span> REELS</li>
                    <li onClick={() => setstate({ ...state, activeMenu: "TAGGED" })} className={state.activeMenu == 'TAGGED' && 'active'}><span>{TaggedSvg}</span> TAGGED</li>
                </Header>

                {
                    state.activeMenu == "POSTS" &&

                    <div className='Content-wrapper'>
                        <Content>
                            {
                                post?.map((post, index) => (
                                    <Card>
                                        <Card_Content>
                                            {post.photo.length < 0 ?
                                                < img src={`http://localhost:8000/Uploads/img/${post.photo[index]}`} alt={post.body} />
                                                :
                                                <img src={`http://localhost:8000/Uploads/img/${post.photo[0]}`} alt={post.body} />
                                            }
                                        </Card_Content>
                                        <Card_Hover>
                                            <span>
                                                <FaHeart />
                                                {post.likes.length}
                                            </span>
                                            <span>
                                                <FaComment />
                                                {post.comments.length}
                                            </span>
                                        </Card_Hover>
                                    </Card>
                                ))

                            }
                        </Content>

                    </div>

                }

            </Container>
        </Wrapper>

    )
}

export default AccountContainer