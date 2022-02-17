import React, { useState,useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Form from"./crudform"
import Table from "./table"
const initialDb=[
  {id:1,name:"seya",constelacion:"pegaso",}
  ,{id:2,name:"Shiriu",constelacion:"dragon",}
  ,{id:3,name:"hyoga",constelacion:"cisne",}
  ,{id:4,name:"Shun",constelacion:"andromeda",}
  ,{id:5,name:"iky",constelacion:"fenix",}];
function CrudApi() {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
 
 
let api=helpHttp();
let url="http://localhost:5000/santos";

 useEffect(() => {
   api.get(url).then((res)=>{
    //{console.log(res)
    if (!res.err) {
      setDb(res)
    }else{
      setDb(null)
    }
 })
   
 }, []);


 
  const createData=(data)=>{
    data.id=Date.now();
    setDb([...db,data])
    console.log(data)
  };
  const updateData=(data)=>{

  let newData=db.map(el=>el.id===data.id?data:el)
  setDb(newData)
  };
  const deleteData=(id,el)=>{
    const isDelete =window.confirm(`estas segurpo de eliminar a el caballero ${el.name} con el id ${id}`)
  
  if (isDelete){
   let newData=db.filter(el=>el.id!=id);
   setDb(newData)
  }else{
    return;
  }
  };
   
  return ( 
    <div>
    <h1>Crud Api</h1>
    <article className="grid-1-2">
    <Form createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
    <Table data={db} 
    setDataToEdit={setDataToEdit}
    deleteData={deleteData}/>
    </article>
    </div>
   );
}

export default CrudApi ;