import React,{Component} from 'react';
import Page from '../../Page';
import CreateDialog from '../../Dialog/CambiarPass'
import {FaUserAstronaut} from 'react-icons/fa'
import buttonLibs from '../../Button/index' 
import {obtenerPerfil, cambiarPassword} from './actions';

//import './conductor.css'


export default class extends Component {
    
    constructor(){
      super();
      this.state = {
        datosPerfil: [],
        isLoaded: false, 
        oldPassword:'',
        newPassword:'',
        idusuario:''

        
      }
      this.onTextChange = this.onTextChange.bind(this)
      this.onclickConfirm = this.onclickConfirm.bind(this)
    }


    onTextChange(e){
      const {name, value} = e.target;
      this.setState({[name]:value});
      
    }

    async onclickConfirm(){
      try{
        let response = await cambiarPassword(this.state.idusuario, this.state.oldPassword, this.state.newPassword);
        console.log(response);
        alert("Cambio de password Exitoso")
        window.location.reload()
      }catch(e){
        alert("Error al cambiar password.");
        window.location.reload()
      }
    }

    

    async componentDidMount(){
      try {
        let datosPerfil = await obtenerPerfil();
        this.setState({isLoaded: true,datosPerfil: datosPerfil, idusuario: datosPerfil[0]._id});
      }catch(e){
        console.log(e);
      }
    }

    render(){
      var {datosPerfil} = this.state
      
      var usuario = datosPerfil.map(item => {
        return (
            <div key={item._id} className="datosUsuario">
              <label>Nombre: {item.nombre} </label>
              <br/>
              <label>Apellido: {item.apellido} </label>
              <br/>
              <label>Correo: {item.email} </label>
              <br/>
              <label>Telefono: {item.telefono} </label>
              
            </div>
          )
          
      })
      
     
     
      return (
        
        <Page
          title="Perfil"
          showHeader={true}
          showFooter={true}
        >
          <div className="contenedorPerfil">
                <div className="imagen">
                <FaUserAstronaut size="10em" />
                </div>
                <section className="datos">
                  <fieldset className="perfil">
                    <h4>Datos de usuario</h4>
                    <section>
                      {usuario}
                    </section>

                    <hr></hr>
                    <h4>Cambiar contraseña</h4>
                    <label>Contrasena actual:</label>
                    <input type="text" name="oldPassword" onChange={this.onTextChange} value={this.state.oldPassword}/>
                    <br/>
                    <label>Contraseña nueva:</label>
                    <input type="password" name="newPassword" onChange={this.onTextChange} value={this.state.newPassword}/>
                    
                    <div className="botones">
                      <CreateDialog clickYes={this.onclickConfirm}/>
                      
                      <buttonLibs.NavLinkBtn to={"/historial"}>
                        Historial de Pedidos
                      </buttonLibs.NavLinkBtn>
                    </div>
                    
                  </fieldset>
                  
                </section>
          </div>  
        </Page>
      );
    }
  }