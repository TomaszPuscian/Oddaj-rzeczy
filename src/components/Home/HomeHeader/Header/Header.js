import React from "react";
import TextSectionHeader from "../../TextSectionHeader";
import SquareButton from "../../SquareButton";

import * as ROUTES from "../../../../constants/routes"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header--content">
            <TextSectionHeader
                text1="Zacznij pomagać!"
                text2="Oddaj niechciane rzeczy w zaufane ręce"
            />

            <div className="header--two--buttons">
                <Link to={ROUTES.SIGN_IN} className="link" >
                    <SquareButton
                        // component={Link}
                        // to={ROUTES.SIGN_IN}
                        text="ODDAJ RZECZY"
                        width="310"
                        height="120"
                        fontSize="36"
                    />
                </Link>
                <Link to={ROUTES.SIGN_IN} className="link" >
                    <SquareButton
                        text="ZORGANIZUJ ZBIÓRKĘ"
                        width="310"
                        height="120"
                        fontSize="36"
                    />
                </Link>
            </div>
        </div>
    )
}

export {Header}