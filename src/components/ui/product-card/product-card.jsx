import { Card, 
    Image, 
    Content,
    Tab,
    TabList,
    Price
} from "./styles";
import Title, { TitleSize } from './../../ui/title/title';
import { useState } from "react";
import OptionsList from './../options-list/options-list';

export default function ProductCard ({ 
    product,
    product: { 
        name, 
        specifications,
        structure, 
        description,
        image,
        price,
        weight
    }
 }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabsList = [
        {
            title: 'Описание',
            content: description
        },
        {
            title: 'Характеристики',
            content: <OptionsList options={specifications}>{specifications}</OptionsList>
        },
        {
            title: 'Свойства',
            content: <OptionsList options={structure}>{structure}</OptionsList>
        },
    
    ]

    return (
        <Card>
            <Image 
                src={image} 
            />
            <div>
                <Title 
                    as='h2'
                    size={TitleSize.SMALL}
                >
                    {name}
                </Title>
                
                {tabsList?.length && 
                    <TabList $isGridList indent={8}>
                        {tabsList.map((tab, index) => (
                            <li key={index}>
                                <Tab 
                                    value={index}
                                    $isActive={activeTabIndex === index}
                                    onClick={() => setActiveTabIndex(index)}
                                >
                                    {tab.title}
                                </Tab>
                        </li>
                        ))}
                    </TabList>}
                    <Content>{tabsList[activeTabIndex].content}</Content>
                    {activeTabIndex === 0 && <Price>{price} руб. / {weight} гр.</Price>}
            </div>
        </Card>
    )
} 