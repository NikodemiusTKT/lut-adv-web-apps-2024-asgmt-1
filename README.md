# Dog Breeds Wiki

This project is part of the Advanced Web Applications course at LUT University. It generates a wiki-like page for various dog breeds, displaying images and summaries fetched from external APIs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [APIs Used](#apis-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git git clone https://github.com/NikodemiusTKT/lut-adv-web-apps-2024-asgmt-git dog-breeds-wiki
   cd dog-breeds-wiki
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Usage

1. **Start the development server:**

   ```sh
   npm start
   ```

2. **Build for production:**

   ```sh
   npm run build
   ```

3. **Open web browser:**

   Open your web browser and navigate to `http://localhost:1234.`

## Project Structure

```
dog-breeds-wiki/
├── dist/
├── node_modules/
├── src/
│   ├── index.js
│   ├── styles.css
├── index.html
├── .gitignore
├── package.json
├── README.md
```

## APIs Used

- **Dog CEO API**: Fetches random images of dog breeds.
- **Wikipedia API**: Fetches summaries of dog breeds.
