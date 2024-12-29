import { FaCarSide,FaWallet } from "react-icons/fa";
import { LuLockKeyhole } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";

const ChooseUs=()=>{
    return(
        <div className="flex items-center justify-between w-full min-h-[250px]">
            <ul type="none" className="w-full flex items-center justify-between">
                <li className="flex items-center gap-4">
                    <FaCarSide className="text-5xl text-secondary"/>
                    <div>
                        <h1 className="font-bold text-2xl">Free Shipping</h1>
                        <p className="text-gray-400">Free Shipping On All Order</p>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <FaWallet className="text-5xl text-secondary"/>
                    <div>
                        <h1 className="font-bold text-2xl">Safe Money</h1>
                        <p className="text-gray-400">15 Days Money Back</p>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <LuLockKeyhole className="text-5xl text-secondary"/>
                    <div>
                        <h1 className="font-bold text-2xl"> Secure Payment</h1>
                        <p className="text-gray-400">All Payment Secure</p>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <MdOutlineSupportAgent className="text-5xl text-secondary"/>
                    <div>
                        <h1 className="font-bold text-2xl">Online Suport 24/7</h1>
                        <p className="text-gray-400">Technical Support 24/7</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default ChooseUs;