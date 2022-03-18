import { Ul } from "../../styled";

export default function OptionsList ({ options }) {
    return (
        <>
            {options?.length &&
                <Ul>
                    {options.map(option => (
                        <li key={option.property}>
                            <p><b>{option.property}:</b> {option.value}</p>
                        </li>
                    ))}
                </Ul>}
        </>
    );
}