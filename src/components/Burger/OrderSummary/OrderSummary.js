import React from 'react';
import Auxi from '../../../hoc/Auxi';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(igkey => {
        return (
        <li key={igkey} >
            <span style={{textTransform:'capitalize'}} >{igkey}</span>:{props.ingredients[igkey]}
        </li>);
    });

    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Auxi>
    );
};

export default orderSummary;