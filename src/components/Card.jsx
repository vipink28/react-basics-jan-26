import { HomeIcon, TagIcon } from "lucide-react";
//props - in react we can pass down the data to child components using props object parameter.
// in react we can only pass down data from parent to child component.
function Card({ title, onSale, children }) {
    //props = {title="Card 1", props.onSale:true}
    //destructuring.

    // array and objects - we can destructure arrays and objects.
    // getting the value of array and objects as variables.

    const color = ["red", "blue", "green"];
    const [col1, col2, col3] = color;
    // before destructuring.
    color[1]
    // after 
    col1

    const user = { name: "Suchi", course: "Python" }
    const { course, name } = user

    return (
        <div className={`card ${onSale ? "on-sale" : ""}`}>

            {/* conditional rendering */}
            {
                onSale ?
                    <TagIcon className="card-icon" />
                    :
                    <HomeIcon className="card-icon" />
            }

            {
                onSale &&
                <p>Price: 25000</p>
            }



            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac posuere massa, in luctus elit. Phasellus tincidunt facilisis justo, ac vulputate nisi dictum sed.</p>
            {
                children
            }
        </div>
    )
}
export default Card;