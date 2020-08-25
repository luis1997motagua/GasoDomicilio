import {paxios} from '../../../utilities/axios';

export const recuperacion = async (email, newPassword)=>{
  try
  {
    const {data} = await paxios.put(
      "/api/sec/recuperacionPassword",
      {
        correo: email,
        newPassword: newPassword
      }
    );
    return data;
  }catch (e){
    throw(e);
  }
}