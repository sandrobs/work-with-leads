import styled from 'styled-components';
import {Link} from 'react-router-dom';

interface LinkProps{
    primary:boolean;
}

const LinkButton = styled(Link)<LinkProps>`

    width: 8rem;
    height: 2.5rem;
    border-radius: 0.4rem;
    margin-right: 1.6rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font: 700 1rem Raleway;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    color: var(--color-label);
    background-color:  ${ props => props.primary ? "var(--color-primary-button)" : "var(--color-secondary-button)"};

`;

export {LinkButton};