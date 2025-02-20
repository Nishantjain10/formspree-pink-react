import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import SimpleForm from './components/SimpleForm';
import RecaptchaForm from './components/RecaptchaForm';
import PaymentForm from './components/PaymentForm';
import GuideView from './views/GuideView';
import StandaloneLayout from './components/StandaloneLayout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/guide',
    element: <GuideView />,
  },
  {
    path: '/simple',
    element: (
      <StandaloneLayout title="Simple Form">
        <SimpleForm />
      </StandaloneLayout>
    ),
  },
  {
    path: '/recaptcha',
    element: (
      <StandaloneLayout title="ReCaptcha Form">
        <RecaptchaForm />
      </StandaloneLayout>
    ),
  },
  {
    path: '/payment',
    element: (
      <StandaloneLayout title="Payment Form">
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </StandaloneLayout>
    ),
  },
]); 