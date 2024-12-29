import { Link } from "react-router";
import img from "../../assets/beat1.png"
const BennerSection =()=>{
    return (
        <div className="w-full h-[340px] flex items-center justify-between bg-primary rounded-3xl px-8 mb-8">
            <div className="w-[30%]">
                <p className=" text-white text-sm">30% OFF</p>
                <h1 className=" text-white text-[75px] font-bold text-wrap leading-none uppercase ">fine smile</h1>
                <p className=" text-white text-base">now to 28 Feb</p>
            </div>
            <img src={img} alt="" className="h-[400px]"/>
            <div className="w-[30%]">
                <p className="text-white font-bold text-xl">Air Solo Bass</p>
                <h1 className="text-white text-[50px] font-bold">Winter Sale</h1>
                <p className="text-white text-wrap text-sm mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolorum obcaecati sunt nisi officiis. Doloribus iste ut magnam animi nemo, harum illo reiciendis debitis sed rem vero eius, quam nesciunt.</p>
                <Link to="/shop" className="border py-2 px-4 rounded-full bg-white text-primary">Shop Now</Link>
            </div>
        </div>
    )
}
export default BennerSection;