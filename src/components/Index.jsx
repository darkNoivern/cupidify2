import React, { useState } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Userlist from './Userlist';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Chat from './Chat';
import Games from './Games';
import Leaderboard from './Leaderboard';
import { useSelector } from 'react-redux';
import Error from './Error'
import LoveCalculator from './LoveCalculator';
import LoveSongs from './LoveSongs';
import NoGame from './NoGame';

const Index = () => {

    const substituteData = useSelector(state => state);
    const [user, setUser] = useState(substituteData.loggedin)

    const toggleUser = (set) => {
        setUser(set)
    }

    return (
        <>
            <Router>
                <Navbar user={user} toggleUser={toggleUser} />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/users" element={user === true ? <Userlist /> : <SignUp toggleUser={toggleUser} />} />
                    <Route exact path="/chat" element={user === true ? <Chat /> : <SignUp toggleUser={toggleUser} />} />
                    <Route exact path="/leaderboard" element={user === true ? <Leaderboard /> : <SignUp toggleUser={toggleUser} />} />
                    <Route exact path="/games" element={user === true ? <Games /> : <SignUp toggleUser={toggleUser} /> } />
                    <Route exact path="/games/lovecalculator" element={user === true ? <LoveCalculator /> : <SignUp toggleUser={toggleUser} /> } />
                    <Route exact path="/games/musicplayer" element={user === true ? <LoveSongs /> : <SignUp toggleUser={toggleUser} /> } />
                    <Route exact path="/games/*" element={<NoGame />} />
                    <Route exact path="/signin" element={<SignIn toggleUser={toggleUser} />} />
                    <Route exact path="/signup" element={<SignUp toggleUser={toggleUser} />} />
                    <Route path="*" element={<Error /> }/>
                </Routes>
            </Router>
        </>
    );
};

export default Index;
