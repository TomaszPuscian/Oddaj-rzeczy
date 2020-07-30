// import React, {useState} from "react";
//
// export const FormContext = createContext()
//
// const Form = () => {
//     const [state, setState] = useState({
//         name: '',
//         bagsQnt: 0,
//         step:1
//     })
//
//     const changeState = (value) => {
//         setState(prev => ({
//             ...prev,
//             ...value
//     }))
//     }
//
//
//     const getForm = () => {
//         switch (state.step) {
//             case 1:
//                 return <Form1 />
//             case 2:
//                 return <Form2 />
//             case 3:
//                 return <Form3 />
//             case 4:
//                 return <Form4 />
//         }
//     }
//
//
//     return (
//         <FormContext.Provider value={{ state, changeState}}>
//             {getForm()}
//         </FormContext.Provider>
//     )
// }
//
// export {Form}