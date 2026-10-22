// import React from 'react'
// import { useState } from 'react'

// export default function Header() {

//  const[countert,setCountert]=useState(1);
// const[email,setEmail]=useState('');
//  function email(event){
//   setEmail(event.target.value);
//  }
//  function password(event){
//   setEmail(event.target.value);
//  }

//   return (
//      <div>
//          <label htmlFor="email">Email:</label>
//          <input type="email" id="email" name="email" onChange={email} />
//          <label htmlFor="password">Password:</label>
//          <input type="password" id="password" name="password" onChange={password} />

//      </div>

//   )
//
// import React from "react";
// import { useState } from "react";

// export default function Header() {
//   const [countert, setCountert] = useState(1);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleEmail(event) {
//     setEmail(event.target.value);
//   }

//   function handlePassword(event) {
//     setPassword(event.target.value);
//   }

//   return (
//     <div>
//       <label htmlFor="email">Email:</label>

//       <input
//         type="email"
//         id="email"
//         name="email"
//         onChange={handleEmail}
//       />

//       <label htmlFor="password">Password:</label>

//       <input
//         type="password"
//         id="password"
//         name="password"
//         onChange={handlePassword}
//       />
//     </div>
//   );
// }

// ```jsx
// import React from "react";
// import { useState } from "react";

// export default function Header() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleEmail(event) {
//     setEmail(event.target.value);
//   }

//   function handlePassword(event) {
//     setPassword(event.target.value);
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">

//       <div className="bg-white w-96 p-8 rounded-2xl shadow-lg">

//         <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
//           Login
//         </h1>

//         <div className="mb-5">
//           <label
//             htmlFor="email"
//             className="block text-gray-700 font-semibold mb-2"
//           >
//             Email
//           </label>

//           <input
//             type="email"
//             id="email"
//             name="email"
//             onChange={handleEmail}
//             classN

