import  { paxios } from '../../../utilities/axios';

export const allPedidos = async()=>{
  try{
    let { data } = await paxios.get('/api/pedido/ordenes');
    //console.log(data);
    return data;
  }catch(e){
    throw(e);
  }
}

export const detallePedido = async (codpedido) => {
  try {
    let { data } = await paxios.get(`/api/pedido/info/${codpedido}`);
    return data;
  } catch (e) {
    throw (e);
  }
}