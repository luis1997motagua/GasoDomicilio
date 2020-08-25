import React, {Component} from 'react'

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default class extends Component{
    constructor(){
        super()
        this.state = {
            open: false
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    clickYes=()=>{
        this.props.clickYes()
        this.setState({
            open: !this.state.open
        })
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { open } = this.state

        return (
            <div>
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
                  <Button onClick={this.clickYes} color="primary">
                    Si
                  </Button>
                  <Button onClick={this.handleToggle} color="primary" autoFocus>
                    No
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }
}