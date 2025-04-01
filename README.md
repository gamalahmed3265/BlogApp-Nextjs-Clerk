# Blog App with Next.js

A modern blog application built with Next.js, featuring authentication with Clerk, rich text editing with Tiptap, and database management with Prisma.

![Project Screenshot](https://github.com/gamalahmed3265/BlogApp-Nextjs-Clerk/raw/main/screenshot.png)

## Features

- 🛠 Next.js 15 with React 19
- 🔐 Authentication with Clerk
- ✍️ Rich text editor with Tiptap extensions
- 🎨 Tailwind CSS with theme support
- 📊 Database management with Prisma
- 📱 Responsive design
- 💅 UI components with Radix UI
- 📝 Markdown content support
- 🔔 Toast notifications with Sonner

## Tech Stack

### Core

- **Next.js** (15.2.2) - React framework
- **React** (19.0.0) - Frontend library
- **TypeScript** - Type safety

### Authentication

- **@clerk/nextjs** (6.12.12) - User authentication

### Database

- **Prisma** (6.5.0) - ORM for database management
- **@prisma/client** (6.5.0) - Prisma client

### Rich Text Editing

- **@tiptap/react** (2.11.6) - Editor framework
- **@tiptap/starter-kit** (2.11.6) - Basic extensions
- **@tiptap/extension-highlight** (2.11.6) - Text highlighting
- **@tiptap/extension-text-align** (2.11.6) - Text alignment
- **@tiptap/pm** (2.11.6) - ProseMirror integration

### UI Components

- **Radix UI** - Unstyled accessible components
  - @radix-ui/react-alert-dialog
  - @radix-ui/react-label
  - @radix-ui/react-slot
  - @radix-ui/react-toggle
- **Lucide React** (0.484.0) - Icons
- **Sonner** (2.0.2) - Toast notifications

### Styling

- **Tailwind CSS** - Utility-first CSS
- **tailwind-merge** (3.0.2) - Merge Tailwind classes
- **tw-animate-css** (1.2.4) - Animations
- **next-themes** (0.4.6) - Theme switching
- **class-variance-authority** (0.7.1) - Variant management
- **clsx** (2.1.1) - Class name utility

### Utilities

- **isomorphic-dompurify** (2.22.0) - HTML sanitization
- **svix** (1.62.0) - Webhook verification

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- PostgreSQL database (or your preferred database supported by Prisma)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gamalahmed3265/BlogApp-Nextjs-Clerk.git
   cd BlogApp-Nextjs-Clerk
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL="your_database_url"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   CLERK_SECRET_KEY
   SIGNING_SECRET
   ```

4. Set up the database:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/blog-app
├── app/                    # Next.js app router
│   ├── api/                # API routes
│   ├── (auth)/             # Authentication routes
│   ├── (main)/             # Main application routes
│   └── ...                 # Other app directories
├── components/             # Reusable components
├── lib/                    # Utility functions
├── public/                 # Static files
├── styles/                 # Global styles
├── prisma/                 # Prisma schema
├── .env                    # Environment variables
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Available Scripts

- `dev`: Runs the development server
- `build`: Creates an optimized production build
- `start`: Starts the production server
- `lint`: Runs ESLint
- `prisma:generate`: Generates Prisma client
- `prisma:migrate`: Runs database migrations
- `prisma:studio`: Opens Prisma Studio

## Deployment

### Vercel

This project is optimized for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository
2. Create a new project on Vercel
3. Connect your GitHub repository
4. Add your environment variables
5. Deploy!

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ahmed Gamal - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/gamalahmed3265/BlogApp-Nextjs-Clerk](https://github.com/gamalahmed3265/BlogApp-Nextjs-Clerk)

```

This documentation includes:
1. Project overview
2. Feature list
3. Technology stack breakdown
4. Installation instructions
5. Project structure
6. Available scripts
7. Deployment guide
8. Contribution guidelines
9. License and contact information

You can customize it further by adding:
- Screenshots
- Demo link
- More detailed feature descriptions
- API documentation if applicable
- Roadmap for future features
```

## Demo

<div style="display: flex; justify-content: center;">
  <div style="max-width: 800px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;">
      <img src="./screenshots/1 (1).png" alt="Image 1" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots/1 (10).png" alt="Image 2" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots/1 (11).png" alt="Image 3" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots//1 (12).png" alt="Image 4" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots//1 (2).png" alt="Image 4" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots//1 (3).png" alt="Image 4" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots//1 (4).png" alt="Image 4" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots//1 (5).png" alt="Image 4" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots//1 (6).png" alt="Image 4" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots//1 (7).png" alt="Image 4" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots//1 (8).png" alt="Image 4" style="width: 100%; border-radius: 8px;">
      <img src="./screenshots//1 (9).png" alt="Image 4" style="width: 100%; border-radius: 8px;">
    </div>
  </div>
</div>
