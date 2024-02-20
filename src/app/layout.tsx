import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ThemeRegistry } from '@/mui/ThemeRegistry';
import { Providers } from '@/redux/provider';
import Box from '@mui/material/Box';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ModalСommunication } from '@/components/Modal/ModalCommunication';

export const metadata: Metadata = {
  title: 'admin5.ru',
  description: 'Системное администрирование',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeRegistry options={{ key: 'mui' }}>
      <html lang="ru">
        <body>
          <Providers>
            <Header />
            <main
              style={{
                padding: '0',
                maxWidth: '1160px',
                margin: '0 auto 0',
              }}
            >
              <Box
                width="100%"
                sx={{
                  padding: '0 40px 0',
                  '@media (max-width:600px)': {
                    padding: '0 15px',
                  },
                }}
              >
                {children}
              </Box>
            </main>
            <Footer />
            <ModalСommunication />
          </Providers>
        </body>
      </html>
    </ThemeRegistry>
  );
}
