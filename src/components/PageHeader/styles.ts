import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`;

const LogoContainer = styled.div`
    margin-bottom: 2rem;
`;

const ImageLogo = styled.img`
    height: 3rem;
    @media(max-width: 450px) {
        height: 1.8rem;;
    }
`;

const HeaderContent = styled.div`
    margin-bottom: 1.5rem;
    strong {
        font: 500 1.6rem Raleway;
        color: var(--color-title);
        
    }
`;

export {Header, LogoContainer, ImageLogo, HeaderContent}