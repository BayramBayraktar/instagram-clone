import React from 'react'
import Link from 'next/link'


import {
    Fotter
} from './style'

const AccountsFooter = () => {
    return (
        <Fotter>
            <div className='links'>
                <Link href="/">
                    <a>Meta</a>
                </Link>
                <Link href="/">
                    <a>About</a>
                </Link>
                <Link href="/">
                    <a>Jobs</a>
                </Link>
                <Link href="/">
                    <a>Help</a>
                </Link>
                <Link href="/">
                    <a>API</a>
                </Link>
                <Link href="/">
                    <a>Privacy</a>
                </Link>
                <Link href="/">
                    <a>Terms</a>
                </Link>
                <Link href="/">
                    <a>Top Accounts</a>
                </Link>
                <Link href="/">
                    <a>Hastags</a>
                </Link>
                <Link href="/">
                    <a>Locations</a>
                </Link>
                <Link href="/">
                    <a>Instagram Lite</a>
                </Link>
                <Link href="/">
                    <a>Contact Uploadin & Non-users</a>
                </Link>
                <Link href="/">
                    <a>Dance</a>
                </Link>
                <Link href="/">
                    <a>Food & Drink</a>
                </Link>
                <Link href="/">
                    <a>Home & Garden</a>
                </Link>
                <Link href="/">
                    <a>Music</a>
                </Link>
                <Link href="/">
                    <a>Visual Arts</a>
                </Link>
            </div>
            <div className='SelectedLanugage'>
                <select>
                    <option value="English" >English</option>
                    <option value="Turkey" >Turkey</option>
                </select>
                <div className='copyright' >@ 2022 ınstagram from meta</div>
            </div>
        </Fotter>
    )
}

export default AccountsFooter