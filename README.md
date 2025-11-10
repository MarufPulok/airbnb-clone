# 🏠 StayHub

A modern, full-stack vacation rental platform built with Next.js 13, TypeScript, and MongoDB. StayHub allows users to discover, book, and list unique properties around the world.

🌐 **Live Demo:** [https://stay-hub-ten.vercel.app/](https://stay-hub-ten.vercel.app/)

![StayHub](https://img.shields.io/badge/StayHub-Vacation%20Rental%20Platform-FF385C?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-13-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)

## ✨ Features

### For Guests
- 🔍 **Advanced Search & Filtering** - Search properties by location, date range, guest count, and category
- 🗺️ **Interactive Maps** - View property locations on an interactive map using Leaflet
- ❤️ **Favorites System** - Save your favorite properties for easy access
- 📅 **Reservation Management** - Book properties with date range selection and view your trip history
- 🎨 **Category Browsing** - Explore properties by categories (Beach, Mountain, Pool, etc.)

### For Hosts
- 🏡 **Property Listing** - Create detailed listings with multi-step form (category, location, amenities, photos, pricing)
- 📸 **Image Upload** - Upload property images using Cloudinary integration
- 💰 **Price Management** - Set custom pricing for your properties
- 📊 **Property Dashboard** - Manage your properties, reservations, and bookings
- 🗺️ **Location Selection** - Pin your property location on an interactive map

### Authentication & Security
- 🔐 **NextAuth.js Integration** - Secure authentication with multiple providers
- 🌐 **OAuth Support** - Sign in with Google and GitHub
- 🔒 **Credential Authentication** - Email/password authentication with bcrypt hashing
- 👤 **User Profiles** - Manage your profile with avatar support

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form state management
- **React Hot Toast** - Beautiful toast notifications
- **React Icons** - Icon library
- **Leaflet** - Interactive maps
- **React Date Range** - Date picker component
- **React Select** - Select component

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Modern ORM for database management
- **MongoDB** - NoSQL database
- **NextAuth.js** - Authentication library
- **Axios** - HTTP client
- **Bcrypt** - Password hashing

### Services & Tools
- **Cloudinary** - Image upload and management
- **Zustand** - State management
- **Date-fns** - Date utility library
- **Query String** - URL query parsing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or Atlas)
- Cloudinary account (for image uploads)
- Google OAuth credentials (optional, for OAuth login)
- GitHub OAuth credentials (optional, for OAuth login)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MarufPulok/stayhub.git
   cd stayhub
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL="your_mongodb_connection_string"
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
   
   # OAuth (Optional)
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   GITHUB_ID="your_github_client_id"
   GITHUB_SECRET="your_github_client_secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
stayhub/
├── app/
│   ├── actions/          # Server actions for data fetching
│   ├── api/              # API routes
│   ├── components/       # React components
│   │   ├── inputs/       # Form input components
│   │   ├── listings/     # Listing-related components
│   │   ├── modals/       # Modal components
│   │   └── navbar/       # Navigation components
│   ├── hooks/            # Custom React hooks
│   ├── libs/             # Utility libraries
│   ├── listings/         # Listing pages
│   ├── trips/            # User trips page
│   ├── favourites/       # Favourites page
│   ├── reservations/     # Reservations page
│   └── properties/       # Properties management page
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static assets
└── pages/
    └── api/
        └── auth/         # NextAuth API routes
```

## 🎨 Key Features Implementation

### Multi-step Property Listing
The property listing process uses a step-by-step modal with:
- Category selection
- Location picker with map
- Property details (guests, rooms, bathrooms)
- Image upload
- Description and pricing

### Search & Filtering
Advanced search functionality with:
- Location-based filtering
- Date range selection
- Guest count filtering
- Category filtering
- URL-based query parameters

### Reservation System
Complete booking flow with:
- Date availability checking
- Price calculation
- Reservation management
- Trip history tracking

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 🌐 Deployment

**Live Application:** [https://stay-hub-ten.vercel.app/](https://stay-hub-ten.vercel.app/)

The easiest way to deploy StayHub is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables
4. Deploy!

StayHub is optimized for Vercel's platform and works seamlessly with their serverless functions.

## 📝 Database Schema

The application uses MongoDB with Prisma ORM. Key models include:

- **User** - User accounts and authentication
- **Listing** - Property listings
- **Reservation** - Booking reservations
- **Account** - OAuth account connections

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Maruf Hossain**
- GitHub: [@MarufPulok](https://github.com/MarufPulok)
- LinkedIn: [Maruf Hossain](https://www.linkedin.com/in/marufhpulok/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Maps powered by [Leaflet](https://leafletjs.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

⭐ If you find this project helpful, please consider giving it a star!
