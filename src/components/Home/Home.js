import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import {HomeWhomWeHelpList} from "./HomeWhomWeHelpList";
import {ContactForm} from "../ContactForm";
import {HomeFooter} from "./HomeFooter";

const Home = () => {
    return (
    <>
        <HomeHeader />
        <HomeThreeColumns />
        <HomeFourSteps />
        <HomeAboutUs />
        <HomeWhomWeHelpList />
        <ContactForm />
        <HomeFooter />
    </>
    )
}

export {Home}