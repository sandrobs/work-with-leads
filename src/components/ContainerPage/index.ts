import styled from 'styled-components';

const ContainerPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    padding: 10px;
`;

const ContainerRow = styled.div`
    min-height: 50px;
`;

export {ContainerPage, PageContent, ContainerRow};