import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ variable: '--font-jakarta', subsets: ['latin'], display: 'swap' });
export const metadata: Metadata = { title: 'Decodificador de Sonhos — Entenda seus sonhos', description: 'Um método simples para transformar sonhos e símbolos em pistas claras sobre suas emoções e sua vida.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${inter.variable} ${jakarta.variable}`}>{children}</body></html>}
