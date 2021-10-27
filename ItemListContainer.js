import React, {useEffect, useState} from "react";
import itemList from './Item'
import data from '../../data/data'

const ItemListContainer = (props) => {
    const [productos, SetProductos]= useState([])
    const [loading, SetLoading]= useState(true)

   useEffect (() => {
        const ListaDeProductos=new Promise((res,rej)=> {
            setTimeout(()=>{
                res(data);
            }, 3000)
      })

      listaDeProductos.then((data)=> {
          setProductos(data);
          setLoading(false);
      })
    },[])

    return ( 
    <div>
        {props.titulo}
        {loading ? <p>Loading products</p>: <p>Ready</p>} 
    </div>
    
    )
  }

  export default ItemListContainer;