import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Bank — Naruesorn Wattanapipat | Full Stack Developer',
  description: 'ประสบการณ์และทักษะของ Naruesorn Wattanapipat (Bank) — Full Stack Developer. Explore experience, technical skills, education, and contact details.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}
