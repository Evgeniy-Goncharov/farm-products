import { useEffect, useState } from 'react';
import Filter from '../../blocks/filter/filter';
import Order from '../../blocks/order/order';
import ProductsList from '../../blocks/products-list/products-list';
import { LeftColumn, PageGrid, RightColumn } from './styles';

export default function BuyPage ({ products }) {
    const [selectProductIds, setSelectProductIds] = useState([]);
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState(0);
    const selectProducts = selectProductIds.map(id => 
        products.find(item => item.id === id)
    );
    const canBuy = selectProducts.length && address.length;
    const [swiperRef, setSwiperRef] = useState(null);

    useEffect(() => setPrice(
        selectProducts.reduce((sum, current) => 
            sum + current.price, 0
    )),
    [selectProductIds]);

    const handleProductClick = (index, isChecked) => {
        if (!isChecked) {
            swiperRef.slideTo(index);
        }
    };

    const handleBuyClick = () => {
        alert(`
            Спасибо за покупку!
            Вы заказали: \n${selectProducts.map(product => `${product.name} - ${product.price} руб. \n`)}.
            Стоимость вашего заказа: ${price} руб.
            Ваш заказ будет доставлен по адресу: 
            ${address}.
        `)
    }

    return (products?.length ?
        (<PageGrid as='div'>
            <LeftColumn>
                <Filter 
                    products={products}
                    onChange={setSelectProductIds}
                    onClick={handleProductClick}
                    selectValues={selectProductIds}
                />
                <Order 
                    value={address}
                    onChange={setAddress}
                    price={price}
                    canBuy={canBuy}
                    onClick={handleBuyClick}
                />
            </LeftColumn>
            <RightColumn>
                <ProductsList onSwiper={setSwiperRef} products={products} />
            </RightColumn>
        </ PageGrid>) :
        <p>Продукты были слишком вкусные и их разобрали</p>
    )
}