import React, {InputHTMLAttributes} from 'react';

import {InputBlock, StyledLabel, StyledInput} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type?: string;
    disabled?:boolean;
    error?:boolean;
}


const Input: React.FC<InputProps> = ({ label,name, type, disabled, error, ...rest }) => {
    return(
        <InputBlock>
            <StyledLabel htmlFor={name} >{label}</StyledLabel>
            <StyledInput id={name} type={type} disabled={disabled} error={error} {...rest} />
        </InputBlock>
    );
}

export default Input;