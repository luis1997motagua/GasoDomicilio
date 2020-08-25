import React, {Component} from 'react';
import Page from '../../Page';



export default class extends Component {
    render(){
      return (
        <Page
          showHeader={true}
          showFooter={true}
          title={"Tanque Lleno"}
        >
            <article id="home">
          <h1>Acerca de nosotros</h1>
          <p>Tanque lleno , creada por un grupo de estudiantes de la carrera de Ingeniería en Ciencias de la Computación,de la Universidad Católica De Honduras, con el fin de cubrir una de las necesidades que puede presentar la 
            sociedad y mas en la situacion por la cual atraviesa el país. Tanque lleno te permite tener combustible para tu vehículos ,tus generadores o tu maquinaria donde y cuando tu lo quieras. con este proyecto se ayuda tanto 
            a un cliente particular como a empresarios de entregas a domicilio,transporte y tambien a la agroindustria.
          </p>
          <h1>Mision</h1>
          <p>
          Somos una empresa que se dedica a la distribucion de gasolina de manera a domicilio y estamos enfocados en 
          lo que hacemos ya que lo consideramos un solucion que puede satisfacer las necesidades de nuestros cleintes 
          de esta manera generando un valor para la compañia y para la comunidad. 
          </p>
          <h1>Vision</h1>
           <p>
           Pretendemos ser un referente en el mercado en cuanto a entrega de gasolina de manera a domicilio se refiera, 
           y para ello abarcaremos todos los servicios que ofrecemos actualmente incrementando 
           los que vayan surgiendo debido a la necesidad de cambio provocado por los avances tecnológicos. 
           Esto es así ya que somos una empresa en constante innovación ya que el sector de la tecnología así lo requiere.
          </p>
          <h1>Valores</h1>
           <p>
           <ul> 
           <li>El respeto mutuo y un ambiente de trabajo agradable son imprescindibles diariamente</li>               
           <li>Somos profesionales que creemos en lo que hacemos, y además nos gusta hacerlo</li>
           <li>El aburrimiento y la deshonestidad no tienen cabida alguna en nuestra Organización</li>
           <li>Nuestra palabra y los puntos de vista son respetados bajo cualquier circunstancia</li>
           <li>Aprender y mejorar como Organización son condicionantes para poder obtener beneficios</li>
           </ul>
          </p>
         
          
          </article>
          
          
        </Page>
      )
    }
  }