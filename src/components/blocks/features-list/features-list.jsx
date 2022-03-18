import { List, FeaturesSection } from "./styles";
import Title from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const";

export default function FeaturesList ({features}) {
    return features?.length ? (
        <FeaturesSection>
            <Title as="h2">Почему фермерские продукты лучше?</Title>
            <List $isGridList>
                {features.map((feature) => (
                    <li key={feature.id}>
                        <FeatureCard {...feature} />
                    </li>
                ))}
            </List>
            <Button link={AppRoute.BUY}>Купить</Button>            
        </FeaturesSection>
    ) : null;
};