import './styles.css';

import ProductImg from 'assets/images/car-card-1.png';
import ButtonBuy from 'components/ButtonBuy';

const ProductCard = () => {
  return (
    <div className="product-card-1">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div className="card-botton-container">
        <ButtonBuy />
      </div>
    </div>
  );
};

export default ProductCard;
