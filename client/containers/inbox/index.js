import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
//style
import {
    Wrapper,
    Container
} from './style'

//utils 
import axios from 'axios'
const İnbox = ({ OptionUser }) => {

    const router = useRouter()

    const [state, setState] = useState({
        message: "",
        Users: []
    })

    useEffect(() => {
        const get = async () => await axios.get(`${process.env.API_URL}/follow`, { withCredentials: true }).then((response) => {
            const { data } = response
            if (data?.message) {
                setState({ ...state, message: data.message })
            }
            if (!data.message) {
                setState({ ...state, Users: data.response })
            }
        })
        get()
    }, [])

    
    const handleSelectUser = (data) => {
        OptionUser(data)
        router.push(`/direct/t/${data._id}`)
    }

    return (
        <Wrapper>
            <Container>
                <ul>
                    {
                        state.message ? <h1>{state.message}</h1> :
                            state.Users.map((item) => (
                                <li onClick={() => handleSelectUser(item)}>
                                    <img src={item.profilePicture} alt={item.fullName} />
                                    <span>{item.fullName}</span>
                                </li>
                            ))
                    }

                </ul>
            </Container>
        </Wrapper>
    )
}

export default İnbox