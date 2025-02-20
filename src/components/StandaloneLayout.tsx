import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from './icons';
import ThemeToggle from './ThemeToggle';

interface StandaloneLayoutProps {
  children: React.ReactNode;
  title: string;
}

const StandaloneLayout = ({ children, title }: StandaloneLayoutProps) => {
  return (
    <div className="standalone-container">
      <ThemeToggle />
      <Link to="/guide" className="back-link">
        <ArrowLeftIcon size={20} />
        Back to Guide
      </Link>
      <div className="standalone-card">
        <h1 className="standalone-title">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default StandaloneLayout; 