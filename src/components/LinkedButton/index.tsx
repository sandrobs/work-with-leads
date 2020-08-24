import React from 'react';

import {LinkButton} from './styles';


interface ButtonLinkProps{
    to: string;
    text: string;
    primary: boolean;
}

const LinkedButton: React.FC<ButtonLinkProps> = (props) => {
    return(
        <LinkButton to={props.to} primary={props.primary}>
            {props.text}
        </LinkButton>
    );
}

export default LinkedButton;