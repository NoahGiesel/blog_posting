import React, {useState, useEffect } from 'react';  
 



function ItemDetail({ match }) {

    useEffect(() => { 
        //fetchItems();
    },[]);

    const [item, setItem ] = useState({})

   // const fetchItems = async () => { }

  return (
    <div>
        <h2> item details </h2>
    </div>
  );
}

export default ItemDetail;
