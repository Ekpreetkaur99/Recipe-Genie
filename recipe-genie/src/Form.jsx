import React from "react"

export default function Form(){
    const [ingredients, setIngredients] = React.useState([]) 

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        // console.log("Form Submitted")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        // ingredients.push(newIngredient)
        // console.log(ingredients)
        setIngredients(prevIngredients => [...prevIngredients, newIngredient] )
    }
    
    return(
        <main> 
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                type="text"
                placeholder="eg: Tomato, Oregano.."
                aria-label="Add Ingredient"
                name="ingredient"></input>
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
