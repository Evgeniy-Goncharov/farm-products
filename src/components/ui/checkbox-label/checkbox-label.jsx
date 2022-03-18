import VisuallyHiddenInput from "../../styled/visually-hidden-input/visually-hidden-input";
import { Label } from "./styles";

export default function CheckboxLabel ({ 
    text, 
    labelComponent,
    name,
    onChange,
    value,
    isChecked,
    onClick
}) {
    const LabelComponent = labelComponent;

    return (
        <Label
            onClick={(e) => onClick(e.target.value, isChecked)}
        >
            <VisuallyHiddenInput 
                name={name}
                value={value}
                type='checkbox'
                onChange={() => onChange(value)}
                checked={isChecked}
            />
            {text}
            {LabelComponent && <LabelComponent $isChecked={isChecked} />}
        </Label>
    )
}