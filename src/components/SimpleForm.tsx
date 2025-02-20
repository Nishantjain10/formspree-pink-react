import { useForm, ValidationError } from '@formspree/react';

const SimpleForm = () => {
  const [state, handleSubmit] = useForm("mvgzvvpz");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
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
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Submitting..." : "Submit"}
      </button>

      {/* Show any other form errors */}
      <ValidationError errors={state.errors} />
    </form>
  );
};

export default SimpleForm;
