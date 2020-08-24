import React from 'react';
//import './styles.css'

import {Header, LogoContainer, ImageLogo, HeaderContent} from './styles';

interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(

        <Header>
            <LogoContainer>
                <ImageLogo src="https://acerta-sistema-dev.web.app/static/media/logo.7fdc93a9.svg" alt="Logo ACERTA!" />
            </LogoContainer>
            <HeaderContent>
                <strong>{props.title}</strong>
            </HeaderContent>
        </Header>

    );
}

export default PageHeader;