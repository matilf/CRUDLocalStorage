import React from 'react';

const CrudTableRow = ({el, setDatatoedit, deleteData}) => {
    let {country, capital, id}= el;
    return (
        
            <tr>
                <td>{country}</td>
                <td>{capital}</td>
                <td>
                    <button onClick={() => setDatatoedit(el)}>Edit</button>
                    <button onClick={() => deleteData(id)}>Delete</button>
                </td>
            </tr>


     
    )
}

export default CrudTableRow;