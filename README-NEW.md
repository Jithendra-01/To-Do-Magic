# MERN Todo Magic ✨

A beautiful, full-stack todo application with authentication, built with the MERN stack (MongoDB, Express, React, Node.js), featuring a modern UI with shadcn-ui components and Tailwind CSS.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![React](https://img.shields.io/badge/React-18.3-blue)
![Node.js](https://img.shields.io/badge/Node.js-Latest-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### Authentication & Security
- 🔐 **User Authentication** - Secure login and registration with JWT
- 👤 **User Profiles** - Manage your profile and change password
- 🛡️ **Protected Routes** - Secure access to user-specific data
- 🔒 **Password Hashing** - Bcrypt encryption for secure password storage

### Todo Management
- ✅ **Full CRUD Operations** - Create, Read, Update, Delete todos
- 📝 **User-Specific Todos** - Each user has their own private todos
- ✔️ **Task Completion** - Mark tasks as complete/incomplete
- 🗑️ **Quick Delete** - Remove completed or unwanted tasks
- 📊 **Progress Tracking** - See completion statistics

### User Experience
- 🎨 **Beautiful UI** - Modern design with shadcn-ui components
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎭 **Smooth Animations** - Polished UI with elegant transitions
- 🌈 **Gradient Effects** - Eye-catching visual design
- 💫 **Glass-morphism** - Modern frosted glass card effects
- 🔔 **Toast Notifications** - Real-time feedback for all actions

### Developer Features
- ⚡ **Fast Development** - Vite for lightning-fast HMR
- 🔧 **TypeScript** - Type-safe code for better development experience
- 🚀 **One-Command Start** - Run both servers simultaneously
- 🔄 **Auto-Reload** - Backend auto-restarts on file changes
- 🌐 **Network Access** - Test on any device on your network

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - Beautiful, accessible component library
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation
- **Axios** - Promise-based HTTP client
- **React Router** - Client-side routing
- **Sonner** - Beautiful toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Fast, minimalist web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mern-todo-magic-main
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install server dependencies
   cd server
   npm install
   cd ..
   ```

3. **Configure environment variables**
   
   The `server/.env` file is already configured with:
   - MongoDB connection string
   - JWT secret
   - Server port and host

4. **Start the application**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:8080
   - Backend: http://localhost:5001

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend (recommended) |
| `npm run client` | Start frontend only |
| `npm run server` | Start backend only |
| `npm run build` | Build frontend for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Application Structure

```
mern-todo-magic-main/
├── src/                      # Frontend source code
│   ├── components/          # React components
│   │   ├── ui/             # shadcn-ui components
│   │   └── ProtectedRoute.tsx
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx # Authentication context
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Todo dashboard
│   │   ├── Login.tsx       # Login page
│   │   ├── Register.tsx    # Registration page
│   │   ├── Profile.tsx     # Profile page
│   │   └── NotFound.tsx    # 404 page
│   ├── lib/                # Utilities
│   │   ├── api.ts          # API client
│   │   └── utils.ts        # Helper functions
│   └── hooks/              # Custom React hooks
├── server/                  # Backend source code
│   ├── controllers/        # Route controllers
│   │   ├── authController.js
│   │   └── todoController.js
│   ├── models/             # MongoDB models
│   │   ├── User.js
│   │   └── Todo.js
│   ├── routes/             # API routes
│   │   ├── authRoutes.js
│   │   └── todoRoutes.js
│   ├── middleware/         # Custom middleware
│   │   └── auth.js
│   ├── .env                # Environment variables
│   └── server.js           # Server entry point
├── public/                  # Static assets
├── package.json            # Root dependencies
└── vite.config.ts          # Vite configuration
```

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
- `GET /api/todos/:id` - Get single todo (protected)
- `POST /api/todos` - Create new todo (protected)
- `PUT /api/todos/:id` - Update todo (protected)
- `DELETE /api/todos/:id` - Delete todo (protected)
- `DELETE /api/todos` - Delete all todos (protected)

## 🎯 Usage Guide

### Getting Started

1. **Register an Account**
   - Visit http://localhost:8080
   - Click "Create one here" on the login page
   - Fill in your name, email, and password
   - Click "Create Account"

2. **Login**
   - Enter your email and password
   - Click "Sign In"
   - You'll be redirected to your dashboard

3. **Manage Todos**
   - Add tasks using the input field
   - Click the checkbox to mark as complete
   - Click the trash icon to delete
   - Hover over tasks to see delete button

4. **Update Profile**
   - Click the "Profile" button or your avatar
   - Update your name or email
   - Change your password if needed
   - Click "Save Changes"

5. **Logout**
   - Click the "Logout" button in the top right

## 🔒 Security Features

- **Password Hashing** - All passwords are hashed with bcrypt (12 rounds)
- **JWT Authentication** - Secure token-based authentication
- **Protected Routes** - Frontend and backend route protection
- **Email Validation** - Prevents duplicate accounts
- **CORS Configuration** - Secure cross-origin requests
- **Environment Variables** - Sensitive data in .env files
- **Token Expiration** - JWTs expire after 7 days
- **Automatic Logout** - Expired tokens trigger logout

## 🎨 UI Features

- **Glass-morphism Cards** - Beautiful frosted glass effect
- **Gradient Backgrounds** - Animated gradient blurs
- **Smooth Transitions** - CSS transitions on all interactions
- **Hover Effects** - Interactive hover states
- **Loading States** - Visual feedback during operations
- **Form Validation** - Real-time input validation
- **Error Messages** - Clear, helpful error messages
- **Success Toasts** - Confirmation for successful actions
- **Responsive Layout** - Mobile-first design
- **Dark Mode Ready** - Theme system in place

## 🌍 Cross-Platform Support

This application works on:
- ✅ macOS
- ✅ Windows
- ✅ Linux

The `npm run dev` command uses `npx` for cross-platform compatibility.

## 📝 Environment Variables

### Server (.env)
```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Server Configuration
PORT=5001
HOST=0.0.0.0
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [shadcn-ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling
- [MongoDB](https://www.mongodb.com/) - NoSQL database

## 📞 Support

For detailed running instructions, see [RUNNING.md](./RUNNING.md)

---

**Made with ❤️ using the MERN Stack**