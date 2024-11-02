# Dog Breeds Wiki

This project is part of the Advanced Web Applications course at LUT University. It generates a wiki-like page for various dog breeds, displaying images and summaries fetched from external APIs. The project uses Parcel as the bundler.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [APIs Used](#apis-used)
- [Requirements and Scoring](#requirements-and-scoring)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/NikodemiusTKT/lut-adv-web-apps-2024-asgmt-git dog-breeds-wiki
   ```

   ```sh
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

## Requirements and Scoring

### Required Features

- [x] **HTML Generator in JavaScript**: The project should generate at least five wiki items using JavaScript functions such as `createElement` and `appendChild`. All wiki items should be generated with JavaScript inside a `<div>` with the class `container`.
- [x] **Dog Image API**: The project should fetch random pictures of dogs from the Dog CEO API. Each wiki item should have a header with the breed name and a picture fetched from the API.
- [x] **Mobile First CSS**: The project should make the page look good on mobile screens. The width of images should be set to 100%, and margins and padding should be added to elements for better spacing.
- [x] **Media Queries**: The project should use media queries to adjust the layout for desktop screens (minimum width 600px). Flexbox should be used to arrange text and images side by side.
- [x] **Wiki Text from Wikipedia**: The project should fetch the summary for each breed from the Wikipedia API and use the `extract` value as the text for each wiki item.
