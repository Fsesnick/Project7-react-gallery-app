import React, {Component} from 'react';
import { BrowserRouter,Route, Switch} from 'react-router-dom';

import apiKey from './config';
import './App.css';
import axios from 'axios';

import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
import Notfound from './components/Notfound';

class App extends Component{

  constructor(){
    super();
    
    this.state ={
      imgs: [],
      clouds:[],
      garden:[],
      sunset:[],
      loading:true,
      query: ''
    };
  }

  // Fetch the data from the Flickr API using Axios.
 componentDidMount() {

    this.performSearch();
    //limit the number of results to 24 using the per_page argument.
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=clouds&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        clouds: res.data.photos.photo,
        loading:false
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=garden&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        garden: res.data.photos.photo
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunset&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        sunset: res.data.photos.photo
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });    
  }

  //Default Search query = nature
  performSearch = (query = 'nature') => { 

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          imgs: res.data.photos.photo,
          query: query
        });
      })
      .catch(err => {
        console.log('Error fetching and parsing data', err);
      })
  }
/**
 * 
 * My app returns 3 default topic links that return a list of photos Clouds, Garden and Sunset
 */
  render(){
  //console.log(this.state.sunset);
    return (    
      <BrowserRouter>
        <div className="container">
        <SearchForm onSearch={this.performSearch} />
          <Nav/>
          <div className="photo-container">
          <Switch>
            <Route exact path= "/" render={ () => <PhotoContainer data={this.state.imgs} title={this.state.query}/>} />
            <Route exact path= "/search/:query" render={ () => <PhotoContainer data={this.state.imgs} title={this.state.query} onSearch={this.performSearch}/> }/>          
            <Route exact path= "/clouds" render={ () => <PhotoContainer data={this.state.clouds} onClick={this.state.clouds} title="Clouds"/>} />
            <Route exact path= "/garden" render={ () => <PhotoContainer data={this.state.garden} onClick={this.state.garden} title="Garden"/>} />
            <Route exact path= "/sunset" render={ () => <PhotoContainer data={this.state.sunset} onClick={this.state.sunset} title="Sunset"/> } />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );

}
}

export default App;
