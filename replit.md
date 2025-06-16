# StreamFlix - Video Streaming Platform

## Overview

StreamFlix is a modern video streaming platform built with a full-stack TypeScript architecture. The application features a Netflix-inspired UI with a clean, responsive design and follows a traditional client-server pattern with separate frontend and backend concerns.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session store with connect-pg-simple

### Project Structure
```
├── client/           # React frontend application
├── server/           # Express.js backend server
├── shared/           # Shared TypeScript schemas and types
└── migrations/       # Database migration files
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Automated database migrations via drizzle-kit
- **Connection**: Neon serverless PostgreSQL database

### Storage Interface
- **Current Implementation**: In-memory storage for development (`MemStorage`)
- **Production Ready**: Interface designed for easy migration to database storage
- **CRUD Operations**: Standardized interface for user management operations

### UI Components
- **Design System**: Netflix-inspired dark theme with custom CSS variables
- **Component Library**: Complete shadcn/ui implementation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Icons**: Lucide React icon library

### Development Tools
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code
- **Development Server**: Vite with HMR and Express.js concurrent development
- **Code Quality**: ESLint and TypeScript strict mode
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation

## Data Flow

### Authentication Flow
- User registration and login through Express.js API endpoints
- Session management using PostgreSQL-backed sessions
- Shared user types between frontend and backend via shared schemas

### API Communication
- RESTful API design with `/api` prefix for all backend routes
- Type-safe API client using TanStack Query
- Centralized error handling and response formatting
- Request/response logging middleware for development

### State Management
- TanStack Query for server state caching and synchronization
- Local component state for UI interactions
- No global client-side state management (relies on server state)

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type system
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### UI/UX Dependencies
- **class-variance-authority**: Component variant management
- **clsx**: Conditional CSS class composition
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel component

## Deployment Strategy

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild compiles TypeScript server to `dist/index.js`
- Single deployment artifact with both frontend and backend

### Environment Configuration
- PostgreSQL database URL via `DATABASE_URL` environment variable
- Development/production environment detection via `NODE_ENV`
- Replit-specific configuration for seamless deployment

### Development Workflow
- `npm run dev`: Concurrent development with Vite HMR and Express server
- `npm run build`: Production build process
- `npm run start`: Production server startup
- `npm run db:push`: Database schema synchronization

### Hosting Platform
- **Platform**: Replit with autoscale deployment
- **Port Configuration**: Internal port 5000, external port 80
- **Database**: Replit PostgreSQL 16 module integration
- **Build Process**: Automated via Replit deployment configuration

## Recent Changes

- June 16, 2025: Initial StreamFlix setup with Netflix-inspired design
- June 16, 2025: Added multi-page routing (Home, Shows, Pricing, Contact)
- June 16, 2025: Integrated user-provided show posters (Stranger Things, Alice in Borderland, Friends, etc.)
- June 16, 2025: Created pricing plans (₹150 monthly, ₹500 quarterly, ₹900 semi-annual, ₹1800 yearly)
- June 16, 2025: Added movie categories section and contact page with social media links

## User Preferences

Preferred communication style: Simple, everyday language.