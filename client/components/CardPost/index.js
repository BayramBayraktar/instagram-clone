import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
//utils
import axios from 'axios'
import Slider from "react-slick";
import moment from 'moment'
//contex
import { ProfileContext } from '../../context/userprofile'

//Svg -- assets/svg
import * as Svg from '../../assets/Svg'

import {
    Wrapper,
    Card,
    CardHeader,
    CardContent,
    CardBottom

} from './style'


const CardPost = () => {
    const { user, handleChangePost, socket } = useContext(ProfileContext)

    const [state, setState] = useState({
        Posts: "",
        message: "",
        change: "",
        changeSave: ""
    })

    //get to posts
    useEffect(() => {
        axios.get(`${process.env.API_URL}/getsubpost`, { withCredentials: true }).then((result) => {
            if (result.data.message) {
                setState({ ...state, message: result.data.message, Posts: null })
            } else {
                setState({ ...state, Posts: result.data })
            }
        })
    }, [state.change])

    //like
    const like = async (id, post) => {
        //user like -----------------------------------------------------------------------------------------------

        await axios.put(`${process.env.API_URL}/post/like`, { id }, { withCredentials: true }).then((response) => {
            if (!response.data == "") {
                const data = state.Posts.map((item) => {
                    if (item._id === response.data._id) {
                        return response
                    } else {
                        return item
                    }
                })
                setState({ ...state, change: data })
            }
        })

        //notification----------------------------------------------

        await axios.post(`${process.env.API_URL}/notification/like`, {
            to: post.postedByInfo,
            type: "Like",
            desc: "Liked Your Post",
            content: post.photo[0],
        }, { withCredentials: true }).then((result) => {
            const { success } = result.data
            if (success) {
                socket.emit("likeNotification", {
                    from: user.fullName,
                    to: post.postedByInfo,
                    content: post.photo[0]
                })
            }
        }).catch((err) => {
            console.log(err)
        });
    }
    //unLike
    const unlike = async (id) => {
        await axios.put(`${process.env.API_URL}/post/unlike`, { id }, { withCredentials: true }).then((response) => {
            if (!response.data == "") {
                const data = state.Posts.map((item) => {
                    if (item._id === response.data._id) {
                        return response
                    } else {
                        return item
                    }
                })
                setState({ ...state, change: data })
            }
        })
    }
    //save
    const save = async (id) => {
        await axios.put(`${process.env.API_URL}/post/save`, { id }, { withCredentials: true }).then((response) => {
            if (!response.data == "") {
                handleChangePost(response.data)
            }
        })
    }
    //unsave
    const unsave = async (id) => {
        await axios.put(`${process.env.API_URL}/post/unsave`, { id }, { withCredentials: true }).then((response) => {
            if (!response.data == "") {
                handleChangePost(response.data)
            }
        })
    }

    //convert time when posts are created
    const convertCreatedAt = (data) => {
        return moment(data).from()
    }

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
                state.Posts ? state.Posts?.map((post) => (
                    <Card>
                        <CardHeader>
                            <Link href={`/${post.postedByInfo?.user}`}>
                                <a>
                                    <img className="Post-sharing-img" src={post.postedByInfo.profilePicture} alt="" />
                                    <span className="Post-sharing-title">{post.postedByInfo.user}</span>
                                </a>
                            </Link>
                            <div className="Points">
                                {Svg.ThreePoints}
                            </div>
                        </CardHeader>
                        <CardContent>

                            <Slider {...settings}>
                                {
                                    post.photo.map((img) => (
                                        <img src={`http://localhost:8000/Uploads/img/${img}`} />
                                    ))
                                }
                            </Slider>

                        </CardContent>
                        <CardBottom>
                            <section className="up-side">
                                <div className="like-commend-share">
                                    {
                                        post.likes?.includes(user._id) ?
                                            <span onClick={() => unlike(post._id)}>{Svg.Like}</span>
                                            :
                                            <span onClick={() => like(post._id, post)}>{Svg.Unlike}</span>
                                    }
                                    <span>{Svg.Comment}</span>
                                    <span>{Svg.Share}</span>
                                </div>
                                <div className="Save">
                                    {
                                        user.saved?.includes(post._id) ?
                                            <span onClick={() => unsave(post._id)}>{Svg.Unsave}</span>
                                            :
                                            <span onClick={() => save(post._id)}>{Svg.Save}</span>
                                    }
                                </div>
                            </section>
                            <section className="middle-side">
                                <section className="like-post">{post.likes?.length} likes</section>
                                <section className="textBox">
                                    <div className="posted-by">{post.postedByInfo?.user}</div>
                                    <div>{post?.body}</div>
                                    <div className="explanation">{post?.comments}</div>
                                </section>
                                {
                                    post.postedByInfo?.comments && <span className="View-comments">View al omments</span>
                                }
                                <span className="time">{convertCreatedAt(post?.createdAt)}</span>
                            </section>
                            <section className="under-side">
                                <textarea placeholder="Add a comment..." />
                                <button>Post</button>
                            </section>
                        </CardBottom>
                    </Card>
                ))
                    :
                    <>{state.message}</>
            }
        </Wrapper>

    )
}

export default CardPost