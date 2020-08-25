import {paxios, naxios} from '../../../utilities/axios';


export const obtenerPerfil = async()=>{
    try{
      let {data}  = await paxios.get('/api/perfil/private');
      //console.log(data);
      return data;
    }catch(e){
      throw(e);
    }
}

export const cambiarPassword = async(idusuario,oldPassword, newPassword)=>{
  try{
    let { data } = await naxios.put(
      `/api/sec/cambiarPassword/${idusuario}`,
      {
        oldPassword: oldPassword,
        newPassword: newPassword
      }
    );
    return data;
  }catch (e){
    throw(e);
  }
}