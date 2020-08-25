import React , {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NRoute from './utilities/normalroutes';
import PRoute from './utilities/privateroutes';

import {setJWT, getLocalStorage, setLocalStorage, setUnAuthInterceptor} from './utilities/axios';

import Home from './components/Content/Home'
import Perfil from './components/Content/Perfil'
import Login from './components/Content/Login'
import Registrarse from './components/Content/SignUp'
import Pedido from './components/Content/Pedido'
import Recuperacion from './components/Content/Recuperacion'
import Checkout from './components/Content/Checkout'
import Historial from './components/Content/Historial/historial'


export default class extends Component{
  constructor (){
    super();
    this.state = {
      user: getLocalStorage('user') || {},
      jwt: getLocalStorage('jwt') || "",
      isLogged:false,
      loadingBackend:false
    }
    
    if(this.state.jwt !== ""){
      setJWT(this.state.jwt);
      this.state.isLogged = true;
    }
    this.setLogginData = this.setLogginData.bind(this);
    this.setLoggoutData = this.setLoggoutData.bind(this);
    
    setUnAuthInterceptor(this.setLoggoutData)
  }

  componentDidMount(){
    this.setState({"loadingBackend":true});
    //console.log(this.state.loadingBackend);
  }

 setLogginData(user, jwt){
    this.setState({
      ...this.state,
      user:user,
      jwt:jwt,
      isLogged:true,
      },
      () => {
        setLocalStorage('jwt', jwt);
        setLocalStorage('user', user);
        setJWT(jwt);}
    );
  }
  
  setLoggoutData(){
    if(this.state.loadingBackend){
      this.setState(
        {
          ...this.state,
          user:"",
          jwt:"",
          isLogged:false,
        },
        ()=>{setJWT('')}
      )
    }else{
      this.state = {
        ...this.state,
        user: "",
        jwt: "",
        isLogged: false,
      }
      setJWT('')
    }
  }

  render() {
  if (!this.state.loadingBackend){
      return (<div className="splash"> ...Loading </div>)
    }
    const auth = {
      isLogged : this.state.isLogged,
      login: this.setLogginData,
      logout: this.setLoggoutData,
    }
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <NRoute path="/login" component={Login} exact auth={auth} />
          <NRoute path="/signup" component={Registrarse} exact auth={auth} />
          <NRoute path="/recuperacion" component={Recuperacion} exact auth={auth} />
          <PRoute path="/perfil" component={Perfil} exact auth={auth} />
          <PRoute path="/pedido" component={Pedido} exact auth={auth} />
          <PRoute path="/checkout/:gasolinera/:tipocombustible/:fecha/:cantLitros" component={Checkout} exact auth={auth}/>
          <PRoute path="/historial" component={Historial} exact auth={auth} />
        </Switch>
      </Router>
    );
  }
}

