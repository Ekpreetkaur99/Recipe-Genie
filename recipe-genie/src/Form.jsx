export default function Form(){
    return(
        <main>
            <form className="add-ingredient-form">
                <input 
                type="text"
                placeholder="eg: Tomato, Oregano.."
                aria-lable="Add Ingredient"></input>
                <button>Add Ingredient</button>
            </form>
        </main>
    )
}