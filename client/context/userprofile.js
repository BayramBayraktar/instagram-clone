import { createContext, useState, useEffect } from 'react'
//utils
import axios from 'axios'
import io from 'socket.io-client'
export const ProfileContext = createContext(null)


var connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity",
    "timeout": 10000,
    "transports": ["websocket"]
};

const socket = io('http://localhost:8000', connectionOptions)


const Provider = (props) => {


    const [state, setState] = useState({
        success: null,
        user: "",
        visibilityState: true,
        userNew: "",
        ChangePost: "",
    })


    useEffect(() => {
        const UserProfileGet = async () => {
            setState({ ...state, loader: true })
            await axios.get(`${process.env.API_URL}/verify`, { withCredentials: true })
                .then((res) => {
                    if (res.data !== '') {
                        const { success, user } = res.data;
                        socket.emit("addUser", user.fullName);
                        setState({ ...state, success: success, user: user })
                    }
                })
                .catch((err) => {
                    if (err.response.data !== '') {
                        const { success } = err.response.data
                        if (!success) {
                            return window.location.href = 'http://localhost:3000/accounts/login';
                        }
                        setState({ ...state, success: success })
                    }
                })
        }
        UserProfileGet()

    }, [state.userNew])

    const handleUser = (data) => {
        setState({ ...state, userNew: data })
    }

    const handleChangePost = (response) => {
        setState({ ...state, ChangePost: response })
    }

    const Data = {
        "Success": state.success,
        "user": state.user,
        handleUser,
        handleChangePost,
        socket
    }

    return (
        <ProfileContext.Provider value={Data}>
            {props.children}
        </ProfileContext.Provider>
    )
}


export default Provider