import react from 'react';
import Link from 'next/link';
import {urlFor} from '../lib/client';


const HeroBanner = ({heroBanner}) =>{
    return(
        <div className = "hero-banner-container">
            <div>
                <h1 className = "title">{heroBanner.smallText}</h1>
                <h3>{heroBanner.midText}</h3>
                <h2>{heroBanner.largeText1}</h2>
                <h2>{heroBanner.largeText2}</h2>
              
                <img src={urlFor(heroBanner.image)} alt="clothing" 
                className = "hero-banner-image" />
                <div>
                    <Link href= {`/product/${heroBanner.product}`}>
                        <button type="button"> {heroBanner.buttonText}</button>
                    </Link>
                    <div className="desc">
                    <h5>Description</h5>
                    <p>{heroBanner.desc}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroBanner