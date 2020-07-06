import React from "react";
import {HomeHeader} from "./HomeHeader/HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns/HomeThreeColumns";
import {HomeFourSteps} from "./HomeFourSteps";
import {HomeFormButton} from "./HomeFormButton";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeWhomWeHelpList} from "./HomeWhomWeHelpList";
import {ContactForm} from "../ContactForm";
import {HomeFooter} from "./HomeFooter";

const Home = () => {
    return (
    <>
        <HomeHeader />
        <HomeThreeColumns />
        <HomeFourSteps />
        <HomeFormButton />
        <HomeAboutUs />
        <HomeWhomWeHelpList />
        <ContactForm />
        <HomeFooter />
    </>
    )
}

export {Home}