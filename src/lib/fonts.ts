import { Inter, JetBrains_Mono, Maven_Pro, Momo_Signature, Righteous, Unbounded } from "next/font/google";

export const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const mavenPro = Maven_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
});

export const unbounded = Unbounded({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// decorative signature font — used in Header logo only
export const signature = Momo_Signature({
  weight: ["400"],
  subsets: ["latin"],
});
