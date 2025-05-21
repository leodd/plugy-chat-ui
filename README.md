# Plugy Chat UI

An open-source, modern chatbot interface built with React, TypeScript, and Vite. This project provides a sleek and responsive user interface for building and integrating chatbots into your applications.

## Features

- ⚡️ React 18 for modern UI development
- 🔥 TypeScript for type safety
- 🎨 ESLint + Prettier for code quality
- 📦 Vite for fast development and building
- 💬 Modern chatbot interface components
- 🎯 Responsive design
- 🔌 Easy integration with any chatbot backend
- 🎨 Customizable themes and styling
- 🌐 Open source and free to use

## Use Cases

- Customer service chatbots
- AI assistant interfaces
- Support chat systems
- Interactive Q&A bots
- Educational chatbots
- Any application requiring a chat interface

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
  ├── assets/        # Static assets
  ├── components/    # React components
  ├── App.tsx        # Main App component
  ├── main.tsx       # Entry point
  └── vite-env.d.ts  # Vite type declarations
```

## Development Setup

This project uses Vite with React and TypeScript. The following plugins are configured:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) for Fast Refresh
- ESLint with TypeScript support
- Prettier for code formatting

## Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## ESLint Configuration

For production development, we recommend using type-aware lint rules. The project includes:

- TypeScript-specific ESLint rules
- React-specific linting rules
- Code style enforcement

See the ESLint configuration in the project for detailed setup.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
