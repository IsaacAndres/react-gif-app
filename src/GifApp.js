import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Yakuza 0']);

    /* const handleAdd = () => {
        setCategories( ['Worms', ...categories] );
    } */

    return (
        <>
            <h2>Gif App</h2>  
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ul>
                {
                    categories.map( category => (
                         <GifGrid 
                            key={ category } 
                            category={ category } 
                         />
                    ))
                }
            </ul>

        </>
    )
}
