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
        <div className="flex items-center justify-center w-full">
            {
                cart.length > 0 ?
                (
                    <div className="w-[50%] p-2  min-h-[80vh] flex ">
                        <div>
                            {
                                cart.map((item,index) =>{
                                    return <CartItem key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>
                        <div className="w-6/12 ml-8 ">
                            <div className="w-full flex flex-col items-center gap-5 mx-auto">
                                <h2 className="text-gray-700 font-semibold text-4xl text-left truncate w-40 mt-1">Your Cart</h2>
                                <h4 className="text-blue-400 font-bold text-xl ">Summary</h4>
                                
                                <div className="flex gap-4 mt-2 flex-col">
                            
                                    <span className="text-2xl ">Total Items :  {cart.length} </span>
                                    <p className="text-md text-lg font-semibold">Amount : <span className="text-green-800 font-bold text-2xl">${totalAmount}</span></p>
                                    <button className="bg-green-200 px-3 py-2 rounded-md font-semibold hover:text-green-900 transition duration-300 hover:border" >Checkout Now</button>
                            
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ):(
                    <div className="w-full h-full flex gap-4 items-center justify-center">
                        <div className="">
                        <h1 className="text-4xl font-bold text-red-900 p-2">Cart Empty</h1>
                        <Link to={"/"}>
                        <button className="bg-green-200 px-3 py-2 rounded-md font-semibold hover:text-green-900 transition duration-300 hover:border">Shop Now</button>
                        </Link>
                        
                        </div>
                    </div>
                )
            }

        </div>
    )
}
export default Cart
