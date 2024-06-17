import { Helmet } from "react-helmet-async";
import usemanue from "../../../../hooks/UseManue";
import ManuCategory from "../manuCategory/ManuCategory";
import Cover from "../Cover";
import image from "../manu/featured.jpg"

const Manu = () => {

    const [menu] = usemanue();
   
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title> Bistro-boss | manu </title>
            </Helmet>
            <Cover img={image} title={'Our manu'}></Cover>

            <ManuCategory subHeading="Don't Miss" heading="Today's Offer"></ManuCategory>
            {/* offered menu items */}
            <ManuCategory items={offered}></ManuCategory>
            {/* dessert menu items  */}
            <ManuCategory items={desserts} title="dessert" img="https://i.ibb.co/ns7pzcX/side-view-chicken-ragout-fried-chicken-drumstick-with-onion-bell-pepper-greens-table.jpg"></ManuCategory>
            <ManuCategory items={pizza} title={"pizza"} img="https://i.ibb.co/ns7pzcX/side-view-chicken-ragout-fried-chicken-drumstick-with-onion-bell-pepper-greens-table.jpg"></ManuCategory>
            <ManuCategory items={salad} title={"salad"} img="https://i.ibb.co/ns7pzcX/side-view-chicken-ragout-fried-chicken-drumstick-with-onion-bell-pepper-greens-table.jpg"></ManuCategory>
            <ManuCategory items={soup} title={"soup"} img="https://i.ibb.co/ns7pzcX/side-view-chicken-ragout-fried-chicken-drumstick-with-onion-bell-pepper-greens-table.jpg"></ManuCategory>
        </div>
    );
};

export default Manu;