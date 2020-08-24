import React, { useState, useCallback, useEffect, FormEvent } from 'react';
/*import { useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';*/
import {useParams, useHistory} from "react-router-dom";
import alertify from 'alertifyjs';

import PageHeader from '../../components/PageHeader';
import {ContainerPage, PageContent} from '../../components/ContainerPage';
import {StyledForm, TitleRow, ContentRow, ContentCell, ReverseContentRow, SubmitContainer, BackContainer, ValidationError} from '../../components/StyledForm';
import Input from '../../components/Input';
import MaskedInput from '../../components/MaskedInput';
import LinkedButton from '../../components/LinkedButton';
import Button from '../../components/Button';
import Select from '../../components/Select';
import api from '../../services/api';
import { string } from 'yup';
import { stringify } from 'querystring';

const LeadForm = () => {

    const { id } = useParams();

    const history = useHistory();

    interface Lead{
        id:number;
        nome:string;
        email:string;
        cpf:string;
        estadoCivil:string;
        nomeConjugue?:string;
    }

    interface MaritalStatus{
        nomeEstadoCivil:string;
    }

    const [statusList, setStatusList] = useState([]);
    const [lead, setLead] = useState<Lead>({
        id:0,
        nome:"",
        email:"",
        cpf:"",
        estadoCivil:"",
        nomeConjugue:"",
    });
    /*const [lead, setLead] = useState([]);*/
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [statusCivil, setStatusCivil] = useState('');
    const [spouse, setSpouse] = useState('');

    const [spouseActive, setSpouseInactive] = useState(true);

    /* controle do disable do field spose*/ 
    function handleSpouseDisable(){

        if (statusCivil === 'Casado(a)'){
            setSpouseInactive(false);
        } else {
            setSpouseInactive(true);
            setSpouse('');
        }
    }

    useEffect(() =>{handleSpouseDisable();},[statusCivil]);

    const getLead = useCallback( () => {
        (async function(){
            
            if (id !=='0'){
                let params: {id: number} = {id};
    
                const response = await api.get('leads', {
                    params
                });
        
                setLead(response.data[0]);

                const { nome, email, cpf, estadoCivil, nomeConjugue} = response.data[0];
                setName(nome);
                setCpf(cpf);
                setEmail(email);
                setStatusCivil(estadoCivil);
                setSpouse(nomeConjugue);
            }

        })();
    },[id]);

    const getStatusList = useCallback( () => {
        (async function(){
            let params: {} = {}
    
            const response = await api.get('tiposEstadoCivil', {
                params
            });
    
            setStatusList(response.data);
        })();
    },[]);

    useEffect(() => { getStatusList(); getLead();}, [getLead, getStatusList]);

     function submitLead(e: FormEvent){
        e.preventDefault();
        
        try {
            
            let isValid = dataValidation();
            
            if (isValid){ //se nao tem erros, consome api
                if (id !== '0'){
                    api.put(`leads/${id}`,{
                        nome:name,
                        email,
                        cpf,
                        estadoCivil:statusCivil,
                        nomeConjugue:spouse,
                    }).then(() => {
                        
                        alert('Record updated successfully!');
                        history.push('/');
            
                    }).catch(() => {
                        alert('Update error!');
                        
                    })
                } else{
                    api.post('leads',{
                        nome:name,
                        email,
                        cpf,
                        estadoCivil:statusCivil,
                        nomeConjugue:spouse,
                    }).then(() => {
                        
                        alert('Successful registration!');
                        history.push('/');
            
                    }).catch(() => {
                        alert('Registration error!');
                        
                    })
                }
            }
            

        } catch (err) {
            console.error('Registration error', err)
        }

    }

    function dataValidation(){

        let isValid = true;

        if(name === ''){
            isValid = false;
            handleNotification('Name is required!');
        }

        if(cpf === ''){
            isValid = false;
            handleNotification('CPF is required!');
        }

        if(email === ''){
            isValid = false;
            handleNotification('Email is required!');
        }

        if(statusCivil === ''){
            isValid = false;
            handleNotification('Marital Status is required!');
        }

        if(spouse === '' && statusCivil==='Casado(a)'){
            isValid = false;
            handleNotification('Spouse name is required!');
        }

        return isValid

    }

    function handleNotification(msg: string) {
        
        let noticacao = alertify.notify(msg, 'error', 5);
    }

    return(
        <ContainerPage>
            <PageContent>
                <PageHeader title="Lead Registration" />

                <StyledForm onSubmit={submitLead}>
                    <TitleRow>
                        <strong>Lead</strong>
                    </TitleRow>
                    <ContentRow>
                        <ContentCell>
                            <Input 
                                name="nome"
                                label="Name"
                                type="text"
                                disabled={false}
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                                error={false}    
                            />
                            
                        </ContentCell>
                        <ContentCell>
                            <MaskedInput 
                            name="cpf"
                            label="CPF"
                            type="text"
                            disabled={false}
                            value={cpf}
                            onChange={(e) => {setCpf(e.target.value)}}
                            error={false} 
                            />
                        </ContentCell>
                    </ContentRow>
                    <ContentRow>
                        <ContentCell>
                            <Input 
                                name="email"
                                label="Email"
                                type="text"
                                disabled={false}
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                                error={false} 
                            />
                        </ContentCell>
                        <ContentCell>
                            <Select 
                                name="estadoCivil"
                                label="Marital status"
                                
                                options={statusList.map((ms: MaritalStatus) => (
                                    {value: ms.nomeEstadoCivil, label: ms.nomeEstadoCivil}
                                ))}
                                
                                value={statusCivil}
                                onChange={(e) => {setStatusCivil(e.target.value);}}
                                error={false} 
                                >
                            </Select>

                        </ContentCell>
                    </ContentRow>
                    <ContentRow>
                        <ContentCell>
                            <Input 
                                name="nomeConjugue"
                                label="Spouse name"
                                type="text"
                                disabled={spouseActive}
                                value={spouse}
                                onChange={(e) => {setSpouse(e.target.value)}}
                                error={false} 
                            />
                        </ContentCell>
                        <ContentCell>
                            
                        </ContentCell>
                    </ContentRow>
                    <ReverseContentRow>
                        <BackContainer>
                            <LinkedButton to="/" text="Back" primary={false} />
                        </BackContainer>
                        <SubmitContainer>
                            <Button name="register" text="Register"/>
                        </SubmitContainer>
                    </ReverseContentRow>
                </StyledForm>

            </PageContent>
        </ContainerPage>
    );
}

export default LeadForm;