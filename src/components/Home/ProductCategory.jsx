import img1 from "../../assets/earphone.png"
import img2 from "../../assets/watch.png"
import img3 from "../../assets/macbook.png"
import img4 from "../../assets/gaming.png"
import img5 from "../../assets/vr.png"
import img6 from "../../assets/jbl-speaker.png"

const ProductCategory=()=>{
    return(
        <div className="w-full py-8">
            <div className="flex justify-between items-center py-6">
                {/*  */}
                <div className="w-[23%] h-[320px] flex bg-black rounded-2xl pl-4 py-10 relative">
                    <div className="flex flex-col items-start justify-end gap-2">
                        <p className="text-gray-50 ">Enjoy</p>
                        <h1 className="text-white text-2xl">With</h1>
                        <h1 className="text-[rgba(234,234,234,0.38)] text-5xl font-bold">Earphone</h1>
                        <a href="" className="text-black px-6 py-2 bg-secondary rounded-full">Browse</a>
                    </div>
                    <img src={img1} alt="" className="h-64 w-15 absolute bottom-0 right-0"/>
                </div>
                {/*  */}
                <div className="w-[23%] h-[320px] flex bg-brandYellow rounded-2xl pl-4 py-10 relative">
                    <div className="flex flex-col items-start justify-end gap-2">
                        <p className="text-gray-50 ">Enjoy</p>
                        <h1 className="text-white text-2xl">With</h1>
                        <h1 className="text-[rgba(234,234,234,0.38)] text-5xl font-bold">Geaget</h1>
                        <a href="" className="text-brandYellow px-6 py-2 bg-white rounded-full">Browse</a>
                    </div>
                    <img src={img2} alt="" className=" absolute "/>
                </div>
                {/*  */}
                <div className="w-[49%] h-[320px] flex justify-between bg-secondary rounded-2xl pl-4 py-10">
                    <div className="flex flex-col items-start justify-end gap-2">
                        <p className="text-gray-50 ">Enjoy</p>
                        <h1 className="text-white text-2xl">With</h1>
                        <h1 className="text-[rgba(234,234,234,0.38)] text-5xl font-bold">Labtop</h1>
                        <a href="" className="text-secondary px-6 py-2 bg-white rounded-full">Browse</a>
                    </div>
                    <img src={img3} alt="" />
                </div>
                {/*  */}
            </div> 
            <div className="flex justify-between items-center py-6">
                {/*  */}
                <div className="w-[49%] h-[320px] flex justify-between bg-gray-300 rounded-2xl pl-4 py-10">
                    <div className="flex flex-col items-start justify-end gap-2">
                        <p className="text-gray-50 ">Enjoy</p>
                        <h1 className="text-white text-2xl">With</h1>
                        <h1 className="text-[rgba(252,252,252,0.75)] text-5xl font-bold">Labtop</h1>
                        <a href="" className="text-white px-6 py-2 bg-primary rounded-full">Browse</a>
                    </div>
                    <img src={img4} alt="" />
                </div>
                {/*  */}
                <div className="w-[23%] h-[320px] flex bg-brandGreen rounded-2xl pl-4 py-10 relative">
                    <div className="flex flex-col items-start gap-2">
                        <p className="text-gray-50 ">Enjoy</p>
                        <h1 className="text-white text-2xl">With</h1>
                        <h1 className="text-[rgba(234,234,234,0.38)] text-5xl font-bold">Earphone</h1>
                    </div>
                    <a href="" className="text-brandGreen px-6 py-2 bg-white rounded-full absolute z-40 mt-32">Browse</a>
                    <img src={img5} alt="" className="h-64 w-15 absolute z-10 bottom-0 right-[-20px]"/>
                </div>
                {/*  */}
                <div className="w-[23%] h-[320px] flex bg-brandBlue rounded-2xl pl-4 py-10 relative">
                    <div className="flex flex-col items-start gap-2">
                        <p className="text-gray-50 ">Enjoy</p>
                        <h1 className="text-white text-2xl">With</h1>
                        <h1 className="text-[rgba(234,234,234,0.38)] text-5xl font-bold">Geaget</h1>
                        <a href="" className="text-brandBlue px-6 py-2 bg-white rounded-full">Browse</a>
                    </div>
                    <img src={img6} alt="" className=" absolute right-0 bottom-0 h-48"/>
                </div>
                {/*  */}
            </div> 
        </div>
    )
}
export default ProductCategory;