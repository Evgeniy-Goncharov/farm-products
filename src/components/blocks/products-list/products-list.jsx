import ProductCard from "../../ui/product-card/product-card";
import { ProductSwiper } from "./styles";
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from 'swiper/core';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

SwiperCore.use([Mousewheel, Pagination, Scrollbar])

function ProductsList ({ products, onSwiper }) {
    return (
        products?.length ? (
            <ProductSwiper
                onSwiper={onSwiper}
                direction={"vertical"}
                freeMode
                spaceBetween={12}
                slidesPerView={'auto'}
                scrollbar={{draggable: true}}
                mousewheel
                pagination={{
                    type: 'fraction'
                }}
            >
                {products.map(product => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </ProductSwiper>
        ) : null
    );
};

export default ProductsList;