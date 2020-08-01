import React from "react";
import TextSectionHeader from "../TextSectionHeader";
import signature from "../../../assets/Signature.svg";
import people from "../../../assets/People.jpg"


const HomeAboutUs = () => {
    return <>
        <div className="aboutUs--container">
            <div className="aboutUs--text--container">
                <TextSectionHeader text="O nas" />
                <p className="aboutUs--text--paragraph">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img src={signature} alt="Handwritten signature" className="aboutUs--signature" />
            </div>
            <img src={people} alt="group of smiling people" className="aboutUs--img" />
        </div>
    </>
}

export {HomeAboutUs}