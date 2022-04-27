import React, { useState } from 'react'
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';

export const GiftExpertApp = () => {

const [categories, setCategories] = useState(['One Piece']);

 /* const handleAdd = () =>{

    //setCategories(['HunterxHunter', ...categories ]); 
    setCategories( categs => [...categs, 'HunterxHunter'] ); 
}  */

  return (
    <>
        <h2>Pagina de Gifs</h2>
        <AddCategory setCategories ={ setCategories }/>
        <hr />
        
        <ol>

            {
                categories.map(category => (
                    <GifGrid
                     key={ category }
                     category = { category }   
                     />
                ))
            }

        </ol>
    </>
  )
}
