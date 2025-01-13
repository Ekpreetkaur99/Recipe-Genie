// Question 1. You have 2 options for what you can pass in to a
//   state setter function (e.g. `setCount`). What are they?
//  1. Pass the new version of state that we want to use as the 
//   replacement for the old version of state.
//  
//  2.  Pass a callback function. 
// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
   
//    Whenever we don't really care about (or need) the old value,
//    we simply want to set a new value.


// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?

//    Whenever we do care about the previous value in state and need
//    it to help us determine what the new value should be.


// Examples: function App() {

// const [count,setCount] = React.useState(0)
//   function add(){
//     setCount(prevCount => prevCount+1)
//   }
//   function minus(){
//     setCount(prevCount => prevCount-1)
//   }

//   return (
//     <>
//   <Header/>
//   <Form/>
//   <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" aria-label="Decrease count" onClick={minus}>-</button>
//                 <h2 className="count">{count}</h2>
//                 <button className="plus" aria-label="Increase count" onClick={add}>+</button>
//             </div>
//         </main>

//     </>
//   )
// }

// export default App




// Using a star toggle : 

// Code: 
// import './App.css'
// import Header from "./Header"
// import Form from "./Form"
// import React from 'react'
// import starEmpty from "./assets/starEmpty.png"
// import starFilled from "./assets/starFilled.png"
// function App() {
//   const [star,setStar]= React.useState({
//     isFavorite: true
//   })
//   let starIcon = star.isFavorite ? starFilled : starEmpty
//   function toggleFavorite() {
//     setStar((prevState) => ({
//       isFavorite: !prevState.isFavorite,
//     }));
// }
//   return (
//     <>
//   <Header/>
//   <Form/>
//   <main>
//     <button onClick = {toggleFavorite}>
//     <img
//     src={starIcon}></img></button>
//   </main>
//     </>
//   )
// }

// export default App


// to add full details of contact :  function toggleFavorite() {
//     setContact(prevContact => ({
//         ...prevContact,
//         isFavorite: !prevContact.isFavorite
//     }))






// Form 
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function App() {
//   /**
//    * Challenge: grab the employment status from the form and log it
//    * to the console. (Remember to select one of the radios before submitting)
//    * 
//    * Note: This won't work the way you might expect quite yet!
//    */

//   function signUp(formData) {
//     const email = formData.get("email")
//     const password = formData.get("password")
//     const employmentStatus = formData.get("employmentStatus")
//     const dietaryRestrictions = formData.getAll("dietaryRestrictions")
//     console.log(dietaryRestrictions)
//   }

//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form action={signUp}>

//         <label htmlFor="email">Email:</label>
//         <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

//         <label htmlFor="password">Password:</label>
//         <input id="password" defaultValue="password123" type="password" name="password" />

//         <label htmlFor="description">Description:</label>
//         <textarea id="description" name="description" defaultValue="This is a description"></textarea>

//         <fieldset>
//           <legend>Employment Status:</legend>
//           <label>
//             <input type="radio" name="employmentStatus" value="unemployed" />
//             Unemployed
//         </label>
//           <label>
//             <input type="radio" name="employmentStatus" value="part-time" />
//             Part-time
//         </label>
//           <label>
//             <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
//             Full-time
//         </label>
//         </fieldset>

//         <fieldset>
//           <legend>Dietary restrictions:</legend>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="kosher" />
//             Kosher
//         </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="vegan" />
//             Vegan
//         </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
//             Gluten-free
//         </label>
//         </fieldset>

//         <label htmlFor="favColor">What is your favorite color?</label>
//         <select id="favColor" name="">
//           <option>Red</option>
//           <option>Orange</option>
//           <option>Yellow</option>
//           <option>Green</option>
//           <option>Blue</option>
//           <option>Indigo</option>
//           <option>Violet</option>
//         </select>

//         <button>Submit</button>

//       </form>
//     </section>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);



//show and hide using button:
// import React from "react"

// export default function Joke(props) {
//     const [isShown, setIsShown] = React.useState(false)
    
//     function toggleShown() {
//         setIsShown(prevShown => !prevShown)
//     }
    
//     return (
//         <div>
//             {props.setup && <h3>{props.setup}</h3>}
//             {isShown ? <p>{props.punchline}</p> : null}
//             <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
//             <hr />
//         </div>
//     )
// }