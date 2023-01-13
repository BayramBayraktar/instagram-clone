import React from 'react'

//Layout
import Layouts from '../../../layouts/main'

//containers
import InboxContainer from '../../../containers/inboxDetail'

const Inbox = () => {
    return (
        <Layouts title='inbox * Direct'>
            <InboxContainer />
        </Layouts>
    )
}

export default Inbox