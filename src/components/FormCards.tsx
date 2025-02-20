import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import SimpleForm from './SimpleForm';
import RecaptchaForm from './RecaptchaForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string);

interface FormCardsProps {
  tab: string;
  getCardPosition: (cardTab: string) => "left" | "right" | "center";
  handleCardClick: (cardTab: string) => void;
}

const FormCards = ({ tab, getCardPosition, handleCardClick }: FormCardsProps) => {
  return (
    <div className="card-container">
      <div className="tabs">
        <button
          type="button"
          className={`tab ${tab === 'simple' ? 'active' : ''}`}
          onClick={() => handleCardClick('simple')}
        >
          Simple form
        </button>
        <button
          type="button"
          className={`tab ${tab === 'recaptcha' ? 'active' : ''}`}
          onClick={() => handleCardClick('recaptcha')}
        >
          ReCaptcha form
        </button>
        <button
          type="button"
          className={`tab ${tab === 'stripe' ? 'active' : ''}`}
          onClick={() => handleCardClick('stripe')}
        >
          Stripe form
        </button>
      </div>

      {/* Simple Form Card */}
      <div 
        className="form-card" 
        data-position={getCardPosition('simple')}
        onClick={() => handleCardClick('simple')}
      >
        <div className="form-title">Simple Form</div>
        <SimpleForm />
      </div>

      {/* ReCaptcha Form Card */}
      <div 
        className="form-card" 
        data-position={getCardPosition('recaptcha')}
        onClick={() => handleCardClick('recaptcha')}
      >
        <div className="form-title">ReCaptcha Form</div>
        <RecaptchaForm />
      </div>

      {/* Stripe Form Card */}
      <div 
        className="form-card" 
        data-position={getCardPosition('stripe')}
        onClick={() => handleCardClick('stripe')}
      >
        <div className="form-title">Payment Form</div>
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </div>
    </div>
  );
};

export default FormCards; 