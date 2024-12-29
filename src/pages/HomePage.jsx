import FooterCom from "../components/FooterCom";
import HeaderCom from "../components/HeaderCom";
import HeroSection from "../components/Home/HeroSection"
import ProductCategory from "../components/Home/ProductCategory"
import ChooseUs from "../components/Home/ChooseUs"
import BennerSection from "../components/Home/BennerSection"
import HomeShowProduct from "../components/Home/HomeShowProduct"

const HomePage=()=>{
    return(
        <div>
            <div className="bg-gray-300">
                <HeaderCom />
            </div>
            <div className="w-[88%] m-auto">
                <HeroSection/>
                <ProductCategory/>
                <ChooseUs/>
                <BennerSection/>
                <HomeShowProduct/>
                <BennerSection/>
            </div>
            <div className="bg-gray-300">
                <FooterCom />
            </div>
        </div>
    )
}
export default HomePage;