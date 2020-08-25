import {naxios} from '../../../utilities/axios';

export const login = async (email, password)=>{
  try
  {
    const {data} = await naxios.post(
      "/api/sec/ingresar",
      {
        correo: email,
        password: password
      }
    );
    return data;
  }catch (e){
    throw(e);
  }
}