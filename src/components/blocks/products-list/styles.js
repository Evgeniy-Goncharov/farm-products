import styled from 'styled-components';
import {Swiper} from 'swiper/react';
import 'swiper/css';

export const StyledLi = styled.li`
    border: 1px solid ${props => props.theme.colorForBorder};

    &:not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const ProductSwiper = styled(Swiper)`
    position: absolute;
    top: 0;
    bottom: 0;

    .swiper-pagination {
        display: none;
    }

    .swiper-slide {
        flex-shrink: 1;
    }
`;