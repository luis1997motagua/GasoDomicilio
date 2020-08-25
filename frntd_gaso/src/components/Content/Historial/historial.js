import React, {Component} from 'react';
import Page from '../../Page';
//import InfiniteScroll from 'react-infinite-scroller';
import './historial.css'

import {allPedidos} from './actions';

import { getSessionStorage } from '../../../utilities/axios';

export default class extends Component{
    constructor(){
      super();
      this.state = JSON.parse(getSessionStorage("alumnos_state")) || {
        pedidos : [],
        loading: true,
        scrollTop:0
      }
      this.scrolled = false;
      this.scrollHandler = this.scrollHandler.bind(this);
    }
    async componentDidMount(){
        try{
            let result = await allPedidos();
            console.log(result);
            this.setState({pedidos:result}) 
            console.log(this.state.pedidos);
        } catch(e){
            alert("Algo salio mal")
        }
    }
        
    
    scrollHandler(e){
      if (this.scrolled === true ){
        let { scrollTop} = e.target;
        this.setState({scrollTop:scrollTop});
      }
    }

    render(){
      const pedidosList = this.state.pedidos.map((o)=>{
        return (<div key={o._id} id={o._id} className="listItem">
          <b>Gasolinera: {o.gasolinera}</b> || <b>Combustible: {o.tipocombustible}</b> || <b>{o.cantLitros}Lt.</b> || <b>{o.fecha}</b> || <b>Pago: {o.tipopago}</b>
          
        </div>);
      });
      return (
        <Page
          showHeader={true}
          showFooter={true}
          title={`Pedidos `}
          auth={this.props.auth}
        >
            <section className="listholder" ref={(ref)=>this.scrollParentRef = ref} onScroll={this.scrollHandler}>
                
                {pedidosList}
                
                
            </section>
        </Page>
      );
    }
  
}