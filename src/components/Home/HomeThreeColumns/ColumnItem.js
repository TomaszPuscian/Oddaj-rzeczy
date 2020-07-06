import React from "react";

const ColumnItem = ({number, header, content}) => {
    return (
    <div className="columns--item--container">
        <p className="columns--item--number">
            {number}
        </p>
        <p className="columns--item--header">
            {header}
        </p>
        <p className="columns--item--content">
            {content}
        </p>
    </div>
    )
}

export {ColumnItem}