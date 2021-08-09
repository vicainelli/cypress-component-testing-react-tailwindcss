import React from 'react';
import { mount } from '@cypress/react';
import App from './App';
import './index.css';

it('should renders the App correctly', () => {
  mount(<App />);
  cy.get('h1').contains('Cypress Component Testing with Tailwind CSS');
});