import './Banner.css'
import React, { useState} from 'react'
import { Button } from '@mui/material'
import SearchDatePicker from './SearchDatePicker';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();
    const [showSearch,setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner-search">
                {showSearch && <SearchDatePicker/>}
                <Button onClick={()=>{setShowSearch(!showSearch)}}
                variant="outlined" className="banner-searchButton">
                    {showSearch? "Hide" : "Search Dates"}
                </Button>   
            </div>
            <div className="banner-info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button variant="outlined" 
                    onClick={()=>navigate('/search')}
                >Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
