import CheckboxLabel from "../../ui/checkbox-label/checkbox-label";
import { FilterForm, LabelForCheckbox, StyledLi } from "./styles";
import { Ul, Fieldset, Legend } from '../../styled';

export default function Filter ({ 
    products,
    onChange,
    selectValues,
    onClick
}) {

    const handleChange = (value) => {
        const newValue = [...selectValues];
        const indexValue = newValue.indexOf(value);

        if (indexValue !== -1) {
            newValue.splice(indexValue, 1);
        } else {
            newValue.push(value);
        }

        onChange && onChange(newValue);
    }

    return (
        <FilterForm>
            <Fieldset>
                <Legend>Выберите продукты</Legend>
                <Ul>
                    {products.map(product => (
                        <StyledLi key={product.id}>
                            <CheckboxLabel 
                                text={product.name}
                                labelComponent={LabelForCheckbox}
                                onChange={handleChange}
                                onClick={onClick}
                                value={product.id}
                                name={product.name}
                                isChecked={selectValues.includes(product.id)}
                            />
                        </StyledLi>
                    ))}
                </Ul>
            </Fieldset>
        </FilterForm>
    )
};