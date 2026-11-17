export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
  companyWebsite: string; // honeypot
}

export interface ContactValidationResult {
  isValid: boolean;
  isSpam: boolean;
  errors: Partial<Record<'name' | 'email' | 'message', string>>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  if (input.companyWebsite.trim().length > 0) {
    return {
      isValid: false,
      isSpam: true,
      errors: {},
    };
  }

  const errors: Partial<Record<'name' | 'email' | 'message', string>> = {};

  if (input.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!EMAIL_REGEX.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (input.message.trim().length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    isSpam: false,
    errors,
  };
}
