import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';

const ReCaptchaForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_RECAPTCHA_FORM_ID as string);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [verifying, setVerifying] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    try {
      setVerifying(true);
      console.log('Executing ReCaptcha...');
      const token = await executeRecaptcha('submit');
      console.log('ReCaptcha token received');
      
      // Submit the form data with the recaptcha token
      await handleSubmit({
        ...formData,
        'g-recaptcha-response': token
      });
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setVerifying(false);
    }
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
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
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <button 
        type="submit" 
        disabled={state.submitting || verifying}
      >
        {verifying ? "Verifying..." : state.submitting ? "Submitting..." : "Submit"}
      </button>

      {verifying && (
        <div style={{ marginTop: '10px', color: '#666' }}>
          Verifying with ReCaptcha v3...
        </div>
      )}

      <ValidationError errors={state.errors} />

      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        This form is protected by reCAPTCHA v3. No checkbox needed!
      </div>
    </form>
  );
};

// Wrap the form with ReCaptcha provider
const RecaptchaFormWrapper = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY!}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <ReCaptchaForm />
    </GoogleReCaptchaProvider>
  );
};

export default RecaptchaFormWrapper;
