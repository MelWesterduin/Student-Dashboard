import './Category.css';

const Category = ({ category, setCategory }) => {
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <div className="category">Kies een categorie: </div>
      <label className="container">
        <input
          type="radio"
          name="assignments"
          value="allebei"
          onChange={(e) => handleChange(e)}
          checked={category === 'allebei'}
        />
        <span className="radiobutton"></span> Allebei
      </label>
      <label className="container">
        <input
          type="radio"
          name="assignments"
          value="leuk"
          onChange={(e) => handleChange(e)}
        />{' '}
        <span className="radiobutton"></span>Leuk
      </label>
      <label className="container">
        <input
          type="radio"
          name="assignments"
          value="moeilijk"
          onChange={(e) => handleChange(e)}
        />{' '}
        <span className="radiobutton"></span>Moeilijk
      </label>
    </div>
  );
};

export default Category;