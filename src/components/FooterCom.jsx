import logo from "../assets/logo.png"
import paymentImg from "../assets/payment-icons.png"
import { Link } from "react-router";
const FooterCom=()=>{
    return(
        <footer className="w-[88%] m-auto pt-4">
            <div className="flex items-center justify-evenly py-4 border-b-2 border-white">
                <div >
                    <img src={logo} alt="" className="w-[70px]"/>
                    <p className="w-[40%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspeates inventore a possimus, repellendus id tempora doloremque sapiente.</p>
                </div>
                <div className="flex gap-4 justify-between">
                    <ul type="none" className="inline-block">
                        <h1 className="py-6 text-3xl mr-8">Contact</h1>
                        <li className="mb-3">
                            <a href="https://www.facebook.com/korm.taiyi.5" target="blank" className="text-black hover:underline">Facebook</a>
                        </li>
                        <li className="mb-3">
                            <a href="" target="blank" className=" text-black hover:underline">Telegram</a>
                        </li>
                        <li className="mb-3">
                            <a href="" target="blank" className=" text-black hover:underline">Instagram</a>
                        </li>
                    </ul>
                    <ul type="none">
                        <h1 className="py-6 text-3xl mr-8">Links</h1>
                        <li className="mb-3">
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/shop" className="hover:underline">Shop</Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/about" className="hover:underline">About</Link>
                        </li>
                        
                        <li className="mb-3">
                            <Link to="/Contact" className="hover:underline">Contact us</Link>
                        </li>
                    </ul>
                    <ul type="none">
                        <h1 className="py-6 text-3xl">Address</h1>
                        <li>
                            <p>2011st, Kok Kleang, Sen Sok, Phnom Penh</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="min-h-[100px] flex items-center justify-between px-4">
                <p> &copy; {new Date().getFullYear()} E-Shop</p>
                <img src={paymentImg} alt="" />
            </div>
        </footer>
    )
}
export default FooterCom;