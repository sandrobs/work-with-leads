import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import LeadList from './pages/LeadList'
import LeadForm from './pages/LeadForm'

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={LeadList} />
            <Route path="/lead-form/:id" component={LeadForm} />
        </BrowserRouter>
    );
}

export default Routes;