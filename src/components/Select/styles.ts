import styled from 'styled-components';

interface SelectProps{
    error:boolean;
}

const SelectBlock = styled.div`

    flex:1;
    display: flex;
    flex-direction:column;

`;

const StyledSelectLabel = styled.label`

    font-size:1.2rem;
    margin-top:0.5rem;
    margin-left:1rem;
`;

const StyledSelect = styled.select<SelectProps>`
    height: 2.3rem;
    background: var(--color-background-container);
    border-width: 1px;
    border-style: solid;
    border-radius: 0.5rem;
    border-color: ${ props => props.error ? "var(--color-error)" : "var(--color-input-border)"};
    outline: 0;
    padding: 0 0.5rem;
    margin-top: 0.3rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    font: 1rem Raleway;
    color: var(--color-input-text);
`;

export {SelectBlock, StyledSelectLabel, StyledSelect};