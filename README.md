# Little Lemon Restaurant 🍋 

## Live Demo

🌐 https://glovatskiy.github.io/little-lemon

A responsive restaurant website built with React as part of the Meta Front-End Developer Professional Certificate capstone project.

The application allows users to explore the Little Lemon restaurant website and make table reservations through an interactive booking form.

## Features

- Responsive design for desktop, tablet, and mobile devices
- React Router navigation
- Restaurant homepage with menu specials and testimonials
- About page with restaurant story
- Table reservation form
- Dynamic available booking times
- Form validation for required fields
- Booking confirmation page
- Accessible form labels and image descriptions

## Technologies

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router
- Jest
- React Testing Library

## Installation

Clone the repository:

```bash
git clone https://github.com/glovatskiy/little-lemon.git
```

Navigate to the project folder:

```bash
cd little-lemon
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

## Testing

The project includes unit tests for React components and booking functionality.

Run tests with:

```bash
npm test
```

## Project Structure

```text
src/
├── components/   # Reusable React components
├── pages/        # Application pages
├── assets/       # Images and static files
└── App.js        # Main application component
```

## Booking Flow

Users select a reservation date, choose an available time, enter the number of guests and occasion, then submit the form. After successful submission, they are redirected to the booking confirmation page.

## Accessibility & Responsive Design

The project uses semantic HTML, connected form labels, image alternative text, and CSS media queries to provide a responsive and accessible user experience.

## Key Learning

This project helped me practice building a complete React application, including component architecture, state management, form handling, routing, accessibility, and testing.