import { render, screen } from '@testing-library/react';
import React from 'react';
import ContactForm from './components/contact.js';

test('renders a form with a name input', () => {
    const { getByLabelText } = render(<ContactForm />);
    const nameInput = getByLabelText('Name');
    expect(nameInput).toBeInTheDocument();
});

test('renders a form with an email input', () => {
    const { getByLabelText } = render(<ContactForm />);
    const emailInput = getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
});

test('renders a form with a message input', () => {
    const { getByLabelText } = render(<ContactForm />);
    const messageInput = getByLabelText('Message');
    expect(messageInput).toBeInTheDocument();
});

