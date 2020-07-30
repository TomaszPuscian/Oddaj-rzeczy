import React from "react";

const SquareButton = ({text, width, height, fontSize}) => {
    const numWidth = Number(width);
    const numHeight = Number(height)
    const numFont= Number(fontSize)
    return (
        <div className="SquareButton" style={{width: numWidth, height: numHeight, fontSize: numFont, textDecoration: "none" }}>
            {text}
        </div>
    )
}

export default SquareButton;