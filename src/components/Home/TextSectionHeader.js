import React from "react";
import decoration from "../../assets/Decoration.svg"

const TextSectionHeader = ({text, text2}) => {
    return (
        <div className="TextSectionHeader">
            <p>{text}<br/>{text2}</p>
            <img src={decoration} alt="black decorated line" className="TextSectionHeader--decoration--line"/>
        </div>
    )
}

export default TextSectionHeader;