import React, {SelectHTMLAttributes} from 'react';

import {SelectBlock, StyledSelectLabel, StyledSelect} from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    error: boolean;
    options: Array<{
        value:string;
        label:string
    }>;
}

const Select: React.FC<SelectProps> = ({ label,name,error,options, ...rest }) => {
    return(
        <SelectBlock>
            <StyledSelectLabel htmlFor={name}>{label}</StyledSelectLabel>
            <StyledSelect value="" id={name} {...rest} error={error}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </StyledSelect>
        </SelectBlock>
    );
}


export default Select;