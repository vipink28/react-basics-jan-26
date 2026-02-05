
// javascript is used to manipulate the DOM.


function Header() {
    let title = "Header Component";
    let headerText = "accent-text"
    let isHeader = true;
    // condition ? true statement : false statement    
    return (
        <>
            <div>
                {/*adding class*/}
                <h2 className={headerText}>{title}</h2>
                <h2 className={headerText}>{title}</h2>

                {/*Conditional classes */}
                <h2 className={isHeader ? "accent-text" : "base-text"}>{title}</h2>

                {/*dynamic classes with static classes*/}
                <h2 className={`border-heading ${isHeader ? "accent-text" : "base-text"}`}>{title}</h2>

                <p style={{ backgroundColor: "purple", fontSize: 25 + "%" }}>This is paragraph</p>
            </div>
        </>
    )
}

export default Header;