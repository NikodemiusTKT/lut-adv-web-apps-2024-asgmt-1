# Dog Breeds Wiki

This project generates a wiki-like page for various dog breeds, displaying images and summaries fetched from external APIs. It uses Parcel as the bundler.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [APIs Used](#apis-used)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/NikodemiusTKT/lut-adv-web-apps-2024-asgmt-1
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

   This will start the Parcel development server and open the project in your default web browser.

2. **Build for production:**

   ```sh
   npm run build
   ```

   This will create a `dist` directory with the production build of your project.

## Project Structure

```
dog-breeds-wiki/
├── dist/                   # Production build output
├── node_modules/           # Node.js modules
├── src/                    # Source files
│   ├── index.html          # HTML file
│   ├── index.js            # JavaScript entry point
│   ├── styles.css          # CSS styles
├── .gitignore              # Git ignore file
├── package.json            # NPM package configuration
├── README.md               # Project README file
```

## APIs Used

- **Dog CEO API**: Fetches random images of dog breeds.
- **Wikipedia API**: Fetches summaries of dog breeds.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
