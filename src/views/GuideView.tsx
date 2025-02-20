import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../components/icons';
import ThemeToggle from '../components/ThemeToggle';

const GuideView = () => {
  return (
    <div className="container">
      <ThemeToggle />
      <Link to="/" className="back-to-demo">
        <ArrowLeftIcon size={20} />
        Back to Demo
      </Link>
      <header className="header">
        <h1 className="logo">FormKit</h1>
        <p className="subtitle">
          Implementation Guide
        </p>
      </header>

      <div className="guide-section">
        <div className="version-notice">
          <strong>⚠️ Version Compatibility Note:</strong>
          <p>Currently, @formspree/react works best with React 18. Support for React 19 is coming soon!</p>
        </div>

        <div className="guide-card">
          <h3>Simple Form</h3>
          <p>Basic form with email and message fields.</p>
          <code className="path">src/components/SimpleForm.tsx</code>
          <div className="dependencies">
            Dependencies: @formspree/react
          </div>
          <div className="install-command">
            <code>npm install @formspree/react@latest react@^18 react-dom@^18</code>
          </div>
          <Link to="/simple" className="view-standalone">View Standalone</Link>
        </div>

        <div className="guide-card">
          <h3>ReCaptcha Form</h3>
          <p>Form with Google ReCaptcha v3 integration.</p>
          <code className="path">src/components/RecaptchaForm.tsx</code>
          <div className="dependencies">
            Dependencies: @formspree/react, react-google-recaptcha-v3
          </div>
          <Link to="/recaptcha" className="view-standalone">View Standalone</Link>
        </div>

        <div className="guide-card">
          <h3>Payment Form</h3>
          <p>Stripe payment integration form.</p>
          <code className="path">src/components/PaymentForm.tsx</code>
          <div className="dependencies">
            Dependencies: @formspree/react, @stripe/stripe-js, @stripe/react-stripe-js
          </div>
          <Link to="/payment" className="view-standalone">View Standalone</Link>
        </div>

        <div className="setup-guide">
          <h3>Quick Setup</h3>
          <ol>
            <li>Copy the desired form component from its file</li>
            <li>Install the required dependencies</li>
            <li>Set up your environment variables:
              <pre>
                {`REACT_APP_FORMSPREE_SIMPLE_FORM_ID=your_form_id
REACT_APP_FORMSPREE_RECAPTCHA_FORM_ID=your_form_id
REACT_APP_FORMSPREE_PAYMENT_FORM_ID=your_form_id
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_key
REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_key`}
              </pre>
            </li>
            <li>Import and use the component in your app</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GuideView; 