import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

export const metadata = {
  title: 'Grace Wellness | Premium Wellness & Holistic Health',
  description: 'Experience premium massage therapy sessions and wellness products. Clients transformation stories, booking massage sessions online.',
  keywords: 'massage therapy, wellness, holistic health, spa services, grace wellness',
  authors: [{ name: 'Grace Wellness' }],
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter bg-white text-grace-dark">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
