# Ivan Swanepoel's Personal Webpage

Welcome to the documentation for my personal portfolio website, a showcase of my skills as a web developer with a focus on modern, interactive, and visually appealing design.

## URL
Live at: [https://ivan-swanepoel.fly.dev/](https://ivan-swanepoel.fly.dev/)

## Overview
This webpage is my digital portfolio, designed to highlight my projects, skills, and passion for web development. Built with a modern tech stack, it features smooth animations, dynamic text effects, and a captivating background to create an engaging user experience. The site is deployed on Fly.io, a developer-friendly platform that ensures fast and reliable hosting.

## Features
- **Dynamic Text Animations**: Powered by Typed.js, the homepage features a typewriter effect that cycles through phrases like "Web Developer," "Creative Coder," or "UI/UX Enthusiast" to introduce my skills dynamically.
- **Interactive Background**: A particle.js-powered background adds a subtle, animated effect, creating a modern and immersive visual experience.
- **Smooth Scrolling Animations**: Using Aos (Animate on Scroll), elements fade in or slide into view as you scroll, enhancing the site’s interactivity.
- **Iconography**: Clean and modern icons from Lucide-react and react-icons libraries enhance the visual appeal and usability of navigation and project sections.
- **Responsive Design**: The site is fully responsive, ensuring a seamless experience across desktops, tablets, and mobile devices.

## Design and Styling
- **Color Scheme**: The website uses a sleek, dark background (e.g., deep navy or charcoal) paired with vibrant accent colors like electric blue, neon purple, or crisp white. This creates a modern, high-contrast look that’s easy on the eyes and highlights key content.
- **Typography**: Clean, sans-serif fonts (likely Google Fonts or similar) ensure readability and a professional aesthetic.
- **Modular CSS**: Styling is handled with Vanilla Modular CSS, allowing for reusable, maintainable styles that keep the codebase clean and organized.

## Tech Stack
Here’s a breakdown of the technologies used to build the site:

- **React**: A JavaScript library for building fast, component-based user interfaces. The site is structured as a single-page application (SPA) with reusable components for sections like the header, project cards, and footer.
- **Vanilla Modular CSS**: Custom CSS modules provide a lightweight, scalable approach to styling, avoiding the overhead of larger frameworks like Bootstrap.
- **Aos (Animate on Scroll)**: This library adds smooth animations to elements as they enter the viewport, creating a dynamic scrolling experience (e.g., project cards fading in).
- **Lucide-react**: A lightweight icon library for React, used for clean, minimalistic icons in navigation menus or project descriptions.
- **react-icons**: Supplements Lucide-react with additional icons (e.g., social media or tech stack logos) for a consistent visual style.
- **particle.js**: Creates an animated, interactive background with floating particles, adding a modern, techy vibe to the homepage.
- **Typed.js**: Powers the typewriter animation on the homepage, cycling through text strings to create an engaging introduction. For example, it might display “Hi, I’m Ivan, a [Web Developer | UI Designer | Code Enthusiast].”

## Deployment
- **Platform**: Hosted on Fly.io, a platform that simplifies deployment by running containerized apps close to users for low latency.
- **Process**: The site is deployed using Fly’s CLI (`flyctl`), which automates the creation of a Docker container and scales the app globally via Fly’s Anycast network.

## Author
**Ivan Swanepoel**  
I’m a passionate web developer based in South Africa. With a focus on creating user-friendly, visually appealing websites, I enjoy combining modern JavaScript frameworks like React with creative design principles to build impactful digital experiences. When I’m not coding, you might find me exploring the outdoors or brewing the perfect cup of coffee.

## Getting Started
To run this project locally:
1. **Clone the Repository**: If available, clone the project from its GitHub repository (or equivalent).
2. **Install Dependencies**: Run `npm install` to install React, Typed.js, particle.js, Aos, Lucide-react, react-icons, and other dependencies.
3. **Start the Development Server**: Use `npm start` to launch the React app locally (typically at `http://localhost:3000`).
4. **Explore the Code**: Check the `src` folder for React components, CSS modules, and JavaScript files configuring Typed.js and particle.js.
5. **Deploy to Fly.io**: Install `flyctl`, authenticate with `flyctl auth login`, and deploy using `flyctl deploy`.

## Future Improvements
- Integrate a backend (e.g., Node.js with Express) for dynamic content like a blog.
- Experiment with additional animations or transitions to enhance user engagement.
- Optimize performance by lazy-loading images and minifying assets.
