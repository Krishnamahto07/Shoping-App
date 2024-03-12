import { NavLink } from "react-router-dom"
import { IoMdCart } from "react-icons/io";
import { FcCdLogo } from "react-icons/fc";
import { useSelector } from "react-redux";

function Navbar(){
    const {cart} = useSelector((state)=> state);
    return (
        <div >
            <div className="w-[100vw] h-[50px] text-white flex items-center justify-around bg-slate-600 ">
                <NavLink to="/" >
                    <FcCdLogo className="h-12 w-12 " />
                </NavLink>
                <div className="flex justify-center items-center gap-5">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                        <div className="relative">
                            <IoMdCart className="text-3xl" />
                        {
                            cart.length >= 0 &&
                            <div className="flex font-bold items-center justify-center absolute -top-1 -right-0 text-xs bg-green-600 w-5 h-5 animate-bounce rounded-full ">{cart.length}</div>
                        }
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar