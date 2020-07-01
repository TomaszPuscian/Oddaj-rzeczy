import React from "react";
import {HomeHeader} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeFourSteps} from "./HomeFourSteps";
import {HomeFormButton} from "./HomeFormButton";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeWhomWeHelpList} from "./HomeWhomWeHelpList";
import {HomeContactForm} from "./HomeContactForm";
import {HomeFooter} from "./HomeFooter";

const Home = () => {
    return <>
        <HomeHeader />
        <HomeThreeColumns />
        <HomeFourSteps />
        <HomeFormButton />
        <HomeAboutUs />
        <HomeWhomWeHelpList />
        <HomeContactForm />
        <HomeFooter />
    </>
}

export {Home}