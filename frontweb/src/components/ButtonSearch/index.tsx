import './styles.css';

const ButtonSearch = () => {
  return (
    <div className="btn-container">
      <input type="text" placeholder="Digite sua busca"></input>
      <button className="btn btn-search">
        <p>BUSCAR</p>
      </button>
    </div>
  );
};

export default ButtonSearch;
