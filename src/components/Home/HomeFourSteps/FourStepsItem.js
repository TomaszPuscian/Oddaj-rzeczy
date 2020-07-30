import React from "react";

const FourStepsItem = ({img, header, description}) => {
    return (
        <div className="four--steps--item--container">
            <img src={img} alt="icon" className="four--steps--item--img"/>
            <p className="four--steps--item--paragraph">
                {header}
            </p>
            <hr className="four--steps--item--underline"/>
            <p className="four--steps--item--paragraph">
                {description}
            </p>
        </div>
    )
}

export {FourStepsItem}