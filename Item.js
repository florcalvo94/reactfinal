import React from "react";

const Item ({name, description, price}) => {
    return (
        <div className='item'>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h4>{price}</h4>
        
    </div>
    )
}

export default Item 