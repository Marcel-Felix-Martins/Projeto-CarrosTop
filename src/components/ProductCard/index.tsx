import '/home/marcel/Documentos/ProjetoDesafio/frontend/src/components/ProductCard/styles.css';


import CardImage from '/home/marcel/Documentos/ProjetoDesafio/frontend/src/assets/images/car-card.svg';

const ProductCard = () =>{


return(
    <div className="base-card product-card">
        <div className="card-top-container">
            <img src={CardImage} alt="Imagem do produto" />
       </div>
       <div className="card-bottom-container">
           <h6>Nome do produto</h6>

       </div>

    </div>
   );
}

export default ProductCard;