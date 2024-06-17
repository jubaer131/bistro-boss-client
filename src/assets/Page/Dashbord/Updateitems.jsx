import { useLoaderData } from "react-router-dom";
import Sectiontitle from "../component/Sectiontitle";


const Updateitems = () => {

    const item = useLoaderData()
    console.log(item)


    return (
        <div>
            <Sectiontitle heading={'Update items'} subHeading={'Update info'}></Sectiontitle>
        </div>
    );
};

export default Updateitems;