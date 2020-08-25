import {naxios} from '../../../utilities/axios';

export const crearcuenta = async (nombre,apellido,email,telefono, password)=>{
  try
  {
    const {data} = await naxios.post(
      "/api/sec/crearcuenta",
      {
          nombre: nombre, 
          apellido: apellido, 
          email: email, 
          telefono: telefono, 
          password: password
      }
    );
    return data;
  }catch (e){
    throw(e);
  }
}