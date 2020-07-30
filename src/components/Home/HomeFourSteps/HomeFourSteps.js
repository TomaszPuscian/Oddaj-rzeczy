import React from "react";
import TextSectionHeader from "../TextSectionHeader";
import {FourStepsItem} from "./FourStepsItem";
import SquareButton from "../SquareButton";
import * as ROUTES from "../../../constants/routes";
import {Link} from "react-router-dom";

import icon1 from "../../../assets/Icon-1.svg"
import icon2 from "../../../assets/Icon-2.svg"
import icon3 from "../../../assets/Icon-3.svg"
import icon4 from "../../../assets/Icon-4.svg"



const HomeFourSteps = () => {
    return (
        <>
        <TextSectionHeader text="Wystarczą 4 proste kroki"/>

            <div className="four--steps--container">
                <FourStepsItem img={icon1} header="Wybierz rzeczy" description="ubrania, zabawki, sprzęt i inne" />
                <FourStepsItem img={icon2} header="Spakuj je" description="skorzystaj z worków na śmieci" />
                <FourStepsItem img={icon3} header="Zdecyduj, komu pomóc" description="wybierz zaufane miejsce" />
                <FourStepsItem img={icon4} header="Zamów kuriera" description="kurier przyjedzie w dogodnym terminie" />
            </div>

            <Link to={ROUTES.SIGN_IN} className="link" >
                <div className="four--steps--button--container">
                    <SquareButton
                        text="ODDAJ RZECZY"
                        width="310"
                        height="120"
                        fontSize="36"
                    />
                </div>
            </Link>
        </>
    )

}

export {HomeFourSteps}