import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import {Register} from './components/Register'
const App=()=>{
    const companyName='pegasystems';
return <div>
    <Header title={companyName}/>
    
    <Register/>
    
    </div>;

};
export default App;