import { useRef, useEffect, useState } from 'react'
import {
    Wrapper,
    Container,
    MessagesArea,
    İnputArea

} from './style'





const Messages = ({ handleSend, UserMessages }) => {


    const [state, setState] = useState({
        message: "",
        page: 0
    })
    const BottomRef = useRef()


    useEffect(() => {
        BottomRef.current?.scrollIntoView(false);
    }, [UserMessages]);

    const HandleMessage = () => {
        handleSend(state.message); //Send Message 
        setState({ ...state, message: "" }) // clear input
    }

    return (
        <>
            <Wrapper  >
                <Container >
                    <MessagesArea ref={BottomRef}>
                        {UserMessages.map((item) => (
                            <p className={item.fromSelf && 'From'}>{item.message}</p>
                        ))}
                    </MessagesArea>
                    <İnputArea>
                        <input type="text" value={state.message} onChange={e => setState({ ...state, message: e.target.value })} alt="text" />
                        <button onClick={HandleMessage} value="send">Send</button>
                    </İnputArea>
                </Container>
            </Wrapper>
        </>
    )
}

export default Messages