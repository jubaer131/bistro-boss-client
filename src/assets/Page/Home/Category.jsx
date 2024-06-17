import { Swiper, SwiperSlide } from "swiper/react";
import Sectiontitle from "../component/Sectiontitle";


import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const Category = () => {
    return (
        <section>
            <Sectiontitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            ></Sectiontitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/twfc94y/Rectangle-20170.png" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/93jcgSg/front-view-greece-salad-sliced-vegetable-salad-with-tomatoes-cucumbers-white-cheese-olives-inside-wh.jpg" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://i.ibb.co/twfc94y/Rectangle-20170.png' alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/twfc94y/Rectangle-20170.png" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/twfc94y/Rectangle-20170.png" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;