import React from "react";
import {ColumnItem} from "./ColumnItem";

const HomeThreeColumns = () => {
    return <>
        <div className="columns--container">
            <ColumnItem
                number="10"
                header="ODDANYCH WORKÓW"
                content="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
            <ColumnItem
                number="5"
                header="WSPARTYCH ORGANIZACJI"
                content="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
            <ColumnItem
                number="7"
                header="ZORGANIZOWANYCH ZBIÓREK"
                content="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
        </div>
    </>
}

export {HomeThreeColumns}