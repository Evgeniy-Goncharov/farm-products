import { StyledButton } from "./styles";

export default function Button ({ 
                                    link, 
                                    children, 
                                    minWidth, 
                                    className,
                                    onClick,
                                    disabled,
                                    ...props
                                }) {
    return (
        <>
            <StyledButton
                {...props}
                $minWidth={minWidth} 
                $disabled={disabled}
                onClick={() => onClick && onClick()}
                {...(link ? {to: link} : { as: 'button', onClick, type: 'button' })} 
                className={className}
            >
                {children}
            </StyledButton>
        </>
    )
}