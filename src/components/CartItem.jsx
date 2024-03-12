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
            <div className="flex  shadow-[inset_-12px_-8px_40px_#46464620]
         gap-3  rounded-xl">
                <div className="w-[200px]">
                    <img src={item.image} className="w-full h-full" alt="img"/>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-gray-700 font-semibold text-2xl text-left truncate w-40 mt-3">{item.title}</h1>
                    <p className="w-40 text-gray-500 font-normal text-[15px] ">{item.description.split(" ").slice(0,10).join(" ")+" . . . "}</p>
                    <div>
                    <p className="text-green-600 font-bold ">${item.price}</p>
                        <div className="border-2 mt-2 border-gray-700 rounded-full font-semibold text-gray-700
                    text-2xl w-[40px] uppercase hover:bg-gray-700 hover:text-white transiton ease-in duration-300" onClick={removeFromCart}><MdOutlineDeleteForever  className="ml-1"/></div>
                    </div>
                </div>
            </div>
                <div className="bg-blue-900 h-[2px] w-full mb-4 mt-2"></div>
        </div>
    )
}
export default CartItem
