import { MouseEvent, ReactNode } from "react";
import './button.scss';

type ButtonProps = {
    children: ReactNode,
    type?: 'invisible',
    styleClass?: string,
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, styleClass = '', type, onClick }: ButtonProps) => {
    return (
        <button type="button" className={`${type} ${styleClass}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
