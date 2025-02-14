# JioCinema Clone

A modern clone of JioCinema built with React and TailwindCSS, featuring a responsive UI and Redux state management.

## Live Demo

[View Live Demo](#) *(Coming soon)*

## Features

- Responsive UI with TailwindCSS
- State management with Redux Toolkit
- Routing with React Router
- Carousel component for featured content
- Channel and show listings
- Search functionality
- Dark mode support

## Technologies Used

- React 19
- Redux Toolkit
- React Router
- TailwindCSS
- Vite
- React Icons

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/jiocinema-clone.git
```
2. Install dependencies
```bash
cd jiocinema-clone
npm install
```
3. Start development server
```bash
npm run dev
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Project Structure

```
jiocinema/
├── public/              # Static assets
├── src/
│   ├── assets/           # Images and icons
│   ├── components/       # Reusable components
│   │   ├── carousel/     # Carousel component
│   │   ├── channels/     # Channel listings
│   │   ├── featured/     # Featured content
│   │   ├── header/       # Header component
│   │   ├── shows/        # Show listings
│   │   └── tags/        # Tag components
│   ├── pages/            # Page components
│   ├── redux/            # Redux store and slices
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies
├── README.md            # Project documentation
├── vite.config.js       # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## License

MIT License

Copyright (c) 2025 Diago Mendonca

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
