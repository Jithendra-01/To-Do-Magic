# Contributing to MERN Todo Magic

First off, thank you for considering contributing to MERN Todo Magic! 🎉

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if applicable**
- **Include your environment details** (OS, Node version, browser, etc.)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- **A clear and descriptive title**
- **A detailed description of the proposed feature**
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/mern-todo-magic.git
   cd mern-todo-magic
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run dev
   # Test thoroughly in browser
   ```

5. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Provide a clear description of the changes
   - Reference any related issues
   - Include screenshots for UI changes

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   cd server && npm install && cd ..
   ```

2. Set up environment variables:
   - Copy `server/.env.example` to `server/.env`
   - Add your MongoDB connection string

3. Start development servers:
   ```bash
   npm run dev
   ```

## Code Style Guidelines

### JavaScript/TypeScript

- Use TypeScript for frontend code
- Follow ESLint rules
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

### React Components

- Use functional components with hooks
- Follow React best practices
- Use TypeScript interfaces for props
- Keep components focused on single responsibility

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow existing color scheme
- Ensure responsive design
- Test on multiple screen sizes

### Backend

- Follow REST API conventions
- Use async/await for asynchronous operations
- Add error handling
- Validate input data
- Add comments for complex logic

## Commit Message Guidelines

Follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add todo filtering by status
fix: resolve MongoDB connection timeout
docs: update installation instructions
style: format code with prettier
refactor: simplify todo controller logic
```

## Testing

Before submitting a PR, ensure:

- [ ] The app starts without errors (`npm run dev`)
- [ ] All existing features still work
- [ ] New features work as expected
- [ ] No console errors in browser
- [ ] Backend API endpoints respond correctly
- [ ] Changes work on mobile devices
- [ ] Code follows style guidelines

## Questions?

Feel free to open an issue with the `question` label if you need help!

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different opinions and experiences

Thank you for contributing! 🙌
