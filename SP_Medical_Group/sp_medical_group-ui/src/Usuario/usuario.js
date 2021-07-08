import { Component } from 'react'
import { Link } from 'react-router-dom'

class Usuario extends Component
{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount()
    {
        this.listarConsultaUser();
    }
    
  listarConsultaUser()
    {
        fetch('https://localhost:5000/api/Consulta/ConsultasUsuario',
        {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })

        .then(resp => resp.json())

        .then(resposta => this.setState({ listaUser : resposta }))

        .catch((erro) => console.log(erro))
    }

    funcaoLogout = () => 
  {
      localStorage.removeItem('token')
  }


  render()
  {
    return(

        <div>
         <header class="cab-UM">
        <div class="ctn-UM">
            

            <div class="header-UM">
                <Link to="/" href="#">login</Link>
                <Link to ="/"><button onClick={this.funcaoLogout}>logout</button></Link>
            </div>
        </div>
    </header>

    <main>
        <section class="ctn-UM">
            <div class="txtmain-UM">

                <p class="p1-UM txt-UM">
                    bem vindo
                </p>

                <div class="p2-UM txt-UM">
                    
                    <div class="p2meio1-UM">
                        <p>paciente</p>
                    </div>

                    <div class="p2meio2-UM">
                        <p>ao</p>
                    </div>

                </div>

                <div class="p3-UM">
                    <div class="p3div-UM txt-UM">
                    sp medical group
                    </div>
                </div>
            </div>

            <div class="meio-UM">
                <div class="linha-UM"></div>
            </div>
        </section>

        <section id="botao-UM">
            <Link to="/listaPaciente"><button onclick="listarConsultaUser()">suas consultas</button></Link>
        </section>

    </main>
        </div>

    );
  }
}


export default Usuario;