import React from 'react'
import Pizza from './Pizza';

export default function Order() {
    const pizzaType = "pepperoni";
    const pizzaSize = "M";
    return (
        <div>
            <div className="order">
                <h2>Create Order</h2>
                <form action="">
                    <div>
                        <div>
                            <label htmlFor="pizza-type">Pizza Type</label>
                            <select name="pizza-type" id="" value={pizzaType}>
                                <option value="pepperoni">The Pepperoni Pizza</option>
                                <option value="hawaiian">The Hawaiian Pizza</option>
                                <option value="big_meat">The Big Meat Pizza</option>
                            </select>
                        </div>
                        <div>
                            <span>
                                <input checked={pizzaSize == "S"} type="radio" name='pizza-size' value="S" id='pizza-s' />
                                <label htmlFor="pizza-s">Small</label>
                            </span>

                            <span>
                                <input checked={pizzaSize == "M"} type="radio" name='pizza-size' value="M" id='pizza-m' />
                                <label htmlFor="pizza-s">Medium</label>
                            </span>

                            <span>
                                <input checked={pizzaSize == "L"} type="radio" name='pizza-size' value="L" id='pizza-l' />
                                <label htmlFor="pizza-s">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type='submit'>Buy Now</button>
                    <div className="order-pizza">
                        <Pizza name="pepperoni" description="another pep pizza" image="/public/pizzas/pepperoni" />
                        <p>$13.2</p>
                    </div>
                </form>
            </div>
        </div>
    )
} hawaiian
