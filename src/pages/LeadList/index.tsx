import React, { useState, FormEvent, useEffect, useCallback } from 'react';

import {Link} from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import LinkedButton from '../../components/LinkedButton';
import Input from '../../components/Input';
import MaskedInput from '../../components/MaskedInput';
import {ContainerPage, PageContent, ContainerRow} from '../../components/ContainerPage';
import {StyledForm, TitleRow, ContentRow, ContentCell, FooterRow} from '../../components/StyledForm';
import Button from '../../components/Button';
import {EditIcon, DeleteIcon, GridView, TitleTr, TitleTd, TitleTdOptional, Tr, Td, TdOptional, TdOptions, OptionsContainer} from '../../components/DataView';
import api from '../../services/api';

interface Lead{
    id:number;
    nome:string;
    email:string;
    cpf:string;
}

function LeadList(){

    const [leads, setLeads] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');

    function handleSearchLeads( e: FormEvent){
        e.preventDefault();
        getLeads();
    }

    async function handleDelete(id:number){
        const { status } = await api.delete(`leads/${id}`);

        if (status === 200){
            alert('Record successfully deleted!');
            getLeads();
        } else{
            alert('Failed to delete the record!');
        }

    }

    const getLeads = useCallback( () => {
        (async function(){
            let params: {nome_like?: string, cpf?:string} = {}

            if (name){
                params.nome_like=name;
            }
    
            if(cpf){
                params.cpf=cpf;
            }
    
            const response = await api.get('leads', {
                params
            });
    
            setLeads(response.data);
        })();
    },[name,cpf]);

    useEffect(getLeads, []);

    return(
        <ContainerPage>
            <PageContent>
                
                <PageHeader title="Search Leads" />

                <StyledForm onSubmit={handleSearchLeads}>
                    <TitleRow>
                        <strong>
                            Filters
                        </strong>
                    </TitleRow>
                    <ContentRow>
                        <ContentCell>
                        <Input 
                            name="name"
                            label="Name"
                            type="text"
                            onChange={(e) => { setName(e.target.value)}}
                            disabled={false}
                            error={false}
                        />
                        </ContentCell>
                        <ContentCell>
                            <MaskedInput 
                                name="cpf"
                                label="CPF"
                                type="text"
                                onChange={(e) => { setCPF(e.target.value)}}
                                disabled={false}
                                error={false}
                            />
                        </ContentCell>
                    </ContentRow>
                    <FooterRow>
                        <Button name="filter" text="Filter"/>
                    </FooterRow>
                </StyledForm>
                <ContainerRow>
                    <LinkedButton to="/lead-form/0" text="New Lead" primary={true} />
                </ContainerRow>
                <ContainerRow>
                    
                    <GridView>
                        <TitleTr> {/*Linha de titulo*/}
                            <TdOptions>

                            </TdOptions>
                            <TitleTdOptional>
                                <strong>Email</strong>
                            </TitleTdOptional>
                            <TitleTd>
                                <strong>Name</strong>
                            </TitleTd>
                            <TitleTd>
                                <strong>CPF</strong>
                            </TitleTd>
                        </TitleTr>
                        {leads.map((lead: Lead) => {
                            return(
                                <Tr key={lead.id}> {/*Linha contendo os dados do registro*/}
                                    <TdOptions>
                                        <OptionsContainer>
                                            <Link to={`/lead-form/${lead.id}`}>
                                                <EditIcon />
                                            </Link>
                                        
                                            <DeleteIcon
                                                onClick={() => { handleDelete(lead.id); }}
                                             />

                                        </OptionsContainer>
                                    </TdOptions>
                                    <TdOptional>
                                        <span>{lead.email}</span>
                                    </TdOptional>
                                    <Td>
                                        <span>{lead.nome}</span>
                                    </Td>
                                    <Td>
                                        <span>{lead.cpf}</span>
                                    </Td>
                                </Tr>
                            )})

                        }
                    </GridView>

                </ContainerRow>
            </PageContent>
        </ContainerPage>
    );
}

export default LeadList;