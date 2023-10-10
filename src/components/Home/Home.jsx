import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import DataCard from "./DataCard";
import Extra from "../../Pages/Extra";


const Home = () => {
    const dataS = useLoaderData();
    console.log(dataS);
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <h3 className="text-sm mt-4 md:text-4xl font-medium text-center">Services</h3>
            <div className="containe mx-aut px-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 my-10">
                {
                  dataS.map(data => <DataCard key={data.id} data={data}></DataCard>)  
                }
            </div>
            <div>
                <Extra></Extra>
            </div>
        </div>
    );
};

export default Home;