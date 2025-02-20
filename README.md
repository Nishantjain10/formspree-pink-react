# FormKit - React + Appwrite Pink Form Examples

A collection of powerful form examples powered by Formspree + React, styled with [Appwrite Pink Design System](https://pink.appwrite.io/).

## 🎨 Features

- Clean, modern UI using Appwrite Pink Design System
- Dark/Light theme support
- Responsive design with smooth animations
- Three form examples:
  - Simple Contact Form
  - ReCaptcha Protected Form
  - Stripe Payment Integration

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Set up your environment variables in `.env`:
```env
REACT_APP_FORMSPREE_SIMPLE_FORM_ID=your_form_id
REACT_APP_FORMSPREE_RECAPTCHA_FORM_ID=your_form_id
REACT_APP_FORMSPREE_PAYMENT_FORM_ID=your_form_id
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_key
REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_key
```
4. Start the development server:
```bash
npm start
```

## 🛠️ Built With

- React 18
- TypeScript
- Formspree
- Appwrite Pink Design System
- Stripe Elements
- Google ReCaptcha v3

## 📦 Project Structure

```
src/
├── components/              # Contains reusable components like forms, headers, and footers.
│   ├── FormCards.tsx       # Main form cards container
│   ├── Header.tsx          # App header component
│   ├── Footer.tsx          # App footer component
│   ├── SimpleForm.tsx      # Basic form example
│   ├── RecaptchaForm.tsx   # Form with ReCaptcha
│   ├── PaymentForm.tsx     # Stripe payment form
│   └── StandaloneLayout.tsx # Layout for individual forms
├── views/                  # Contains view components like the guide view.
│   └── GuideView.tsx       # Implementation guide page
├── App.tsx                 # Main application component
├── index.tsx               # Application entry point
├── index.css               # Global styles
└── router.tsx              # App routing configuration
```

## 📚 Dependencies

- @formspree/react
- react-router-dom
- react-google-recaptcha-v3
- @stripe/stripe-js
- @stripe/react-stripe-js

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

MIT