import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api'

import coronaImage from './images/images.png';

class App extends Component{

    state ={
        data:{},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data : fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data : fetchedData, country: country })
        //fetch data
        //set the state
    }  
    
    render(){
        const { data ,country } = this.state;
        return(
            <div>
            <Helmet>
                <title>COVID-19</title>
            </Helmet>
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
            </div>
        )
    }
}

export default App;