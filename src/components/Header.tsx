import { Link } from 'react-router-dom';
// Remove the unused import
// import { FormIcon } from './icons';

const Header = () => {
  return (
    <header className="header">
      <h1 className="hero-text">
        Build powerful forms in minutes
        <span className="hero-powered-by">
          powered by <span className="accent-text">Formspree + React</span>
        </span>
      </h1>
      <Link to="/guide" className="guide-button">
        Get Started
      </Link>
    </header>
  );
};

export default Header; 