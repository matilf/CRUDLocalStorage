import React, {useState, useEffect} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';



const initialDB = [
    {
        id: 1,
        country: "Argentina",
        capital: "Buenos Aires",
    },
    {
        id: 2,
        country: "Brazil",
        capital: "Brasilia",
    },
    {
        id: 3,
        country: "Australia",
        capital: "Canberra",
    },
    {
        id: 4,
        country: "USA",
        capital: "Washington dc",
    },
    {
        id: 5,
        country: "Croatia",
        capital: "Zagreb",
    }
]



const CrudApp = () => {
const [db, setDb] = useState(initialDB);
const [datatoedit, setDatatoedit] = useState(null);

useEffect(() => {

    const dbStorage = JSON.parse(localStorage.getItem("db"))     
    setDb( dbStorage )

},[])  

useEffect(() => {

    localStorage.setItem("db",JSON.stringify(db))     

},[ db ])


const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data])
};

const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data:el));
    setDb(newData);
};


const deleteData = (id) => {
let isDelete = window.confirm(`¿Are you sure you want to delete the data with the id '${id}'?`)

if(isDelete){
let newData = db.filter(el => el.id !== id)
setDb(newData)
}else{
    return;
}
};

    return (
        <div>
      <h3>CRUD</h3>
      <CrudForm 
      createData={createData}
       updateData={updateData} 
       datatoedit={datatoedit} 
       setDatatoedit={setDatatoedit}
       />
      <CrudTable 
      data={db}  
      setDatatoedit={setDatatoedit} 
      deleteData={deleteData}
      />
        </div>
    )
}


export default CrudApp;