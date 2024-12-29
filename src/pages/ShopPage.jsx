import FooterCom from "../components/FooterCom";
import HeaderCom from "../components/HeaderCom";
import ShopProduct from "../components/Shop/ShopProduct";

const ShopPage=()=>{
    return(
        <div>
            <div className="bg-gray-300">
                <HeaderCom />
            </div>
            <div className="w-[88%] m-auto">
                <ShopProduct/>
            </div>
            <div className="bg-gray-300">
                <FooterCom />
            </div>
        </div>
    )
}
export default ShopPage;