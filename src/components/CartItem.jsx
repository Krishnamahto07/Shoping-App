import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slice/CartSlice";

function CartItem({item,itemIndex}){
    const dispatch = useDispatch();
    const removeFromCart = () =>{
        dispatch(remove(item.id));
        toast.success("Item removed");
    }
    return (
        <div>
            <div className="flex w-6/12 items-center justify-between shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
         gap-3 p-4 mt-10 ml-5 rounded-xl">
                <div className="w-full">
                    <img src={item.image} className="w-full h-full" alt="img"/>
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>
                    <div>
                        <p>{item.price}</p>
                        <div onClick={removeFromCart}><MdOutlineDeleteForever /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItem