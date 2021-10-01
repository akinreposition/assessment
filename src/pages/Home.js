import React from 'react'
import { SignUp } from '../components/forms/SignUp'

const Home = () => {
    return (
        <div className='tc'>
            <header id="header">
                Welcome to Moonsmile Bank
            </header>
            <div className="section1 bg-purple">
                <SignUp />
            </div>
        </div>
    )
}

export default Home
