import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Withdraw from './components/Withdraw/Withdraw';
import Balance from './components/Balance/Balance.js';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import './App.css';
import Cardlist from './components/Landing/Cardlist.js';
import Scroll from './components/Landing/Scroll.js';
import SearchBar from './components/Landing/Searchbar.js';


const particlesOptions = {
  
    particles: {
      number: {
        value: 60, 
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  
}

const initialState = {
  
    nameInput: '',
    balanceInput: '',
    withdrawInput: '',
    route: 'landing',
    isSignedIn: false,

    user: {
          id: '',
          name: '',
          email: '',
          balance: 0,
          joined: ''
    },

    searchResult: []
  
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      nameInput: '',
      balanceInput: '',
      withdrawInput:'',
      route: 'landing',
      isSignedIn: false,

      user: {
            id: '',
            name: '',
            email: '',
            balance: 0,
            joined: ''
      },
      searchResult: []
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      balance: data.balance,
      joined: data.joined  
    }})
  }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  onNameInputChange = (event) => {
    this.setState({nameInput: event.target.value});
  }

  onBalanceInputChange = (event) => {
    this.setState({balanceInput: event.target.value});
  }

  onWithdrawInputChange = (event) => {
    this.setState({withdrawInput: event.target.value});
  }

  onWithdrawButtonSubmit = () => {

    fetch('https://ewalletpi.herokuapp.com/withdraw', {
        method: 'put',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            id: this.state.user.id,
            withdrawInput: this.state.withdrawInput
        })
    }).then(response => response.json())
    .then(response => {
      this.setState(Object.assign(this.state.user, {balance: response}))
    }) 
    .catch(console.log)
  }

  onSearchButtonSubmit = () => {
    fetch('https://ewalletpi.herokuapp.com/search', {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            nameInput: this.state.nameInput,
            balanceInput: this.state.balanceInput
        })
    }).then(response => response.json())
    .then(response => {
      
        this.setState(Object.assign(this.state.searchResult, response));
      
  })
  }

  onRouteChange = (route) => {
    if (route === 'SignOut'){
      this.setState(initialState)
    } else if(route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route: route});
  }


  render(){

    setInterval(() => {
      fetch('https://ewalletpi.herokuapp.com/random', {
          method: 'put',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({
            randomBalance: Math.floor(Math.random()*10000)
          })
      })
    }, 86400000);

    const {isSignedIn, route} = this.state;
    return(
      <div>
        <Particles className='particles' params={particlesOptions}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' ? 
          <div>
              <Logo name= {this.state.user.name}/>
              <Balance name= {this.state.user.name} balance={this.state.user.balance}/>
              <Withdraw onWithdrawInputChange = {this.onWithdrawInputChange} 
              onWithdrawButtonSubmit={this.onWithdrawButtonSubmit}/>
          </div>

        : (
          route ==='SignIn' ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : route === 'landing' ?
          <div>
              <SearchBar onNameInputChange={this.onNameInputChange} 
                onBalanceInputChange={this.onBalanceInputChange}
                onButtonSubmit={this.onSearchButtonSubmit}/>
              <div style={{paddingTop:'50px'}}>
                  <Scroll>
                      <Cardlist users= {this.state.searchResult} />
                  </Scroll>
              </div>
          </div>
          : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )
        }
      </div>
    )
  }
}

export default App;
