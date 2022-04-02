import '/home/marcel/Documentos/ProjetoDesafio/frontend/src/components/ProductCard/styles.css';
import CardImage from '/home/marcel/Documentos/ProjetoDesafio/frontend/src/assets/images/car-card.svg';

function ProductCard() {


return(
    <div className="second-card product-card">
        <div className="card-top-container">
            <img src={CardImage} alt="Imagem do produto" />
       </div>
       <div className="card-bottom-container">
           <h6>Audi Supra TT</h6>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi </p>
           <div className="btn2-container">
               <button className="btn2">
                   <h5>Comprar</h5>
               </button>
           </div>
       </div>
    </div>
   );
}

export default ProductCard;