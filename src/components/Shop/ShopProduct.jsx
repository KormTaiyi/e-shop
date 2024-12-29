import img from "../../assets/smartwatch.png"

const ShopProduct =()=>{   
    return(
        <div className="w-full my-8 bg-primary">
            <h1 className="text-[75px] ml-8">All Product</h1>
            <select name="" id="" selected className=" bg-transparent ml-8">
                <option value="value1">Default sorting</option>
                <option value="value2">Sort by latest</option>
                <option value="value3">Sort by popularity</option>
            </select>
            <div className="w-full flex items-center justify-evenly flex-wrap py-4 gap-4">
                <div className="w-[250px] min-h-[260px] relative bg-gray-100 rounded-xl overflow-hidden mb-4">
                    <div className="group">
                        <img src={img} alt="" className=" w-full h-[180px] bg-gray-300 object-contain hover:blur-sm"/>
                        <div className="flex items-center justify-center">
                            <p className="hidden py-2 px-4 bg-secondary border group-hover:flex absolute cursor-pointer rounded-full">Add to cart</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <h1 className="text-lg text-black font-bold">Smart Watch</h1>
                        <p className="text-sm font-bold text-">120$</p>
                    </div>
                </div>  
                {/*  */}
            </div>
        </div>
    )
}
export default ShopProduct;