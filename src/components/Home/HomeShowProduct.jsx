import { Link } from "react-router";
import img from "../../assets/watch.png"

const HomeShowProduct =()=>{
    return(
        <div className="w-full flex flex-col items-center gap-4 py-8">
            <h1 className="text-5xl text-[#1376f4] font-bold underline underline-offset-8">Best Seller</h1>
            <div className="w-full flex items-center justify-evenly flex-wrap py-4 gap-4">
                <div className=" w-[250px] min-h-[260px] relative bg-gray-100 rounded-xl overflow-hidden">
                    <div className="group">
                        <img src={img} alt="" className=" w-full min-h-[180px] bg-gray-300 object-cover hover:blur-sm"/>
                        <div className="flex items-center justify-center">
                            <p className="hidden py-2 px-4 bg-secondary border group-hover:flex absolute cursor-pointer rounded-full">Add to cart</p>
                        </div>
                    </div>
                    <div className="p-2">
                        <h1 className="text-lg text-black font-bold">HeadPhone</h1>
                        <p className="text-sm font-bold text-">120$</p>
                    </div>
                </div>
                {/*  */}
            </div>
            <Link to="/shop" className="text-2xl border rounded-xl px-6 py-2 bg-brandGreen cursor-pointer hover:scale-105 duration-500">See All Product</Link>
        </div>
    )
}
export default HomeShowProduct;