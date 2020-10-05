import React from 'react';
import axios from 'axios';


export default class  Weather extends React.Component {

    componentDidMount() {
        const apiKey='ec7d0fcad25a0ade0cc1fb7d61dd869b';
        const queryWord='New York';
        axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${queryWord}`, {
            
          })
          .then(function (response) {
            console.log("Weather Page",response);
          })
          .catch(function (error) {
            console.log(error);
          })
          
    }

    
    render(){

    
        return (
            <div className="Login">
                <p>Weather Page</p>
                <div className="col-md-2"></div>
                <div className="col-md-8">

                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..."/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">Go!</button>
                            </span>
                        </div>
                    
                </div>

                <div className="col-md-2"></div>

            
            </div>
        );
  }
}


