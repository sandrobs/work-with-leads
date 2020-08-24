import React, {InputHTMLAttributes} from 'react';
import {StyledButton} from './styles';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    name: string;
    text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return(
       <StyledButton id={props.name} type="submit">
           {props.text}
       </StyledButton>
    );
}

export default Button;