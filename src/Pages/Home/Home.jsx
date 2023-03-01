import React from 'react';
import './Home.css';
import Banner from '../../Components/Banner/Banner'
import BannerHome from '../../img/banner_home.jpg'
import Grid from '../../Components/Grid/Grid';


const Home = () => {
    return ( 
        <>
        <Banner image={BannerHome} title="Chez vous, partout et ailleurs"/>
        <Grid />
        </>
     );
}
 
export default Home;