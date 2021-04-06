import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import PlanItem from '../PlanItem'
import './ProfileScreen.css'

const ProfileScreen = () => {
    const user = useSelector(selectUser)

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                        alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <p>Renewal date: 05/04/2021</p>
                            <PlanItem text="Netflix Standard" quality="1080p" />
                            <PlanItem text="Netflix Basic" quality="480p" />
                            <PlanItem text="Netflix Premium" quality="4K + HDR" />
                            <button
                                className="profileScreen__signOut"
                                onClick={() => auth.signOut()}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
