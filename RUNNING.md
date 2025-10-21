# Running the MERN Todo Application

This guide explains how to run both frontend and backend servers simultaneously on **macOS**, **Windows**, and **Linux**.

## 🚀 Quick Start

### Single Command to Start Both Servers

```bash
npm run dev
```

This command will start:
- **Frontend (Vite)** on http://localhost:8080
- **Backend (Express)** on http://localhost:5001

## 📋 Prerequisites

Before running the application, ensure you have:

1. **Node.js** (v14 or higher)
2. **npm** (comes with Node.js)
3. **MongoDB** connection string (already configured in `server/.env`)

## 🔧 Initial Setup

### 1. Install Dependencies

**Install root dependencies:**
```bash
npm install
```

**Install server dependencies:**
```bash
cd server
npm install
cd ..
```

### 2. Environment Configuration

The environment is already configured in `server/.env`:
- MongoDB URI: Connected to your Atlas cluster
- JWT Secret: Configured for authentication
- Server Port: 5001
- Server Host: 0.0.0.0

## 🎯 Available Commands

### Development Mode (Recommended)

**Start both servers simultaneously:**
```bash
npm run dev
```

This command uses `concurrently` to run both frontend and backend with:
- Color-coded output (Frontend: cyan, Backend: magenta)
- Named prefixes for easy identification
- Auto-restart on backend file changes (via nodemon)
- Hot Module Replacement (HMR) on frontend (via Vite)

### Individual Server Commands

**Frontend only:**
```bash
npm run client
```

**Backend only:**
```bash
npm run server
```

Or from the server directory:
```bash
cd server
npm run dev
```

### Production Commands

**Build frontend for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

**Start backend in production:**
```bash
cd server
npm start
```

## 🖥️ Platform-Specific Notes

### macOS
- Uses `npx` for cross-platform compatibility
- No additional configuration needed
- Command: `npm run dev`

### Windows
- Uses `npx` to avoid path issues
- Works with both Command Prompt and PowerShell
- Command: `npm run dev`

### Linux
- Uses `npx` for consistency
- Works with all major distributions
- Command: `npm run dev`

## 🔍 Troubleshooting

### Port Already in Use

If you see "EADDRINUSE" errors:

**Kill processes on specific ports:**

**macOS/Linux:**
```bash
lsof -ti:8080 | xargs kill -9  # Frontend
lsof -ti:5001 | xargs kill -9  # Backend
```

**Windows:**
```bash
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

### Permission Denied Errors

If you encounter permission errors:

```bash
# Reinstall node_modules
rm -rf node_modules
npm install

# Reinstall server node_modules
cd server
rm -rf node_modules
npm install
```

### MongoDB Connection Issues

If MongoDB fails to connect:
1. Check your internet connection
2. Verify the MongoDB URI in `server/.env`
3. Ensure your IP is whitelisted in MongoDB Atlas

### Module Not Found Errors

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Do the same for server
cd server
rm -rf node_modules package-lock.json
npm install
```

## 📦 Project Structure

```
mern-todo-magic-main/
├── src/                    # Frontend React source
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── contexts/          # React contexts (Auth)
│   └── lib/               # Utilities and API
├── server/                 # Backend Express server
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── server.js          # Server entry point
├── package.json           # Root dependencies
└── vite.config.ts         # Vite configuration
```

## 🌐 Application URLs

Once both servers are running:

- **Frontend:** http://localhost:8080
- **Backend API:** http://localhost:5001/api
- **Health Check:** http://localhost:5001/api/health

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/logout` - Logout (protected)
- `PUT /api/auth/profile` - Update profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)

### Todos
- `GET /api/todos` - Get all user todos (protected)
- `POST /api/todos` - Create new todo (protected)
- `PUT /api/todos/:id` - Update todo (protected)
- `DELETE /api/todos/:id` - Delete todo (protected)

## 🛠️ Development Tools

### Backend Auto-Restart
The backend uses **nodemon** which automatically restarts the server when you save changes to:
- `.js` files
- `.json` files
- `.mjs` files
- `.cjs` files

### Frontend Hot Module Replacement
The frontend uses **Vite** with HMR, which instantly updates the browser when you save changes to:
- `.tsx` files
- `.ts` files
- `.css` files
- `.jsx` files

## 📝 Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend |
| `npm run client` | Start frontend only (Vite) |
| `npm run server` | Start backend only (Express) |
| `npm run build` | Build frontend for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Features

- ✅ Authentication (Login/Register)
- ✅ Protected Routes
- ✅ User Profile Management
- ✅ Password Change
- ✅ Todo CRUD Operations
- ✅ Real-time Updates
- ✅ Responsive Design
- ✅ Toast Notifications

## 🤝 Support

If you encounter any issues:
1. Check this README first
2. Verify all dependencies are installed
3. Ensure MongoDB connection is working
4. Check the terminal output for specific error messages

---

**Happy Coding! 🎉**