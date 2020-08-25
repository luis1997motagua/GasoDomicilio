import React , {Component} from 'react';
import Page from '../../Page';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';


export default class extends Component{
 
 constructor(){
  
     
     super();
   this.state = {
     gasolinera:'',
     tipocombustible: '',
    fecha : '',
    cantLitros : '',
    estado: 'estado'
  }
     
     this.onClickButton = this.onClickButton.bind(this);
     this.onTextChange = this.onTextChange.bind(this);
 }
 
 
 estilosTextfield(){
      const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

 }

 estilosSelect()
 {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
 }
 
 onTextChange(e){
  
  const {name, value} = e.target;
  this.setState({[name]:value});
}

async onClickButton(e) {
}

  render()
  {
    return(
         
        <Page
          title="Pedido"
          showHeader={true}
          showFooter={true}
          //auth={this.props.auth}
        >
          <div className="classPedido">
            
             <h2>Realice su Pedido</h2>
             <hr></hr>
             <label>Gasolineras Disponibles: </label>

             <Select
            
             name="gasolinera"
             onChange = {this.onTextChange}
            
          displayEmpty
          className={this.estilosSelect}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="Seleccione una opcion">
            <em>Seleccione una opcion</em>
          </MenuItem>
          <MenuItem value={"PumaLasTorres"}>Puma Las Torres</MenuItem>
          <MenuItem value={"UnoAeropuertoToncontin"}>Uno Aeropuerto Toncontin</MenuItem>
          <MenuItem value={"Texaco Citymall"}>Texaco Citymall</MenuItem>
          <MenuItem value={"Shell Col El Pedregal"}>Shell Col El Pedregal</MenuItem>
          <MenuItem value={"Uno Carretera Norte"}>Uno Carretera Norte</MenuItem>
          <MenuItem value={"Puma Col Los Andes"}>Puma Col Los Andes</MenuItem>
        </Select>
            
            
             <br/>
             <br/>
             <label>Tipo Gasolina: </label>
          
             <Select
          name = {"tipocombustible"}
          onChange = {this.onTextChange}
          displayEmpty
          className={this.estilosSelect}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="Seleccione una opcion">
            <em>Seleccione una opcion</em>
          </MenuItem>
          <MenuItem value={"Regular"}>Regular</MenuItem>
          <MenuItem value={"Super"}>Super</MenuItem>
          <MenuItem value={"Diesel"}>Diesel</MenuItem>
          <MenuItem value={"Gas Vehicular"}>Gas Vehicular</MenuItem>
        </Select>
             <br/>
             <br/>
             <label>Puede elegir su horario y fecha de entrega</label>
             <br/>
             <br/>
             <TextField 
                     id="datetime-local"
                     type="datetime-local"
                     defaultValue="2020-07-28T10:30"
                     className = {this.estilosTextfield}
                     name = "fecha"
                     onChange = {this.onTextChange}
                     value = {this.state.fecha}
                    
                />
             <br/>
             <br/>
             <label>Ingrese la cantidad de Litros: </label>
             <TextField id="standard-basic"
                name = "cantLitros"
                className = {this.estilosTextfield}
                onChange = {this.onTextChange}
                value = {this.state.cantLitros}
             />
             <br/>
             <br/>
             <div className="Btn_grbg">
             <NavLink to={`/checkout/${this.state.gasolinera}/${this.state.tipocombustible}/${this.state.fecha}/${this.state.cantLitros}`}>
              Siguiente
              
            </NavLink>
            </div>
             </div>
            
            
        </Page>
        )
  }
 

}