# Little Lemon Restaurant

A responsive React application for the fictional Little Lemon Mediterranean restaurant. The project is being developed as part of the Meta Front-End Developer Capstone.

## Project Status

🚧 **Work in progress**

The responsive homepage is currently under development. Routing, reservation functionality, accessibility improvements and automated tests will be added as the project progresses.

## Project Overview

Before writing code, I created the **Little Lemon Design** project in Figma.

The design process included:

- Low-fidelity wireframes to define the page structure and functionality
- A high-fidelity desktop mockup to establish typography, colours, spacing and visual hierarchy
- Reusable UI components
- An interactive prototype for the reservation flow

I then translated the design into semantic, reusable React components and implemented responsive behaviour for different viewport sizes.

This follows a common frontend workflow:

```text
Requirements
→ Low-fidelity wireframes
→ High-fidelity mockup
→ Component planning
→ React implementation
→ Responsive testing
→ Refinement
```

In a professional team, UX/UI designers often supply wireframes and high-fidelity mockups. Frontend developers inspect those designs, identify reusable components and implement them as accessible, responsive interfaces.

## Figma Design

The **Little Lemon Design** project currently contains low-fidelity wireframes, reusable components, an interactive reservation prototype and a partially completed high-fidelity desktop homepage mockup.

- [View the complete Little Lemon Design project](https://www.figma.com/design/4RYgzL3F7jbAaocUR3iZ0g/Little-Lemon---Design?m=auto&t=DcO0yFiTruYizEA4-1)
- [View the low-fidelity wireframes](https://www.figma.com/design/4RYgzL3F7jbAaocUR3iZ0g/Little-Lemon---Design?node-id=0-1)
- [View the high-fidelity homepage mockup — work in progress](https://www.figma.com/design/4RYgzL3F7jbAaocUR3iZ0g/Little-Lemon---Design?node-id=13-131)

## Current Features

- Semantic React component structure
- Responsive desktop and mobile layouts
- Responsive navigation
- Hero section with a reservation call to action
- Specials rendered dynamically from data
- Reusable Special Card component
- Testimonials rendered dynamically from review data
- Reusable Testimonial Card component
- Responsive Restaurant Story section
- Styling based on the Little Lemon brand guide

## Planned Features

- React Router navigation
- Functional mobile navigation menu
- Online table-reservation flow
- Date, time and number-of-guests selection
- Customer-details form
- Form validation and accessible error messages
- Booking confirmation page
- Improved keyboard and screen-reader accessibility
- Component and integration tests
- Playwright end-to-end tests
- Live deployment

## Technologies

- React
- JavaScript
- Semantic HTML
- CSS
- Flexbox
- CSS Grid
- Responsive media queries
- Git and GitHub
- Figma

## Component Structure

The application is divided into reusable components, including:

- Header
- Navigation
- Hero
- Specials
- Special Card
- Testimonials
- Testimonial Card
- Restaurant Story
- Footer
- Homepage
- Booking Page

## Run Locally

Clone the repository:

```bash
git clone https://github.com/glovatskiy/little-lemon.git
```

Open the project directory:

```bash
cd little-lemon
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Skills Demonstrated

- Translating Figma designs into React components
- Planning reusable component architecture
- Separating data from presentation
- Rendering components dynamically with `.map()`
- Passing data through props
- Creating responsive layouts with Flexbox and Grid
- Applying semantic HTML
- Debugging layout and overflow problems
- Using Git and GitHub to track feature development

## Future Testing Strategy

The finished project will include automated tests for important user journeys, such as:

- Loading the homepage
- Opening and closing the mobile navigation
- Navigating to the reservation page
- Validating reservation details
- Completing a valid reservation
- Displaying a booking confirmation

Playwright will be considered for end-to-end browser testing.

## Author

**Vladislav Glovatskiy**

- [GitHub](https://github.com/glovatskiy)

## Acknowledgements

Little Lemon is a fictional restaurant project from the Meta Front-End Developer Professional Certificate.

I created the **Little Lemon Design** Figma project and implemented the responsive React application as a learning and portfolio project.