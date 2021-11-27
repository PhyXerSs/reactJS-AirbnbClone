import './Home.css';
import React from 'react';
import Banner from './Banner';
import Card from './Card'
function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="home-section">
                <Card
                    src="/picture/onlineExCard.webp"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card
                    src="/picture/UniqueStaysCard.webp"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src="/picture/EntireCard.webp"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className="home-section">
                <Card
                    src="/picture/Bournemouth.webp"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price="£130/night"
                />
                <Card
                    src="/picture/Penthouse.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="£350/night"
                />
                <Card
                    src="/picture/apartment.webp"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="£70/night"
                />
            </div>
        </div>
    )
}

export default Home
