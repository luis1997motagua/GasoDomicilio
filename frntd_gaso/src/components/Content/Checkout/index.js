import React,{Component} from 'react';
import Page from '../../Page';
import {Button} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { pedido } from './actions';
import {FaCcVisa,FaCcMastercard, FaCcAmex} from 'react-icons/fa'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export default class extends Component {
  
     constructor(){
        super();
        this.state= {
          tipopago: '',
          open: false,
          latitud:'',
          longitud:''
        };
        this.onClickButton = this.onClickButton.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this)

        
     
     }

  onRadioChange(e)
  {
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  handleToggle = () => {
      this.setState({
          open: !this.state.open
      })
  }

 
   
  

    

 
  

  async onClickButton(e) {
    
    try {
      let pedidoData = await pedido(this.props.match.params.gasolinera,this.props.match.params.tipocombustible,this.props.match.params.fecha, this.props.match.params.cantLitros ,this.state.tipopago, this.state.total)
      
      window.location.reload()
    } catch (error) {
      alert("error al ingresar el pedido")
        window.location.reload()
       throw(error)
    }
  }

       render()
       {
        const { open } = this.state
        return(
      
          <Page
          title={"Checkout"}
          showHeader={true}
          showFooter={true}
  
         >
         
         <div className="classRadio">
          <h1>Informacion de Pago</h1>
          <h3>Total a pagar: Lps.{(this.props.match.params.cantLitros * 90)}</h3>
          <br/>
          <br/>
          <h3>Seleccione un metodo de pago</h3>
          <hr></hr>
          <label>Tarjeta</label>
          <input type="radio" id="Tarjeta" name="tipopago" value="Tarjeta" checked={this.state.tipopago==="Tarjeta"}  onChange={this.onRadioChange} ></input>
           
        <br/>
        <br/>
          <FaCcVisa size="3em"/>
          <input type="radio" id="Visa" name="Tarjetas" value="Visa"></input>
          <FaCcMastercard size="3em"/>
          <input type="radio" id="Mastercard" name="Tarjetas" value="Mastercard"></input>
          <FaCcAmex size="3em"/>
          <input type="radio" id="American Express" name="Tarjetas" value="American Express"></input>
          <br/>
          <br/>
        <TextField  label="Numero Tarjeta" variant="filled" />
  
       
      
          <br/>
          <br/>
          <TextField   label="Codigo Seguridad" variant="filled"/>
  
          <br/>
  
          <br/>
         <TextField label="Fech Exp" variant="filled"/>
          <br/>
          <br/>
          <hr></hr>
          <label>Efectivo</label>
          <input type="radio" id="Efectivo" name="tipopago" value="Efectivo"  checked={this.state.tipopago==="Efectivo"} onChange={this.onRadioChange}></input>
          <br/>
          <br/>
        <TextField  label="Ingrese monto a pagar" variant="filled" />
          <br/>
          <br/>
          <Button variant="contained" color="primary" onClick={this.handleToggle}>
                Confirmar Pago
              </Button>
              <Dialog
                open={open}
                onClose={this.handleToggle}
              >
                <DialogContent>
                  <DialogContentText>
                    ¿Esta seguro en procesar el pedido?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.onClickButton} color="primary">
                    Si
                  </Button>
                  <Button onClick = {this.handleToggle}   color="primary"  autoFocus >
                    No
                  </Button>
                </DialogActions>
              </Dialog>


          <br/>
          <br/>
          </div> 
          <br/>
    
     
        </Page>


        );


  } 
   
}