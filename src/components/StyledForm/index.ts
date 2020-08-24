import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: var(--color-background-container);
    border: none;
    border-radius: 0.8rem;
    min-height: 150px;
`;

const TitleRow = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    strong{
        font: 700 1.4rem Raleway;
        color: var(--color-label);
        margin-top: 1rem;
        margin-left: 1rem;
    }
`;

const ContentRow = styled.div`
    display:flex;
    width:100%;
    padding: 0px;
    @media(max-width: 450px) {
        flex-direction: column;
    }
`;

const ContentCell = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    
`;

const ReverseContentRow = styled.div`
    display:flex;
    width:100%;
    padding: 0px;
    @media(max-width: 450px) {
        flex-direction: column-reverse;
    }
`;

const SubmitContainer = styled.div`

    flex: 1;
    display: flex;
    justify-content: flex-end;
    button{
        margin-right: 15px !Important;
        margin-top: 1rem;
        @media(max-width: 450px) {
            flex:1;
            margin-left: 15px !Important;
        }
    }

    

`;

const BackContainer = styled.div`

    flex: 1;
    display: flex;
    
    a{
        margin-left: 15px !Important;
        @media(max-width: 450px) {
            flex:1;
            margin-right: 15px !Important;
        }
    }

`;

const FooterRow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-items: baseline;

`;

const ValidationError = styled.strong`

    font: 700 1rem Raleway;
    color: var(--color-error)

`;


export {StyledForm, TitleRow, ContentRow, ContentCell, ReverseContentRow, SubmitContainer, BackContainer, FooterRow, ValidationError};