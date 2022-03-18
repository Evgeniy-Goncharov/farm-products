import Title, { TitleSize } from "../title/title";
import { Card, CardHeader, FeatureImage } from "./styles";
import FeatureIcon from "../feature-icon/feature-icon";

export default function StarCard ({
    title,
    content,
    isNegative,
    owner,
    image
}) {
    return (
        <Card style={{backgroundColor: (isNegative ? '#F8DDD7' : '#E1EDCE')}}>
            <CardHeader>
                <FeatureImage 
                    src={image}
                    width={56}
                    height={56}
                    alt="изображение преимущества"
                />
                <div>
                    <FeatureIcon owner={owner} isNegative={isNegative} />
                    <Title size={TitleSize.EXTRA_SMALL} as="h3">{title}</Title>
                </div>
            </CardHeader>
            <p dangerouslySetInnerHTML={{ __html: content }}/>
        </Card>
    )
}