import img from "../../assets/smartwatch.png"
import img2 from "../../assets/beat.png"
import img3 from "../../assets/beat1.png"
import img4 from "../../assets/earphone.png"
import img5 from "../../assets/jbl-wire.png"


const ShopProduct =()=>{
    const ProductList=[
        {
            category: "",
            Image: img,
            name: "Smart Watch",
            // description: "",
            price: 120,
        },
        {
            category: "",
            name: "Beat Solo",
            Image: img2,
            // description: "",
            price: 210,
        },
        {
            category: "",
            name: "Beat Solo 2",
            Image: img3,
            // description: "",
            price: 400,
        },
        {
            category: "",
            name: "Jbl",
            Image: img4,
            // description: "",
            price: 70,
        },
        {
            category: "",
            name: "Jbl koko",
            Image: img5,
            // description: "",
            price: 35,
        }
    ]   
    return (
        <div className="w-full my-8 bg-primary">
            <h1 className="text-[75px] ml-8">All Products</h1>
            <select name="" id="" className="bg-transparent ml-8">
                <option value="value1">Default sorting</option>
                <option value="value2">Sort by latest</option>
                <option value="value3">Sort by popularity</option>
            </select>
            <div className="w-full flex items-center justify-evenly flex-wrap py-4 gap-4">
                {ProductList.map((data, val) => (
                    <div className="w-[250px] min-h-[260px] relative bg-gray-100 rounded-xl overflow-hidden mb-4" key={val}>
                        <div className="group">
                            <img 
                                src={data.Image} 
                                alt={data.name} 
                                className="w-full h-[180px] bg-gray-300 object-contain hover:blur-sm" 
                            />
                            <div className="flex items-center justify-center">
                                <p className="hidden py-2 px-4 bg-secondary border group-hover:flex absolute cursor-pointer rounded-full">
                                    Add to cart
                                </p>
                            </div>
                        </div>
                        <div className="p-4">
                            <h1 className="text-lg text-black font-bold">{data.name}</h1>
                            <p className="text-sm font-bold">{data.price}$</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );    
};
export default ShopProduct;