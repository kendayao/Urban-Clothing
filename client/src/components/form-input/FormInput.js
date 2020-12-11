import React from 'react';

import './FormInput.scss';

const FormInput=({handleChange, label, ...otherProps})=>{
    return(
        <div className='group'>
             {
            label ? <label className={`${otherProps.value.length? 'shrink' :''}form-input-label`}>{label}</label>:null
            }
        
            <input className='form-input' onChange={handleChange}{...otherProps}></input>
           
            
        </div>
        
       

    )



}

export default FormInput