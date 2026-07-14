# Grace Wellness - Premium Business Website with Store

A full-stack business website featuring a luxury portfolio, e-commerce store, and global payment integration with Flutterwave. Customers can purchase premium wellness services and products in any currency from anywhere in the world.

## 🌟 Features

- 📱 **Responsive Design** - Mobile-first, fully responsive luxury layout
- 🎨 **Premium Portfolio** - Showcase massage therapy sessions and client transformations
- 🛍️ **E-Commerce Store** - Premium wellness products catalog
- 💳 **Flutterwave Integration** - Accept payments in 140+ currencies globally
- 🔐 **Secure Checkout** - PCI-compliant payment processing
- 📊 **Admin Dashboard** - Manage products, orders, and customers
- 🔍 **SEO Optimized** - Built-in SEO best practices
- 🌙 **Dark Mode Support** - Premium UI with theme switching
- 📧 **Email Notifications** - Order confirmations and customer updates
- 🛒 **Shopping Cart** - Persistent cart with local storage
- 👤 **User Accounts** - Customer registration and order history

## 🏢 Business Information

**Grace Wellness**
- 📧 Email: gracewellnessuk@gmail.com
- 📍 Address: Bolton, Greater Manchester, United Kingdom
- 🎬 TikTok: https://vm.tiktok.com/ZN9MpR2Yfj2CY-EgDtU/
- 🎨 Brand: Premium Wellness

## 💻 Tech Stack

### Frontend
- **React 18** - UI framework
- **Next.js 13+** - Framework with SSR and static generation
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Axios** - HTTP client
- **SWR** - Data fetching

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Flutterwave SDK** - Payment processing
- **Nodemailer** - Email service

## 📁 Project Structure

```
Gracewellness-business-website-store/
├── frontend/                    # Next.js frontend application
│   ├── app/
│   │   ├── page.js             # Home page
│   │   ├── layout.js           # Root layout
│   │   ├── portfolio/          # Portfolio pages
│   │   ├── store/              # Store pages
│   │   ├── checkout/           # Checkout flow
│   │   ├── admin/              # Admin dashboard
│   │   └── api/                # API routes
│   ├── components/             # Reusable components
│   ├── lib/                    # Utilities and helpers
│   ├── public/                 # Static assets
│   ├── styles/                 # Global styles
│   └── package.json
│
├── backend/                     # Express.js backend
│   ├── models/                 # Database models
│   ├── routes/                 # API routes
│   ├── controllers/            # Business logic
│   ├── middleware/             # Custom middleware
│   ├── services/               # External services
│   ├── config/                 # Configuration
│   ├── uploads/                # Uploaded files
│   ├── server.js               # Entry point
│   └── package.json
│
├── docker-compose.yml          # Docker configuration
├── .env.example                # Environment variables template
└── README.md                   # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- MongoDB (local or Atlas)
- Flutterwave Account (for payment processing)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/websites-uk/Gracewellness-business-website-store.git
cd Gracewellness-business-website-store
```

2. **Setup Frontend**
```bash
cd frontend
npm install
```

3. **Setup Backend**
```bash
cd ../backend
npm install
```

4. **Environment Variables**

Create `.env.local` in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK-2b01ca9653cbf025d8843ce27e456c4b-X
```

Create `.env` in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gracewellness
JWT_SECRET=your_jwt_secret_key
FLUTTERWAVE_SECRET_KEY=your_flutterwave_secret_key
FLUTTERWAVE_PUBLIC_KEY=FLWPUBK-2b01ca9653cbf025d8843ce27e456c4b-X
EMAIL_USER=gracewellnessuk@gmail.com
EMAIL_PASSWORD=your_app_password
```

### Running the Application

**Development Mode:**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:3000`

## 🎨 Premium Design System

### Color Palette
- **Primary Gold**: #D4AF37
- **Secondary Beige**: #F5F1E8
- **Accent Taupe**: #A39E93
- **Dark Charcoal**: #2C2C2C
- **White**: #FFFFFF

### Typography
- **Headings**: Poppins Bold
- **Body**: Inter Regular
- **Accent**: Playfair Display

## 📧 Email Templates

Includes professional email templates for:
- Order Confirmation
- Payment Receipt
- Shipping Notification
- Service Booking Confirmation
- Customer Welcome

## 🔐 Security

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ CORS protection
- ✅ Rate limiting
- ✅ Input validation
- ✅ Secure payment processing

## 📊 Admin Dashboard

Access at `/admin`

### Features
- Product Management
- Order Management
- Customer Management
- Portfolio Management
- Sales Analytics
- Payment History

## 🌐 Deployment

### GitHub Pages (Static Files)
```bash
cd frontend
npm run build
npm run export
```

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Heroku (Backend)
```bash
heroku create gracewellness-api
heroku config:set MONGODB_URI=your_uri
git push heroku main
```

## 📱 Flutterwave Integration

**Supported Currencies**: GBP, USD, EUR, NGN, KES, GHS, ZAR, and 130+ more

**Payment Methods**:
- Credit/Debit Cards
- Mobile Money
- Bank Transfer
- USSD
- Wallets

## 📞 Support

- 📧 Email: gracewellnessuk@gmail.com
- 🎬 TikTok: [@gracewellness](https://vm.tiktok.com/ZN9MpR2Yfj2CY-EgDtU/)

## 📄 License

MIT License - See LICENSE.md for details

---

**Made with ❤️ by Grace Wellness Team**