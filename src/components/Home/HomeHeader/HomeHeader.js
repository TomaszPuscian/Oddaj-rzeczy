import React from "react";
import UserAuthenticationBar from "./UserAuthentication"
import Navbar from "./Navigation"
import Header from "./Header";

import homeImage from "../../../assets/Home-Hero-Image.jpg"

const HomeHeader = () => {
    return (
    <div className="header--container">
        <img src={homeImage} alt="few things you could give away like game controller or some keyboard" className="header--img" />
        <div>
            <UserAuthenticationBar />
            <Navbar />
            <Header />
        </div>
    </div>
    )
}

export {HomeHeader}