import { useLoaderData } from "react-router-dom";
import Donations from "../../Component/Donations/Donations";
import Banner from "../../Component/Header/Banner/Banner";


const Home = () => {

    const donations = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <div className="flex justify-center items-center">
            <Donations donations={donations}></Donations>
            </div>
            
            
        </div>
    );
};

export default Home;