import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {recuperacion} from './actions'
import Page from '../../Page';
import {Button,TextField} from '@material-ui/core'

export default class extends Component {
    constructor(){
        super()
        this.state = {
          email:'',
          newPassword:'',
          redirectTo:false
        }
  
        this.onClickButton = this.onClickButton.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }
  
    onTextChange(e){
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
  
    async onClickButton(e) {
        try{
          let userData = await recuperacion(this.state.email, this.state.newPassword)
          console.log(userData);
          alert("Recuperacion exitosa! Ya puedes iniciar sesion con tu nueva contraseña");
          this.setState({ "redirectTo": true });
        }catch(e){
          alert("Error al intentar recuperar tu cuenta.");
        }
    }




    render(){
        if(this.state.redirectTo){
            const tourl = '/login';
            return(
              <Redirect to={tourl}/>
            )
          }
        return (
            <Page
            title="Recuperar de Cuenta"
            showHeader={true}
            showFooter={true}
            >

                <div className="cont">
                    <div>
                        <h2>¿Has olvidado tu Contraseña?</h2>
                    </div>
                    <section>
                        <h5>Escriba su correo para ingresar contraseña nueva...</h5>
                            <br/>
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={this.onTextChange}
                                value={this.state.email}      
                            />
                            <br/>
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                name="newPassword"
                                label="Contaseña Nueva"
                                type="password"
                                id="password"
                                onChange={this.onTextChange}
                                value={this.state.newPassword} 
                            />
                            <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={this.onClickButton}
                            >
                                Recuperar
                            </Button>
                    </section>
                </div>


            </Page>
        )
    }
}
