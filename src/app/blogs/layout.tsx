// Was independently rendering the old <Footer /> and wrapping everything in
// Unbounded — a leftover from before HudChrome (globally mounted in the root
// layout.tsx) took over chrome duties. Real bug: every blog page was getting
// a second, differently-styled footer stacked under HudChrome's status bar.
export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
