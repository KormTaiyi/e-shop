import { BiSearchAlt2,BiCartAlt} from "react-icons/bi";
import logo from "../assets/logo.png"
const HeaderCom=()=>{
    return(
        <div className="w-[88%] m-auto h-20 flex items-center justify-between px-4 mb-4">
            <ul className="flex items-center justify-center gap-8">
                 <img src={logo} alt="logo" className="h-5/6 w-12"/>
                <li> 
                    <a href="/" className="text-xl text-gray-500 hover:underline hover:text-gray-900 ">Home</a>
                </li>
                <li>
                    <a href="/shop" className="text-xl text-gray-500 hover:underline hover:text-gray-900">Shop</a>
                </li>
                <li>
                    <a href="/about" className="text-xl text-gray-500 hover:underline hover:text-gray-900">About us</a>
                </li>
                <li>
                    <a href="/contact" className="text-xl text-gray-500 hover:underline hover:text-gray-900">Contact us</a>
                </li>
                <li>
                    <a href="/" className="text-xl text-gray-500 hover:underline hover:text-gray-900"></a>
                </li>
            </ul>
            <div className="flex gap-6">
                <BiSearchAlt2 className="text-2xl cursor-pointer text-gray-900 hover:text-zinc-400"/>
                <BiCartAlt className="text-2xl cursor-pointer text-gray-900 hover:text-zinc-400"/>
            </div>
        </div>
    )
}
export default HeaderCom;