import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpert = () => {
    //const categories = ['One', 'Two', 'Three']
    const [categories, setCategories] = useState(['Obama']);
    /*    const handleAdd  = ()=>{
           //setCategories([...categories,'Hunter'])
           setCategories(cats=>[...categories,"hunter"])
       }
   
    */
    return (
        <>
            <h2>GiftExpert</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GiftGrid 
                        key={category}
                        category={category} />
                    ))
                }
            </ol>
        </>
    )

}

export default GiftExpert;