// import React from "react";
// import { useState } from "react";
// export default function Header() {
//     const [countert, setCountert] = useState(1);
//     function handleCounter() {
//         setCountert(countert + 1);
//     }
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   function handleEmail(event) {
//     setEmail(event.target.value);
//   }
//   function handlePassword(event) {
//     setPassword(event.target.value);
//   }

//    function handleSubmit(event) {
//     event.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//     < label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" onChange={handleEmail} />
//         <label htmlFor="password">Password:</label>
//     </div>
//   )
// import React from "react";
// import { useState } from "react";

// export default function Header() {
//   const [countert, setCountert] = useState(1);

//   function handleCounter() {
//     setCountert(countert + 1);
//   }

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleEmail(event) {
//     setEmail(event.target.value);
//   }

//   function handlePassword(event) {
//     setPassword(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     console.log("Email:", email);
//     console.log("Password:", password);
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-lg w-96"
//       >
//         <h1 className="text-2xl font-bold text-center mb-6">
//           Login
//         </h1>

//         <label
//           htmlFor="email"
//           className="block mb-2 font-semibold"
//         >
//           Email:
//         </label>

//         <input
//           type="email"
//           id="email"
//           name="email"
//           onChange={handleEmail}
//           className="w-full border border-gray-300 rounded-lg p-3 mb-4"
//         />

//         <label
//           htmlFor="password"
//           className="block mb-2 font-semibold"
//         >
//           Password:
//         </label>

//         <input
//           type="password"
//           id="password"
//           name="password"
//           onChange={handlePassword}
//           className="w-full border border-gray-300 rounded-lg p-3 mb-6"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue->

// import React from "react";
// import { useState } from "react";
// export default function Header() {
//   const [countert, setCountert] = useState(1);
//   function handleCounter() {
//     setCountert(countert + 1);
//   }
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   function handleEmail(event) {
//     setEmail(event.target.value);
//   }
//   function handlePassword(event) {
//     setPassword(event.target.value);
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//   }
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       {" "}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-lg w-96"
//       >
//         {" "}
//         <h1 className="text-2xl font-bold text-center mb-6"> Login </h1>{" "}
//         <label htmlFor="email" className="block mb-2 font-semibold">
//           {" "}
//           Email:{" "}
//         </label>{" "}
//         <input
//           type="email"
//           id="email"
//           name="email"
//           onChange={handleEmail}
//           className="w-full border border-gray-300 rounded-lg p-3 mb-4"
//         />{" "}
//         <label htmlFor="password" className="block mb-2 font-semibold">
//           {" "}
//           Password:{" "}
//         </label>{" "}
//         <input
//           type="password"
//           id="password"
//           name="password"
//           onChange={handlePassword}
//           className="w-full border border-gray-300 rounded-lg p-3 mb-6"
//         />{" "}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
//         >
//           {" "}
//           Login{" "}
//         </button>{" "}
//         <div className="text-center mt-6">
//           {" "}
//           <p className="mb-3"> Counter: {countert} </p>{" "}
//           <button
//             type="button"
//             onClick={handleCounter}
//             className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800"
//           >
//             {" "}
//             Increase Counter{" "}
//           </button>{" "}
//         </div>{" "}
//       </form>{" "}
//     </div>
//   );
// }
// import React from "react";
// import { useState } from "react";
// export default function Header() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   function handleEmail(event) {
//     setEmail(event.target.value);
//   }
//   function handlePassword(event) {
//     setPassword(event.target.value);
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//   }
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <form onSubmit={handleSubmit}>

//         <label htmlFor="email" className="block mb-2 font-semibold">
//      <h1> email</h1>
//         </label>
//         <input type="email"  id="email" name="email" onChange={handleEmail} placeholder="Enter your email"
//         />
//         <label htmlFor="password" className="block mb-2 font-semibold">
//            <h1>pasword</h1>

//         </label>
//         <input type="password" id="password" name="password" onChange={handlePassword} />
//         <button type="submit"> Login </button>

//       </form>
//     </div>
// 'bg-white w-6 h-6 rounded-s-full
// w-full h-screen bg-amber-900 text-center flex justify-between
//   );
// }
// import React from "react";

// export default function Header() {
//   return (
//     <div className="w-full h-screen bg-amber-900 text-center flex justify-between ">
//       <div className="  w-1/4 h-screen p-4 bg-amber-200 text-center flex justify-center">
//         <div className=" logo flex items-center justify-between w-full">
//           <div> ebtesam</div>
//           <div>
//             <button className="bg-white w-6 h-6 rounded-s-full"> </button>
//           </div>
//         </div>
//         <div className="flex flex-col items-center justify-center flex-1">
//           <h2 className="text-2xl font-bold">
//       Welcome
//     </h2>
//       <p className="mt-3 text-gray-600">
//       Welcome to my website
//     </p>
//         </div>
//         <div>
//           <button className="bg-amber-900 text-white px-6 py-3 rounded-lg w-full">
//     Get Started
//   </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function Header() {

//   const [isopen,setisopen]=useState(false)

//   return (
//     <div className="w-full h-screen bg-amber-900 flex justify-between">

//       {
//         isopen&&
//         (
//         <div className="w-1/4 h-screen p-4 bg-amber-200 flex flex-col">
//         <div className="flex items-center justify-between w-full">
//           <div>ebtesam</div>
//            <button   >
//       <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="m16 17 5-5-5-5" />
//     <path d="M21 12H9" />
//     <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//   </svg>
// </button>

//         </div>

//         <div className="flex-1 flex flex-col items-center justify-center">

//           <p className="mt-3 text-gray-600 font-bold ">about</p>
//           <p className="mt-3 text-gray-600 font-bold">about</p>
//           <p className="mt-3 text-gray-600 font-bold">about</p>
//         </div>

//         <div className="w-full">
//           <button className="bg-amber-900 text-amber-200 px-6 py-3 rounded-lg w-full">
//             Get Started
//           </button>
//         </div>
//       </div>

//         )
//       }
//     </div>
//   );
// }
// import React, { useState } from "react";

// export default function Header() {
//   const [isopen, setisopen] = useState(true);

//   function handleOpen() {
//     setisopen(!isopen);
//   }
//   function handleClose() {
//     setisopen(false);
//   }

//   return (
//     <div className="w-full h-screen bg-amber-900 flex justify-between">
//       {isopen && (
//         <div className="w-1/4 h-screen p-4 bg-amber-200 flex flex-col">
//           <div className="flex items-center justify-between w-full">
//             <div>ebtesam</div>

//             <button onClick={handleOpen}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="m16 17 5-5-5-5" />
//                 <path d="M21 12H9" />
//                 <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//               </svg>
//             </button>
//           </div>

//           <div className="flex-1 flex flex-col items-center justify-center">
//             <p className="mt-3 text-gray-600 font-bold">about</p>
//             <p className="mt-3 text-gray-600 font-bold">about</p>
//             <p className="mt-3 text-gray-600 font-bold">about</p>
//           </div>

//         ! false && (
//           <div className="w-full">

//             <button onClick={handleClose}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="m16 17 5-5-5-5" />
//                 <path d="M21 12H9" />
//                 <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//               </svg>
//             </button>
//           </div>
//         )
//         </div>
//       )}
//     </div>
//   );
// }
// import React, { useState } from "react";
// export default function Header() {
//   const [isopen, setisopen] = useState(true);
//   function handleOpen() {
//     setisopen(true);
//   }
//   function handleClose() {
//     setisopen(false);
//   }
//   return (
//     <div className="w-full h-screen bg-amber-900 flex justify-between">
//       {isopen && (
//         <div className="w-1/4 h-screen p-4 bg-amber-200 flex flex-col">
//           {" "}
//           {" "}
//           <div className="flex items-center justify-between w-full">
//             {" "}
//             <div>ebtesam</div>
//             <button onClick={handleClose}>
//               {" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 {" "}
//                 <path d="m16 17 5-5-5-5" /> <path d="M21 12H9" />{" "}
//                 <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />{" "}
//               </svg>
//             </button>
//           </div>

//           <div className="flex-1 flex flex-col items-center justify-center">
//             {" "}
//             <p className="mt-3 text-gray-600 font-bold">about</p>{" "}
//             <p className="mt-3 text-gray-600 font-bold">about</p>{" "}
//             <p className="mt-3 text-gray-600 font-bold">about</p>{" "}
//           </div>{" "}
//         </div>
//       )}

//       {!isopen && (
//         <button onClick={handleOpen}>

//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="m8 17 5-5-5-5" /> <path d="M3 12h10" />{" "}
//             <path d="M15 21h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4" />{" "}
//           </svg>
//         </button>
//       )}
//     </div>
//   );
// }

// import React from 'react'

// export default function Header() {
//   return (
//     <div className="w-full h-screen bg-amber-900 flex items-center justify-between">
//         <h1  className="text-4xl font-bold mb-4 flex-1 justify-center items-center">
//          to do list
//         </h1>
//         <div>
//           {
//             todo.
//           }

//         </div>

//     </div>
//   )
// }

// import React from "react";
// export default function Todos() {
//   const todos = [
//     { id: 1, title: "Todo 1", completed: false },
//     { id: 2, title: "Todo 2", completed: true },
//     { id: 3, title: "Todo 3", completed: false },
//     { id: 4, title: "Todo 4", completed: false },
//     { id: 5, title: "Todo 5", completed: true },
//     { id: 6, title: "Todo 6", completed: false },
//   ];
//   return (
//     <div className="w-full h-screen bg-red-950 text-white text-center flex flex-col justify-center items-center">
//       {" "}
//       <h1 className="text-4xl font-bold mb-4"> Todos Page </h1>{" "}
//       <div className="w-full h-3/4 px-4 py-2 border-2 border-white rounded-lg mt-4 font-bold flex flex-wrap gap-4 justify-center items-center">
//         {" "}
//         {todos.map((todo) => (
//           <div
//             key={todo.id}
//             className="w-250px bg-white h-200px flex items-center justify-center p-2 border-2 border-white rounded-lg m-2"
//           >
//             {" "}
//             <h1 className="text-xl font-bold text-red-950">
//               {" "}
//               {todo.title}{" "}
//             </h1>{" "}
//           </div>
//         ))}{" "}
//       </div>{" "}
//     </div>
//   );
// }
// import React, { useState } from "react";
// export default function Todos() {
//   const [todos, setTodos] = useState([
//     { id: 1, title: "Todo 1", completed: false, text: "" },
//     { id: 2, title: "Todo 2", completed: true, text: "" },
//     { id: 3, title: "Todo 3", completed: false, text: "" },
//     { id: 4, title: "Todo 4", completed: false, text: "" },
//     { id: 5, title: "Todo 5", completed: true, text: "" },
//     { id: 6, title: "Todo 6", completed: false, text: "" },
//   ]);
//   const [selectedTodo, setSelectedTodo] = useState(false);
//   function handleCardClick(todo) {
//     setSelectedTodo(todo);
//   }
//   function handleChange(e) {
//     const newText = e.target.value;
//     setTodos(
//       todos.map((todo) =>
//         todo.id === selectedTodo.id ? { ...todo, text: newText } : todo,
//       ),
//     );
//     setSelectedTodo({ ...selectedTodo, text: newText });
//   }
//   return (
//     <div className="w-full h-screen bg-red-950 text-white text-center flex flex-col justify-center items-center">

//       <h1 className="text-4xl font-bold mb-4"> Todos Page </h1>{" "}
//       <div className="w-full h-3/4 px-4 py-2 border-2 border-white rounded-lg mt-4 font-bold flex flex-wrap gap-4 justify-center items-center">
//         {" "}
//         {todos.map((todo) => (
//           <div
//             key={todo.id}
//             onClick={() => handleCardClick(todo)}
//             className="w-250px bg-white h-200px flex flex-col items-center justify-center p-2 border-2 border-white rounded-lg m-2 cursor-pointer"
//           >
//             {" "}
//             <h1 className="text-xl font-bold text-red-950">
//               {" "}
//               {todo.title}{" "}
//             </h1>{" "}
//             {todo.text && <p className="text-black mt-3"> {todo.text} </p>}{" "}
//           </div>
//         ))}
//       </div>
//       {selectedTodo && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
//           {" "}
//           <div className="bg-white p-6 rounded-lg w-400px">
//             {" "}
//             <h2 className="text-2xl font-bold text-red-950 mb-4">
//               {" "}
//               {selectedTodo.title}{" "}
//             </h2>
//             <textarea
//               value={selectedTodo.text}
//               onChange={handleChange}
//               placeholder="enter here"
//               className="w-full h-150px border-2 border-red-950 rounded-lg p-3 text-black"
//             />

//             <button
//               onClick={() => setSelectedTodo(null)}
//               className="bg-red-950 text-white px-5 py-2 rounded-lg mt-4">  Close  </button>{" "}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
export default function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1", completed: false, text: "" },
    { id: 2, title: "Todo 2", completed: true, text: "" },
    { id: 3, title: "Todo 3", completed: false, text: "" },
    { id: 4, title: "Todo 4", completed: false, text: "" },
    { id: 5, title: "Todo 5", completed: true, text: "" },
    { id: 6, title: "Todo 6", completed: false, text: "" },
  ]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [text, setText] = useState("");
  function handleCardClick(todo) {
    setSelectedTodo(todo);
    setText(todo.text);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, text: text } : todo,
      ),
    );
    setSelectedTodo(null);
    setText("");
  }
  return (
    <div className="w-full h-screen bg-red-950 text-white text-center flex flex-col justify-center items-center">
      {" "}
      <h1 className="text-4xl font-bold mb-4"> Todos Page </h1>{" "}
      <div className="w-full h-3/4 px-4 py-2 border-2 border-white rounded-lg mt-4 font-bold flex flex-wrap gap-4 justify-center items-center">
        {" "}
        {todos.map((todo) => (
          <div
            key={todo.id}
            onClick={() => handleCardClick(todo)}
            className="w-250px bg-white h-200px flex flex-col items-center justify-center p-2 rounded-lg m-2 cursor-pointer"
          >
            {" "}
            <h1 className="text-xl font-bold text-red-950">
              {" "}
              {todo.title}{" "}
            </h1>{" "}
            {todo.text && <p className="text-black mt-3"> {todo.text} </p>}{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {selectedTodo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          {" "}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg w-400px"
          >
            {" "}
            <h2 className="text-2xl font-bold text-red-950 mb-4">
              {" "}
              {selectedTodo.title}{" "}
            </h2>{" "}
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="enter herer"
              className="w-full border-2 border-red-950 rounded-lg p-3 text-black"
            />{" "}
            <button
              type="submit"
              className="bg-red-950 text-white px-5 py-2 rounded-lg mt-4"
            >
              {" "}
              Submit{" "}
            </button>{" "}
          </form>{" "}
        </div>
      )}{" "}
    </div>
  );
}
