# Vue Express Template

A full-stack template with Vue.js frontend and Express.js backend.

## Features

- **Frontend**: Vue.js 3 with Composition API
- **Backend**: Express.js API server
- **Routing**: Vue Router for SPA
- **State Management**: Vuex
- **Build Tool**: Vite
- **Database**: MongoDB ready
- **Authentication**: Ready for implementation

## Project Structure
vue-express-template/
├── backend/ # Express API server
│ ├── app.js
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── middlewares/
│ └── package.json
├── frontend/ # Vue.js SPA
│ ├── src/
│ │ ├── components/
│ │ ├── views/
│ │ ├── router/
│ │ ├── store/
│ │ └── services/
│ └── package.json
└── package.json # Root package.json


## Quick Start

1. **Clone the template**
   ```bash
   git clone <your-repo-url>
   cd vue-express-template
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:frontend` - Start only frontend development server
- `npm run dev:backend` - Start only backend development server
- `npm run build` - Build frontend for production
- `npm start` - Start production server

## Development

### Backend Development
- Express.js server with CORS enabled
- API routes ready for implementation
- MongoDB integration ready

### Frontend Development
- Vue.js 3 with Composition API
- Vue Router for client-side routing
- Vuex for state management
- Vite for fast development and building

## License

MIT