import { Icon } from "./styles";

export const features = {
    FARM: 'farm',
}

export default function FeatureIcon ( { owner, isNegative }) {

    return (
        <Icon $isNegative={isNegative}>
            {owner}
        </Icon>
    );
}