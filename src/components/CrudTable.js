import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDatatoedit, deleteData }) => {
    return (
        <div>
      <h3>DATA TABLE</h3>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDatatoedit={setDatatoedit}
                deleteData={deleteData}
                
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    )
}

  export default CrudTable;