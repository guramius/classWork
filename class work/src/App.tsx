// import ButtonProps from './components/interface'

// import { useState } from "react";

// import React, { ChangeEvent } from "react"

// // interface ButtonProps {
// //   lable?:string;
// //   wtfClick: () => void;
// // }

// const Button = ({lable, wtfClick}:ButtonProps) => {
//   return (
//     <>
//       <button onClick={wtfClick}>{lable}</button>
//     </>
//   )
// }
// function App() {

//   return (
//     <>
//       <Button lable="click me"  wtfClick={() => console.log("u clicked button")}/>
//     </>
//   )
// }

// export default App

// interface InputProps {
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Corrected React.ChangeEvent
// }

// import InputProps from './components/interface'

// const TextInput = ({ onChange }: InputProps) => { 
//   return <input type="text" onChange={onChange} />;
// };

// const handlerInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
//   console.log(e.target.value);
// };

// const App = () => {
//   return (
//       <TextInput onChange={handlerInputChange} /> 
//   );
// };

// export default App;

// import { useState } from "react"


// const App = () => {
//   const [count, setCount] = useState<number>(1);
//   const incriment =() => setCount(count*count);
//   const dicriment =() => setCount(count/2)
//   return (
//     <div>

//       <button onClick={incriment} className="text-cyan-700 mr-[20px]">incriment</button>
//       <button onClick={dicriment}>dicrimnet</button>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default App

// interface UserProps {
//   name?:string;
//   age?:number;
// }
// const App = () => {
//   const [user, setUser] = useState<UserProps | null> (null)

//   const updateUser = () => {
//     if(user) {
//       setUser(null)
//       console.log(setUser(null))
//     } else {
//       setUser({name:"luka", age:20})
//       console.log({name:"luka", age:20})
//     }
//   }
//   return (
//     <div>
//       <button onClick={updateUser}>updateUser</button>
//       {user && <p>{user.name} and user {user.age}</p>}
//     </div>
//   )
// }

// export default App

// import InputProps from './components/interface'


import { useState } from "react"

const App = () => {
    const[value, setValue] = useState<string>();  

    const handlerClik = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div className="bg-gray-600 w-full h-screen">
            <input onChange={handlerClik} type="text" />
            <button onClick={() => console.log(value)}>add code</button>
            <p>{}</p>
        </div>
    )
}

export default App