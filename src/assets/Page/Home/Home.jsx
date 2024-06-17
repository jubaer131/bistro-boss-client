import { Helmet } from "react-helmet-async";
import Carousal from "./Carousal";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenue from "./PopularMenue";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro-boss || Home</title>
            </Helmet>
            <Carousal></Carousal>
            <Category></Category>
            <PopularMenue></PopularMenue>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;