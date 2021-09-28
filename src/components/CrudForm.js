import React, { useState, useEffect } from 'react';
 
 

const initialForm = {
    country: "",
    capital: "",
    id: null,
}

const CrudForm = ({createData, updateData, datatoedit, setDatatoedit}) => {
   const[form, setForm] = useState(initialForm)

   useEffect(() => {
    if(datatoedit){
        setForm(datatoedit)
    }else{
        setForm(initialForm)
    }
   },[datatoedit])


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.country || !form.capital){
            alert("Incomplete Data");
            return;
        }

        if(form.id === null){
            createData(form);
        }else {
            updateData(form);
        }

        handleReset()
    }

    const handleReset = (e) => {
        setForm(initialForm);
        setDatatoedit(null);
    }
  
    return (
        <div>
            <h3>{datatoedit ? "Edit" : "Add"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="country" placeholder="Country" onChange={handleChange} value={form.country} />
                <input type="text" name="capital" placeholder="Capital" onChange={handleChange} value={form.capital} />
                <input type="submit" value="submit" />
                <input type="reset" value="clear" onClick={handleReset} />
            </form>
        </div>
    )
}

export default CrudForm;