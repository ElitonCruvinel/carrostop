import './styles.css';
import ButtonSearch from 'components/ButtonSearch';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <>
      <div className="catalog-container">
        <div className="search-container">
          <ButtonSearch />
        </div>
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
