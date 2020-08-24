import styled from 'styled-components';

import { TiPencil, TiTrash } from "react-icons/ti";


const EditIcon = styled(TiPencil)`

    heigth:25px;
    width:25px;
    color: var(--color-input-text);
    margin:0px;
    padding:0px;
    cursor:pointer;
    text-decoration:none;
`;

const DeleteIcon = styled(TiTrash)`

    heigth:25px;
    width:25px;
    color: var(--color-input-text);
    margin:0px;
    padding:0px;
    cursor:pointer;

`;

const GridView = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const TitleTr = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`;

const TitleTd = styled.div`
    flex: 1;

    strong{
        color: var(--color-title);
        font: 500 1rem Raleway;
    }

`;

const TitleTdOptional = styled.div`
    flex: 1;
    @media(max-width: 450px) {
        display: none;
    }
    strong{
        color: var(--color-title);
        font: 500 1rem Raleway;
    }
`;

const Tr = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom-style: solid;
    border-bottom-color: var(--color-background);
    border-bottom-width: 1px;
    background-color: var(--color-background-container);
    min-height: 35px;
    &:hover{
        background-color: var(--color-readonly);
    }
`;

const Td = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    span{
        display: block;
        color: var(--color-input-text);
        font: 500 1rem Raleway;
        word-wrap: break-word;
    }
`;

const TdOptional = styled.div`
    color: var(--color-title);
    font: 500 1rem Raleway;
    flex: 1;
    display: flex;
    align-items: center;

    @media(max-width: 450px) {
        display: none;
    }

    span{
        display: block;
        color: var(--color-input-text);
        font: 500 1rem Raleway;
        word-wrap: break-word !Important;
    }
`;

const TdOptions = styled.div`
    display: flex;
    align-items: center;
    min-width: 55px;
`;

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export {EditIcon, DeleteIcon, GridView, TitleTr, TitleTd, TitleTdOptional, Tr, Td, TdOptional, TdOptions, OptionsContainer};