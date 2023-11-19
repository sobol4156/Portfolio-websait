import './style.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hello, i am <em>TRAINING</em>
          </strong>
          <br />frontend development
        </h1>
        <div className="header__text">
          <p>Hire me please.</p>
        </div>
        <a href="#!" className="btn">
          Take
        </a>
      </div>
    </header>
  );
};

export default Header;
