
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";




export const metadata = {
  title: "Nandini App",
  description: "Nandini App for Learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">

        <NavBar />
        
        
        {children}
        
        <Footer />
        </body>


    </html>
  );
}
