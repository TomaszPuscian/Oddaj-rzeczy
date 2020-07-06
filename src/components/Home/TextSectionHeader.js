import React from "react";
import decoration from "../../assets/Decoration.svg"

const TextSectionHeader = ({text1, text2}) => {
    return (
        <div className="TextSectionHeader">
            <p>{text1}<br/>{text2}</p>
            <img src={decoration} alt="black decorated line" className="TextSectionHeader--decoration--line"/>
        </div>
    )
}

export default TextSectionHeader;