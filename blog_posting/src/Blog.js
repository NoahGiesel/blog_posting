import React, {useState, useEffect } from 'react';  
import {Link} from "react-router-dom";



function Blog() {

    useEffect(() => { 
        fetchItems();
    },[]);

    const [items, setItems ] = useState([])

    const fetchItems = async () => {
        const data = await  fetch("./blog_post_files.json");
        const items = await data.json() ;  
        console.log(items)
        setItems(items.items);
    }

  return (
    <div>
        {items.map(item => ( 
            <h1 key={item.itemid}>
                <Link to={`/blog/${item.itemid}`}>{item.name}</Link>
            </h1>
        ))}
    </div>
  );
}

export default Blog;
