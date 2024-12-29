import { Link } from "react-router";
import imgHeroSection from "../../assets/beat.png"
const HeroSection=()=>{
    return(
        <div className="w-full h-[650px] bg-gray-200 rounded-2xl flex items-center relative">
            <div className="w-[82%] flex items-center justify-end">
                <div className="flex flex-col items-start">
                    <h1 className="text-2xl font-bold">Beats Solo</h1>
                    <h1 className="text-7xl font-bold mt-4">Wireless</h1>
                    <h1 className="text-white font-bold uppercase text-[150px] leading-tight">Headphone</h1>
                    <Link to="/shop" className=" px-10 py-2 rounded-xl text-xl bg-primary text-white hover:scale-105 duration-300">Shop</Link>
                </div>
                <img src={imgHeroSection} alt=""className="absolute z-20 w-[400px]"/>
            </div>
        </div>
    )
}
export default HeroSection;