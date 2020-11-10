import React from 'react'

export const GifGridItem = ( { id, title, url} ) => {

    return (
        <div className="card animate__animated  animate__pulse">
            <a target="new" href={ url } >
                <img src={ url } alt={ title } />
                <p>{ title }</p>
            </a>
        </div>
    )
}
