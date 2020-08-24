import React, {InputHTMLAttributes} from 'react';
import {InputBlock, StyledLabel, StyledMaskedInput} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type?: string;
    disabled?:boolean;
    error:boolean;
}

const MaskedInput: React.FC<InputProps> = ({ label,name, type, disabled, error, ...rest }) => {
    return(
        <InputBlock>
            <StyledLabel htmlFor={name} >{label}</StyledLabel>
            <StyledMaskedInput id={name} type={type} disabled={disabled} {...rest} error={error} mask="999.999.999-99" />
        </InputBlock>
    );
}

export default MaskedInput;