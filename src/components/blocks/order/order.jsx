import { Form, Fieldset, Legend } from './../../styled';
import { Price, TextInput } from './styles';
import Button from './../../ui/button/button';

export default function Order ({
    value,
    onChange,
    price,
    canBuy,
    onClick
}) {
    return (
        <Form>
            <Fieldset>
                <Legend>Сделать заказ</Legend>
                <TextInput 
                    placeholder='Введите адрес доставки'
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />

                <p>
                    Цена
                    <Price>{price} руб.</Price>
                </p>
                <Button 
                    minWidth={314}
                    disabled={!canBuy}
                    onClick={onClick}
                >Купить</Button>
            </Fieldset>
        </Form>
    )
}