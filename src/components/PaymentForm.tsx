import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_PAYMENT_FORM_ID as string);
  const [formData, setFormData] = useState({
    email: '',
    amount: ''
  });

  // Check for dark theme
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkTheme(document.documentElement.classList.contains('theme-dark'));
    };

    // Initial check
    checkTheme();

    // Create observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      console.log('Stripe has not loaded yet');
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      console.log('Card element not found');
      return;
    }

    try {
      const { token, error } = await stripe.createToken(cardElement);
      
      if (error) {
        console.error('Error creating token:', error);
        return;
      }

      if (token) {
        await handleSubmit({
          ...formData,
          'stripe-token': token.id
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  if (state.succeeded) {
    return <p>Thanks for your payment!</p>;
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="amount">
          Amount ($)
        </label>
        <input
          id="amount"
          type="number"
          name="amount"
          min="1"
          step="0.01"
          value={formData.amount}
          onChange={handleChange}
        />
        <ValidationError 
          prefix="Amount" 
          field="amount"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="card">
          Card Details
        </label>
        <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
          <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: isDarkTheme ? '#ffffff' : '#000000',
                  '::placeholder': {
                    color: isDarkTheme ? '#8b95b3' : '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <ValidationError 
          prefix="Card" 
          field="card"
          errors={state.errors}
        />
      </div>

      <button 
        type="submit" 
        disabled={!stripe || state.submitting}
      >
        {state.submitting ? "Processing..." : "Pay"}
      </button>

      <ValidationError errors={state.errors} />
    </form>
  );
};

export default PaymentForm;
