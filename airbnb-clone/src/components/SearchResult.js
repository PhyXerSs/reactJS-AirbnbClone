import './SearchResult.css'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';


function SearchResult(props) {
    const { img , location , title , description , star , price , total } = props;

    return (
        <div className="searchResult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="searchResult-heart"/>
            <div className="searchResult-info">
                <div className="searchResult-info-top">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult-info-bottom">
                    <div className="searchResult-stars">
                        <StarIcon className="searchResult-star"/>
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResult-price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
