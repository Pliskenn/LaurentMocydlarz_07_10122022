import React from 'react';
import './Home.css';
import Banner from '../../Components/Banner/Banner'
import Grid from '../../Components/Grid/Grid';

const Home = () => {
    return ( 
        <>
        <Banner title="Chez vous, partout et ailleurs"/>
        <Grid />
        </>
     );
}
 
export default Home;