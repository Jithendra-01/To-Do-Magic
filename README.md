# MERN Todo Magic ✨````markdown

# MERN Todo Magic

A beautiful, full-stack todo application built with the MERN stack (MongoDB, Express, React, Node.js), featuring a modern UI with shadcn-ui components and Tailwind CSS.

A modern, full-featured todo application built with React, TypeScript, Vite, and shadcn-ui.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)

![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)## Project info

![React](https://img.shields.io/badge/React-18.3-blue)

![Node.js](https://img.shields.io/badge/Node.js-Latest-green)This project uses modern web technologies to provide a clean and responsive todo management experience.

![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

![License](https://img.shields.io/badge/License-MIT-yellow)## How to edit this code



## ✨ Features**Local Development**



- ✅ **Full CRUD Operations** - Create, Read, Update, Delete todosClone this repository and work with your preferred IDE:

- 🗄️ **MongoDB Integration** - Persistent data storage with MongoDB Atlas

- 🎨 **Beautiful UI** - Modern design with shadcn-ui componentsThe only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

- ⚡ **Fast Development** - Vite for lightning-fast HMR

- 📱 **Responsive Design** - Works on desktop, tablet, and mobileFollow these steps:

- 🌐 **Network Access** - Accessible from any device on your network

- 🔄 **Real-time Updates** - Instant sync with database```sh

- 🎭 **Smooth Animations** - Polished UI with Tailwind animations# Step 1: Clone the repository using the project's Git URL.

- 🔧 **TypeScript** - Type-safe code for better development experiencegit clone <YOUR_GIT_URL>

- 🚀 **One-Command Start** - Run both servers concurrently

# Step 2: Navigate to the project directory.

## 🛠️ Tech Stackcd <YOUR_PROJECT_NAME>



### Frontend# Step 3: Install the necessary dependencies.

- **React 18** - Modern UI library with hooksnpm i

- **TypeScript** - Type-safe JavaScript

- **Vite** - Next-generation frontend tooling# Step 4: Start the development server with auto-reloading and an instant preview.

- **shadcn-ui** - Beautiful, accessible component librarynpm run dev

- **Tailwind CSS** - Utility-first CSS framework```

- **React Router v6** - Client-side routing

- **Axios** - Promise-based HTTP client## What technologies are used for this project?

- **Sonner** - Toast notifications

- **Lucide React** - Beautiful icon libraryThis project is built with:



### Backend- **Vite** - Fast build tool and dev server

- **Node.js** - JavaScript runtime- **TypeScript** - Type-safe JavaScript

- **Express.js** - Fast, minimalist web framework- **React 18** - Modern UI library

- **MongoDB** - NoSQL database- **shadcn-ui** - Beautiful, accessible component library

- **Mongoose** - Elegant MongoDB object modeling- **Tailwind CSS** - Utility-first CSS framework

- **CORS** - Cross-Origin Resource Sharing- **React Router** - Client-side routing

- **dotenv** - Environment variable management- **React Hook Form** - Form validation

- **Nodemon** - Auto-restart on file changes- **TanStack Query** - Data fetching and state management



### Development Tools## How can I deploy this project?

- **Concurrently** - Run multiple commands simultaneously

- **ESLint** - Code lintingYou can deploy this project to any static hosting service:

- **PostCSS** - CSS processing

- **Autoprefixer** - CSS vendor prefixing- **Vercel**: `npm run build` then deploy the `dist` folder

- **Netlify**: Connect your repo or drag-drop the `dist` folder

## 📁 Project Structure- **GitHub Pages**: Use GitHub Actions to build and deploy

- **Any static host**: Upload the `dist` folder after building

```

mern-todo-magic-main/````

│
├── src/                          # Frontend React application
│   ├── components/               # React components
│   │   └── ui/                   # shadcn-ui components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── checkbox.tsx
│   │       ├── card.tsx
│   │       ├── toast.tsx
│   │       └── ... (more components)
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── lib/                      # Utility functions
│   │   ├── api.ts               # API client for backend
│   │   └── utils.ts             # Helper functions
│   │
│   ├── pages/                    # Page components
│   │   ├── Index.tsx            # Main todo page
│   │   └── NotFound.tsx         # 404 page
│   │
│   ├── App.tsx                   # Root component with routing
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles
│
├── server/                       # Backend Express application
│   ├── controllers/              # Request handlers
│   │   └── todoController.js    # Todo CRUD operations
│   │
│   ├── models/                   # Mongoose models
│   │   └── Todo.js              # Todo schema
│   │
│   ├── routes/                   # API routes
│   │   └── todoRoutes.js        # Todo endpoints
│   │
│   ├── .env                      # Environment variables (not in git)
│   ├── server.js                 # Express server setup
│   └── package.json             # Backend dependencies
│
├── public/                       # Static assets
│   ├── favicon.ico
│   └── robots.txt
│
├── .env                          # Frontend environment variables
├── .gitignore                    # Git ignore rules
├── package.json                  # Frontend dependencies
├── vite.config.ts               # Vite configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── components.json              # shadcn-ui configuration
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB Atlas Account** - [Sign up free](https://www.mongodb.com/cloud/atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-todo-magic.git
   cd mern-todo-magic
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Set up environment variables**

   Create `server/.env` file:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   HOST=0.0.0.0
   ```

   Create `.env` file in root (optional):
   ```env
   VITE_API_URL=/api
   ```

5. **Start the application**
   ```bash
   npm run dev
   ```

   This will start both frontend (port 8080) and backend (port 5000) concurrently!

6. **Open your browser**
   ```
   http://localhost:8080
   ```

## 🎮 Available Scripts

### Development

```bash
npm run dev          # Start both frontend and backend (recommended)
npm run client       # Start only frontend (Vite dev server)
npm run server       # Start only backend (Express server)
```

### Production

```bash
npm run build        # Build frontend for production
npm run preview      # Preview production build
```

### Code Quality

```bash
npm run lint         # Run ESLint
```

## 🌐 API Endpoints

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/todos` | Get all todos | - |
| GET | `/todos/:id` | Get single todo | - |
| POST | `/todos` | Create new todo | `{ "title": "string" }` |
| PUT | `/todos/:id` | Update todo | `{ "title": "string", "completed": boolean }` |
| DELETE | `/todos/:id` | Delete todo | - |
| DELETE | `/todos` | Delete all todos | - |
| GET | `/health` | Health check | - |

### Example API Usage

```bash
# Get all todos
curl http://localhost:5000/api/todos

# Create a todo
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn MERN Stack"}'

# Update a todo
curl -X PUT http://localhost:5000/api/todos/<todo-id> \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'

# Delete a todo
curl -X DELETE http://localhost:5000/api/todos/<todo-id>
```

## 🌍 Network Access

The app is configured to be accessible from any device on your local network:

- **Localhost:** `http://localhost:8080`
- **Network:** `http://YOUR_IP:8080` (e.g., `http://192.168.0.103:8080`)

To find your IP address:
```bash
# Windows
ipconfig

# Mac/Linux
ifconfig
```

## 🎨 Customization

### Styling

- Modify colors in `src/index.css`
- Update Tailwind config in `tailwind.config.ts`
- Customize components in `src/components/ui/`

### Backend

- Add new routes in `server/routes/`
- Create models in `server/models/`
- Add controllers in `server/controllers/`

### Frontend

- Add pages in `src/pages/`
- Create components in `src/components/`
- Update API calls in `src/lib/api.ts`

## 📦 Deployment

### Frontend (Vercel/Netlify)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

3. Set environment variable:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```

### Backend (Heroku/Railway/Render)

1. Push the `server` folder to your hosting service

2. Set environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   HOST=0.0.0.0
   ```

3. Ensure `server/package.json` has start script:
   ```json
   "scripts": {
     "start": "node server.js"
   }
   ```

## 🔐 Security

- ✅ Environment variables are excluded from git
- ✅ CORS is configured (restrict in production)
- ✅ MongoDB connection string is secured
- ✅ Input validation on backend
- ⚠️ For production: Add rate limiting, authentication, and HTTPS

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify your MongoDB URI in `server/.env`
- Check MongoDB Atlas network access (whitelist your IP)
- Ensure database user has proper permissions

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### Cannot Access from Other Devices
- Check Windows Firewall settings
- Ensure both devices are on same network
- Verify IP address is correct

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [shadcn-ui](https://ui.shadcn.com/) - For the beautiful component library
- [Vite](https://vitejs.dev/) - For the amazing build tool
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - For cloud database hosting
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](./screenshots/desktop.png)

### Mobile View
![Mobile Screenshot](./screenshots/mobile.png)

### Adding Todo
![Add Todo](./screenshots/add-todo.png)

## 🎯 Future Enhancements

- [ ] User authentication (JWT)
- [ ] Todo categories/tags
- [ ] Due dates and priorities
- [ ] Search and filter functionality
- [ ] Dark/Light theme toggle
- [ ] Drag and drop reordering
- [ ] Export/Import todos
- [ ] Recurring todos
- [ ] Collaborative features
- [ ] Push notifications

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🎨 First Contentful Paint: < 1s
- 📦 Bundle Size: Optimized with Vite
- 🔄 Hot Module Replacement: Instant updates

## 🔗 Links

- [Live Demo](https://your-demo-url.com) - Try it out!
- [API Documentation](./docs/API.md) - Detailed API docs
- [Deployment Guide](./docs/DEPLOYMENT.md) - How to deploy

---

**Built with ❤️ using the MERN Stack**

If you found this project helpful, please give it a ⭐️!
