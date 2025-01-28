# Personal Finance App Frontend

This is the frontend of a Personal Finance Application built using **Next.js** and **TypeScript**. The application provides a user-friendly interface for managing personal finances, including wallet creation, transaction tracking, budget goals, and saving targets.

## Features

- **User Authentication**: Register and log in securely.
- **Wallet Management**: Manage multiple wallets with individual balances and currencies.
- **Transaction Tracking**: Record income and expenses for detailed financial analysis.
- **Budget Goals**: Create and track budgets by category and time frame.
- **Saving Goals**: Set and monitor saving targets to achieve your financial aspirations.

## API Integration

The frontend communicates with the backend API documented at [https://personal-finance.apidog.io/](https://personal-finance.apidog.io).

## Project Structure

```
├── node_modules
├── public
├── src
│   ├── components
│   ├── pages
│   │   ├── api
│   │   └── auth
│   ├── styles
│   ├── utils
│   ├── hooks
│   ├── services
│   └── contexts
├── .env.local
├── .gitignore
├── next.config.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vercel.json
```

## Getting Started

### Prerequisites

- Node.js
- Backend API (running locally or accessible online)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/personal-finance-frontend.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory with the following variables:

   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   The application will be running at `http://localhost:3000`.

### Building for Production

To build the application for production, run:

```bash
npm run build
npm start
```

The production build will be available at `http://localhost:3000`.

## Technologies Used

- **Next.js**: Framework for building React applications with server-side rendering.
- **TypeScript**: Type-safe programming for scalable code.
- **Axios**: For API communication.
- **React Context**: State management across the application.

## Deployment

You can deploy this project using platforms like **Vercel** or **Netlify** for seamless deployment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.