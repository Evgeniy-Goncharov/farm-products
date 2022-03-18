import Title, { TitleSize } from "../../ui/title/title";
import { AboutSection, Text } from "./styles";

export default function About() {
    return (
        <AboutSection>
            <Title size={TitleSize.BIG}>
                Магазин фермерских продуктов с доставкой
            </Title>
            <Text>
                Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
            </Text>
        </AboutSection>
    )
};