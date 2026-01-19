# 🌸 Anime-Inspired Cinematic Portfolio

Welcome to my digital realm. This portfolio is not just a collection of projects; it is a story-driven experience designed to feel like an anime opening sequence. Built with modern web technologies, it blends performance with high-end aesthetics.

## 📖 Overview

The website reimagines the traditional portfolio as a "Royal Decree" or a journey. Instead of a static list of skills, users are invited to unroll a scroll, explore a timeline of my life, and view my projects as distinct "artifacts." The entire experience is wrapped in a calming, night-themed atmosphere with floating sakura petals and soft, glowing interactions.

## ✨ Key Features

-   **Cinematic Intro**: A unique "Royal Scroll" opening animation that unrolls to reveal the welcome message.
-   **Immersive Atmosphere**: Global "Sakura Falling" particle effects and a deep "Night Sky" gradient background.
-   **Story-Driven Journey**: Education and Experience are visualized as a connected flow chart/timeline (`JourneyMap`).
-   **Interactive Artifacts**: Projects are displayed as glassmorphic cards with hover glow effects.
-   **Visual Skills**: Technical and soft skills are presented as an "Arsenal" with animated entry effects.
-   **Fully Responsive**: Optimized for generic mobile scrolling and touch interactions.
-   **Contact Hub**: A premium "End of Chapter" section making it easy to connect via Email, LinkedIn, or Phone.

## 📂 Folder Structure

The project follows a clean, modular architecture using the **Next.js App Router**:

```bash
portfolio-site/
├── 📁 app/                 # Main application routes
│   ├── globals.css        # Global styles & Tailwind theme variables
│   ├── layout.tsx         # Root layout (Fonts: Inter + Cinzel)
│   └── page.tsx           # Main entry point (Home)
├── 📁 components/          # Reusable UI components
│   ├── Certifications.tsx # "Honors" section
│   ├── Contact.tsx        # "New Chapter" contact section
│   ├── Hero.tsx           # Profile & Intro section
│   ├── IntroScroll.tsx    # The opening scroll animation
│   ├── JourneyMap.tsx     # Timeline of Experience/Education
│   ├── ProjectShowcase.tsx# Project cards
│   ├── SakuraBackground.tsx # Canvas-based particle system
│   └── Skills.tsx         # Skills visualization
├── 📁 data/                # Static content
│   └── resume.json        # Centralized data source for the entire site
├── 📁 public/              # Static assets (images, icons)
└── 📄 tailwind.config.ts   # Design tokens (colors, fonts)
```

## 🛠️ Technologies Used

This project adheres to a modern, type-safe, and high-performance stack:

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
*The React Framework for the Web. Used App Router for server components.*

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
*Library for building the user interface and managing component state.*

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
*Ensures type safety across the application, preventing runtime errors.*

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
*Utility-first CSS framework for rapid and consistent styling.*

![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
*Powering the complex animations, scroll transitions, and the "Royal Scroll" effect.*

![Lucide React](https://img.shields.io/badge/Lucide_React-F78166?style=for-the-badge&logo=lucide&logoColor=white)
*Beautiful, consistent icons used throughout the site.*

## 📜 License

For a personal portfolio website, the **MIT License** is highly recommended. 

-   **Why?**: It allows others to learn from your code, fork the repository, and use it as a template for their own portfolios (which is great for the open-source community!).
-   **Note**: This license covers the *code*. Your personal data (resume content), images, and specific branding remain yours.

```text
MIT License

Copyright (c) 2026 Gayatri Parimi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software...
```

## ✍️ Author

**Gayatri Parimi**  
*Undergraduate Student & Data Analyst*  
Crafting digital experiences with data and code.

[LinkedIn](https://www.linkedin.com/in/parimi-gayatri-682b04314) • [GitHub](https://github.com/GayatriParimiDev)
