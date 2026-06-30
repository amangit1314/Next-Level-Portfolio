import Footer from "@/components/layout/Footer";
import { unbounded } from "@/lib/fonts";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={unbounded.className}>
      {children}
      <Footer />
    </div>
  );
}
