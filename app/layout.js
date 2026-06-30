export const metadata = {
  metadataBase: new URL('https://www.gaesteticaautomotiva.com.br'),
  title: {
    default: 'GA Estética Automotiva em Juiz de Fora | Lavagem, Polimento e Higienização',
    template: '%s | GA Estética Automotiva'
  },
  description:
    'GA Estética Automotiva em Juiz de Fora: lavagem detalhada, higienização, polimento, cristalização, limpeza profunda e proteção de veículos no Bairro de Lourdes.',
  keywords: [
    'estética automotiva Juiz de Fora',
    'lavagem automotiva Juiz de Fora',
    'polimento automotivo Juiz de Fora',
    'higienização automotiva Juiz de Fora',
    'lavagem detalhada',
    'cristalização automotiva',
    'Bairro de Lourdes Juiz de Fora'
  ],
  authors: [{ name: 'GA Estética Automotiva' }],
  creator: 'GA Estética Automotiva',
  publisher: 'GA Estética Automotiva',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'GA Estética Automotiva em Juiz de Fora',
    description: 'Lavagem, polimento, cristalização, higienização e limpeza profunda para carros, SUVs e caminhonetes.',
    url: 'https://www.gaesteticaautomotiva.com.br',
    siteName: 'GA Estética Automotiva',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/logo-ga-estetica.png', width: 765, height: 577, alt: 'Logo GA Estética Automotiva' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GA Estética Automotiva em Juiz de Fora',
    description: 'Lavagem detalhada, polimento, cristalização e higienização automotiva.',
    images: ['/logo-ga-estetica.png']
  },
  robots: { index: true, follow: true }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0b0d'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      gold: '#d7a23a',
                      goldLight: '#ffd76a',
                      ink: '#09090b',
                      graphite: '#15151a'
                    },
                    boxShadow: {
                      glow: '0 0 45px rgba(215,162,58,.25)'
                    }
                  }
                }
              }
            `
          }}
        />
        <link rel="icon" href="/logo-ga-estetica.png" />
      </head>
      <body className="bg-ink text-white antialiased">{children}</body>
    </html>
  );
}
