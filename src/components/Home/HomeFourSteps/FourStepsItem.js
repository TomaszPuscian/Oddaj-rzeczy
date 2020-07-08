import React from "react";

const FourStepsItem = ({img, header, description}) => {
    return (
        <div className="four--steps--item--container">
            <img src={img} alt="tshirt icon" />
            <p>
                {header}
            </p>
            <hr />
            <p>
                {description}
            </p>
        </div>
    )
}

export {FourStepsItem}