import styled from 'styled-components';


const StyledButton = styled.button`

    width: 8rem;
    height: 2.5rem;
    border-radius: 0.4rem;
    margin-right: 1.6rem;
    margin-bottom: 0.8rem;
    font: 700 1rem Raleway;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    color: var(--color-label);
    background-color:  var(--color-primary-button);
    border: none;
    cursor: pointer;
    outline:0;
`;

export {StyledButton};