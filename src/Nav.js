import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Nav = () => {
    const [show, handleShow] = useState(false)
    const history = useHistory()
    
    const transitionNavBar = () => {
        if(window.scrollY > 100 ) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__container">
                <div className="nav__optionsLeft">
                    <img
                        onClick={() => history.push('/')}
                        className="nav__logo" 
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt=""
                    />
                    <p>Home</p>
                    <p>TV Shows</p>
                    <p>Movies</p>
                    <p>Recently added</p>
                    <p>My List</p>
                </div>
                <div className="nav__optionsRight">
                    <SearchIcon />
                    <CardGiftcardIcon />
                    <NotificationsIcon />
                    <img
                        onClick={() => history.push('/profile')}
                        className="nav__avatar" 
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav
