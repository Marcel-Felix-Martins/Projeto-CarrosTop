import './styles.css';
import { ReactComponent as MainImage  } from '/home/marcel/Documentos/ProjetoDesafio/frontend/src/assets/images/Product-car.svg';

import ButtonIcon from '../../components/ButtonIcon';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
      
        
        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                    <div>
                    <h1>O carro perfeito para você</h1>
                    <p>
                    Conheça nossos carros e dê mais um passo na realização do seu sonho
                    </p>
                    </div>
                    <div>
                    <Link to ="/products">
                    <ButtonIcon />
                    </Link>
                    </div>
                </div>
                <div className="home-image-container">
                     <MainImage />
                </div>
            </div>

        </div>
     
  
      
    );
  }
  
  export default Home;