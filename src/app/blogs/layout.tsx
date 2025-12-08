import Footer from "@/components/Footer";
import { poppins } from "@/lib/fonts";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={poppins.className}>
      {children}
      <Footer />
    </div>
  );
}
