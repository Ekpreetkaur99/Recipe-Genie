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