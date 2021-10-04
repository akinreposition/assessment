import React from 'react'
import Footer from '../components/footer/Footer'
import HomeVideo from '../components/videos/HomeVideo'

const Home = () => {
    return (
        <div className='tc'>
            <header id="header">
                Welcome to Moonsmile Bank
            </header>
            <div className="section1 bg-purple">
                <HomeVideo />
            </div>
            <Footer />
        </div>
    )
}

export default Home
