import React from 'react'
import Link from 'next/link'


import {
    Container,
    SwitchAccount,
    SuggestionsContainer,
    Title,
    SuggestionsAccounts,
    Account
} from './style'

const Suggestions = () => {
    return (
        <Container>
            <SwitchAccount>
                <Link href="/" >
                    <img src="/noUser.jpg" alt="" />
                </Link>
                <div className='Account-Container'>
                    <Link href="/">
                        <span className='uniq'>bayrambayraktar1</span>
                    </Link>
                    <span className='name'>Bayram Bayraktar</span>
                </div>
                <button className='Switch'>Switch</button>
            </SwitchAccount>
            <SuggestionsContainer>
                <Title>
                    <span className='For-you'>Suggestions For You</span>
                    <span className='See'>See All</span>
                </Title>
                <SuggestionsAccounts>
                    <Account>
                        <img src="/noUser.jpg" alt="" />
                        <div className='Account-Container'>
                            <span className='uniq'>bayrambayraktar1</span>
                            <span className='newFrends'>asdsadsa + asdsad</span>
                        </div>
                        <button className='Follow'>Follow</button>
                    </Account>

                    <Account>
                        <img src="/noUser.jpg" alt="" />
                        <div className='Account-Container'>
                            <span className='uniq'>bayrambayraktar1</span>
                            <span className='newFrends'>asdsadsa + asdsad</span>
                        </div>
                        <button className='Follow'>Follow</button>
                    </Account>

                    <Account>
                        <img src="/noUser.jpg" alt="" />
                        <div className='Account-Container'>
                            <span className='uniq'>bayrambayraktar1</span>
                            <span className='newFrends'>asdsadsa + asdsad</span>
                        </div>
                        <button className='Follow'>Follow</button>
                    </Account>

                    <Account>
                        <img src="/noUser.jpg" alt="" />
                        <div className='Account-Container'>
                            <span className='uniq'>bayrambayraktar1</span>
                            <span className='newFrends'>asdsadsa + asdsad</span>
                        </div>
                        <button className='Follow'>Follow</button>
                    </Account>

                    <Account>
                        <img src="/noUser.jpg" alt="" />
                        <div className='Account-Container'>
                            <span className='uniq'>bayrambayraktar1</span>
                            <span className='newFrends'>asdsadsa + asdsad</span>
                        </div>
                        <button className='Follow'>Follow</button>
                    </Account>

                </SuggestionsAccounts>
            </SuggestionsContainer>
        </Container>
    )
}

export default Suggestions