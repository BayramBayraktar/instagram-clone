import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
//style
import {
    Container
} from './style'
//utils
import axios from 'axios'

//Components
import Inbox from '../inbox'
import Messages from '../Messages'

//context
import { ProfileContext } from '../../context/userprofile'


const InboxDetails = () => {

    const router = useRouter()



    const { user, socket } = useContext(ProfileContext)

    const [state, setState] = useState({
        OptionUser: "",
        messages: []
    })

    const [messages, setMessages] = useState([])
    const [arrivalMessage, setArrivalMessage] = useState(null)

    useEffect(() => {
        const ToFınde = async () => {
            await axios.get(`${process.env.API_URL}/direct/t/${router.query.id}`, { withCredentials: true })
                .then((res) => {
                    setState({ ...state, OptionUser: res.data })
                })
        }
        ToFınde()

    }, [router.query.id])

    const OptionUser = (opUser) => {
        setState({ ...state, OptionUser: opUser })
    }

    useEffect(() => {
        if (router.query.id) {
            const AllMessage = async () => {
                await axios.post(`${process.env.API_URL}/allmesages`, {
                    to: router.query.id
                }, {
                    withCredentials: true
                }).then((res) => setMessages(res.data))
            }
            AllMessage()
        }


    }, [router.query.id])



    const handleSend = async (message) => {


        setMessages((prev) => [...prev, { fromSelf: true, message: message }])

        socket.emit("sendMessage", {
            from: user.fullName,
            to: state.OptionUser.fullName,
            message: message
        })

        // message db save
        await axios.post(`${process.env.API_URL}/addmessages`, {
            to: state.OptionUser,
            message: message
        }, {
            withCredentials: true
        })
    }

    useEffect(() => {
        socket.on("getMessage", (message) => {
            setArrivalMessage({
                fromSelf: false,
                message: message
            })
        })
    }, [])


    useEffect(() => {
        arrivalMessage &&
            setMessages((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage])


    return (
        <Container>
            <Inbox OptionUser={OptionUser} />
            {router.asPath != '/direct/inbox' &&
                < Messages UserMessages={messages} handleSend={handleSend} />
            }
        </Container>
    )
}

export default InboxDetails