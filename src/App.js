import React, { Component } from 'react';
import Country from './Components/Country';
import Box from '@mui/material/Box';
import AddCountry from './Components/AddCountry';
import './App.css';



class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', golds: 12, silvers: 3, bronzes: 1},
      { id: 2, name: 'China', golds: 2, silvers: 6, bronzes: 6},
      { id: 3, name: 'Russia', golds: 8, silvers: 4, bronzes: 2},
    ]
  }
  Delete = (id) => {
    const countries = this.state.countries.filter(w => w.id !== id);
    this.setState({ countries:countries });
  }

  handleAdd = (name) => { 
    const { countries } = this.state;
    const id = Math.floor(Math.random() * 10000);;
    const countriesTwo = countries.concat({ id: id, name: name, golds: 0, silvers: 0, bronzes: 0 });
    this.setState({ countries:countriesTwo });
  }

AddGolds = (locaterId) => {
    
    this.setState({ golds: this.state.countries.find(country => country.id === locaterId).golds += 1 })
}

RemoveGolds = (locaterId) => {

    if (this.state.countries.find(country => country.id === locaterId).golds >= 1) {
        this.setState({ golds: this.state.countries.find(country => country.id === locaterId).golds -= 1 })
    } else {
        alert("you cant have negitive medals")
    }

}

AddSilvers = (locaterId) => {
    this.setState({ silvers: this.state.countries.find(country => country.id === locaterId).silvers += 1 })
}

RemoveSilvers = (locaterId) => {
    if (this.state.countries.find(country => country.id === locaterId).silvers >= 1) {
        this.setState({ silvers: this.state.countries.find(country => country.id === locaterId).silvers -= 1 })
    } else {
        alert("you cant have negitive medals")
    }

}

AddBronzes = (locaterId) => {
    this.setState({ bronzes: this.state.countries.find(country => country.id === locaterId).bronzes += 1 })
}

RemoveBronzes = (locaterId) => {
    if (this.state.countries.find(country => country.id === locaterId).bronzes >= 1) {
        this.setState({ bronzes: this.state.countries.find(country => country.id === locaterId).bronzes -= 1 })
    } else {
        alert("you cant have negitive medals")
    }

}
  render() { 
    return ( 
      <div>

<Box
        sx={{
          display: "flex", justifyContent: "flex-center",
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
         <AddCountry onAdd={ this.handleAdd }/>

        { this.state.countries.map(indcountry => 
          
          <Country
            key={ indcountry.id } 
            country={ indcountry } 
            GAdd={this.AddGolds}
            SAdd={this.AddSilvers}
            BAdd={this.AddBronzes}
            GRemove={this.RemoveGolds}
            SRemove={this.RemoveSilvers}
            BRemove={this.RemoveBronzes}
            Delete={this.Delete}
             />
        )}
      </Box>
        
       
        
      </div>
     );
  }
}
 
export default App;