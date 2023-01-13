import React from 'react'
import Head from 'next/head'
//Containers
import Header from '../containers/Header'

//context
import ProfileContext from '../context/userprofile'


const MainLayout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ProfileContext>
                <Header />
                {children}
            </ProfileContext>
        </>
    )
}

export default MainLayout