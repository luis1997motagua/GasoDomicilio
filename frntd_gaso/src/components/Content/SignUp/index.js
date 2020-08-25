import React, {Component} from 'react';
import {crearcuenta} from './actions'
import {Redirect} from 'react-router-dom';
import Page from '../../Page'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {FiUserPlus} from 'react-icons/fi';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';




export default class extends Component {
    constructor(){
        super()
        this.state = {
            nombre:'',
            apellido:'',
            email:'',
            telefono:'',
            password:'',
            redirectTo: false
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
            let userData = await crearcuenta(this.state.nombre,this.state.apellido,this.state.email, this.state.telefono, this.state.password);
            console.log(userData);
            this.setState.redirectTo = true;
            alert("Usuario creado exitosamente")
        }catch(e){
            alert("Error al iniciar sesión.");
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
        showHeader={true}
        showFooter={true}
        title={"Login"}
        >
            <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div >
                <Avatar >
                <FiUserPlus />
                </Avatar>
                <Typography component="h1" variant="h5">
                Registrate
                </Typography>
                    <form  noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="nombre"
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="nombre"
                                    label="Nombre"
                                    onChange={this.onTextChange}
                                    value={this.state.nombre}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="apellido"
                                    label="Apellido"
                                    name="apellido"
                                    autoComplete="lname"
                                    onChange={this.onTextChange}
                                    value={this.state.apellido}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
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
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="telefono"
                                    label="Telefono"
                                    name="telefono"
                                    onChange={this.onTextChange}
                                    value={this.state.telefono}
                                    
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contaseña"
                                    type="password"
                                    id="password"
                                    onChange={this.onTextChange}
                                    value={this.state.password}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={this.onClickButton}
                        >
                            Crear Cuenta
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                            <Link href="/login" variant="body2" color="textPrimary">
                                ¿Ya tienes una cuenta? Inicia sesion!
                            </Link>
                            </Grid>
                        </Grid>
    
                    </form>
                 
            </div>
            </Container>
        </Page>
      );
  }
  
}