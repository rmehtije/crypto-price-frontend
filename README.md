# Crypto Price Tracker Frontend

This is the frontend component for a cryptocurrency price tracking application, developed as a test assignment for a Senior FullStack Developer position.

## 🔗 Project Links
- **Backend Repository**: [Link to backend repository](https://github.com/your-username/backend-repo-name)

## 📋 Overview

This frontend application provides a user interface for viewing real-time cryptocurrency price data. It connects to the backend API to fetch and display current cryptocurrency prices in an intuitive and responsive interface.

## 🛠️ Technologies & Packages

### Core Framework
- **Svelte** (^5.38.1) - Modern JavaScript framework for building user interfaces

### Build Tool
- **Vite** (^7.1.2) - Fast build tool and development server

### Styling
- **TailwindCSS** (^4.1.12) - Utility-first CSS framework

### Development Tools
- **TypeScript** - Type safety and developer experience

## 🚀 Installation & Local Development

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables** (if needed)
   Create a `.env` file in the root directory and add your configurations:
   ```env
   VITE_API_BASE_URL="http://backend:3000/api"
   ```

4. **Start the development environment**
   ```bash
   docker-compose up -d --build
   ```



## 🧪 Running Tests

Execute the test suite with the following command:

```bash
yarn test
```

## 🤔 Technology Choices

The technology stack was selected for several important reasons:

1. **Team Alignment**: The primary consideration was matching the existing technology stack used by the development team
2. **Performance**: Svelte offers excellent runtime performance with minimal overhead compared to other frameworks
3. **Developer Experience**: Vite provides extremely fast hot module replacement and build times, significantly improving development workflow
4. **Modern Tooling**: These tools represent current best practices in frontend development
5. **Learning Opportunity**: This project provided valuable experience with emerging technologies that are gaining industry adoption
6. **CSS Efficiency**: TailwindCSS enables rapid UI development with consistent design patterns

## 🔮 Future Enhancements

While this project currently focuses on displaying cryptocurrency pair prices, several enhancements could be implemented:

1. **Historical Data** - Add endpoints for historical price data and charts
2. **WebSocket Support** - Real-time price updates
3. **Multiple Exchange Support** - Aggregate prices from various exchanges
4. **Advanced Caching** - Redis integration for distributed caching
5. **Monitoring** - Add health checks and performance monitoring

## 📞 Support

For questions or issues regarding this frontend application, please open an issue in the repository.