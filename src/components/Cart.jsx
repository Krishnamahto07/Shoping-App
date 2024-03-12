import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
function Cart(){
    const {cart} = useSelector((state)=>state);
    const [totalAmount,setTotalAmount] = useState(0);
    useEffect( ()=>{
        setTotalAmount( cart.reduce( (acc,curr) => acc+curr.price,0));
    },[cart])
    return (
        <div>
            {
                cart.length > 0 ?
                (
                    <div>
                        <div>
                            {
                                cart.map((item,index) =>{
                                    return <CartItem key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>
                        <div>
                            <div>
                                <h2>Your Cart</h2>
                                <h4>Summary</h4>
                                <p>
                                    <span>Total Items :{cart.length} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                ):(
                    <div>
                    <h1>Cart Empty</h1>
                    <Link to={"/"}>
                    <button>Shop Now</button>
                    </Link>
                    <div>
                        <p>Total Amount : ${totalAmount}</p>
                        <button>Checkout Now</button>
                    </div>
                    </div>
                )
            }

        </div>
    )
}
export default Cart