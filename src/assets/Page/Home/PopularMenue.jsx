
import Sectiontitle from "../component/Sectiontitle";
import MenuItem from "../shard/MenuItem";
import usemanue from "../../../hooks/UseManue";



const PopularMenue = () => {

    const [manu] = usemanue()

    const popular = manu.filter(item => item.category === 'popular')
    // const [menu, setmenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularitems = data.filter(item => item.category === 'popular')
    //             setmenu(popularitems)
    //         })

    //     console.log(menu)

    // }, [])



    return (
        <section className="mb-12">
            <Sectiontitle
                heading='From our menue'
                subHeading='POpulat items'

            >
            </Sectiontitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        item={item}></MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopularMenue;