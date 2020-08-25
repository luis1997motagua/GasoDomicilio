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

    

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { open } = this.state

        return (
            <div>
              <Dialog
                open={open}
                onClose={this.handleToggle}
              >
                <DialogContent>
                  <DialogContentText>
                    Pedido Confirmado
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleToggle} color="primary">
                    Regresar
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }
    
}

