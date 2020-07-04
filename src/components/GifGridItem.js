import React from 'react'

export default function GifGridItem({img}) {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={img.img} alt={img.title}></img>
            <p> {img.title} </p>
        </div>
    )
}
