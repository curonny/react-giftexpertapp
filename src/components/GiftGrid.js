import React, { useEffect, useState } from 'react';
import { getGift } from '../helpers/getGift';
import GiftGridItem from './GiftGridItem';


export const GiftGrid = ({ category }) => {

    const [images, setImages] = useState([])
    useEffect(() => {
        getGift(category)
            .then(setImages);
    }, [category])

    return (
        <>
            <h3>
                {category}
            </h3>
            <div className="card-grid">

                {
                    images.map(img => (
                        <GiftGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>

        </>
    )
}

export default GiftGrid;

