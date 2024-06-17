import { useForm } from "react-hook-form";
import Sectiontitle from "../component/Sectiontitle";
import { FaUtensils } from "react-icons/fa";
import UseaxiosPublic from "../../../hooks/UseaxiosPublic";
import Useaxioussecure from "../../../hooks/Useaxioussecure";
import Swal from "sweetalert2";




const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Additems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = UseaxiosPublic()
    const axiosSecure = Useaxioussecure()

    const onSubmit = async (data) => {

        // image upload to imgbb and then get an url
        const imagefile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imagefile, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        });
        console.log(res.data)
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };


    return (
        <div>
            <Sectiontitle heading={'Add items'} subHeading={'what is new'}></Sectiontitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipy  name?</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Racipy  name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full " />

                    </div>

                    <div className="flex gap-2">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Racipy  name?</span>
                            </label>
                            <select defaultValue='default' {...register("category", { required: true })} className="select select-bordered w-full ">
                                <option disabled value='default'>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>

                            </select>

                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe details</span>
                        </div>
                        <textarea   {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </div>
                    <div className=" my-6">
                        <input type="file"    {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add item <FaUtensils className="mr-4"></FaUtensils>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Additems;