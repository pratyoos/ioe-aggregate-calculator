

# IOE Aggregate Percentage Calculator

A React + TypeScript application to calculate the aggregate percentage for IOE's BCT and BCE programs.

## Features

- **Program Selection**: Choose between BCT or BCE programs.
- **Semester-wise Input**: Enter marks for each semester with real-time percentage updates.
- **Weighted Aggregate**: Automatically calculates the weighted aggregate percentage.
- **Division/Pass Status**: Displays pass/fail status and division based on IOE criteria.
- **Responsive UI**: Clean and modern interface styled with Tailwind CSS.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/pratyoos/ioe-aggregate-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ioe-aggregate-calculator
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Run the development server:
   ```bash
   pnpm run dev
   ```
5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Project Structure

- `/src/components`: Reusable UI components for the application.
- `/src/lib`: Utility functions such as result message generator.
- `/src/logic`: Custom hooks and logic for state management and aggregate calculations.
- `App.tsx`: Main application component that ties everything together.

## Author

Made with ❤️ by [Pratyoos](https://github.com/pratyoos)
