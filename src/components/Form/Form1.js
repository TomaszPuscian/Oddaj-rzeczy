import React, {useState} from "react";

const Form1 = () => {
    const [state, setState] = useState({
        reusableClothes: false,
        destroyedClothes: false,
        toys: false,
        books: false,
        other: ""
    })

    const onSubmit = () => {

    }

    const {reusableClothes, destroyedClothes, toys, books, other} = state;

    // const isInvalid = () => {
    //     if
    // }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Ubrania, które nadają się do po
                <input name="reusableClothes" value={reusableClothes} onChange={onChange} type="radio" />
            </label>
            <label>
                <input name="destroyedClothes" value={destroyedClothes} onChange={onChange} type="radio" />
            </label>
            <input/>
            <button disabled={isInvalid} type="submit">Sign In</button>
        </form>
    )
}