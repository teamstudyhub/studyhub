import "../styles/globals.css"
import Providers from "./Providers";

interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {
    return (
      <html lang="en">
        <body className="h-[100vh] w-[100vw] overflow-hidden"><Providers>{children}</Providers></body>
      </html>
    );
  }