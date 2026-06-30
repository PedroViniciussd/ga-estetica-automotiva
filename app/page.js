const phone = '5532999648661';
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent('Olá, vim pelo site e quero agendar um serviço na GA Estética Automotiva.')}`;

const services = [
  { title: 'Lavagem detalhada completa', text: 'Limpeza minuciosa de bancos, portas, teto, carpete e cera para acabamento premium.' },
  { title: 'Polimento e cristalização', text: 'Realce do brilho, correção visual da pintura e proteção para deixar o carro com presença de novo.' },
  { title: 'Higienização interna', text: 'Limpeza profunda para bancos, carpetes e acabamento interno, ideal para rotina, venda ou pós-viagem.' },
  { title: 'Limpeza de motor', text: 'Cuidado técnico no cofre do motor com proteção de verniz para acabamento limpo e seguro.' },
  { title: 'Polimento de farol', text: 'Recuperação estética dos faróis para melhorar aparência e valorização do veículo.' },
  { title: 'Proteção e manutenção', text: 'Serviços preventivos para conservar pintura, interior e detalhes do seu carro por mais tempo.' }
];

const prices = [
  { name: 'Carro médio', lavagem: 'R$ 350', polimento: 'R$ 300' },
  { name: 'SUV', lavagem: 'R$ 400', polimento: 'R$ 350' },
  { name: 'Caminhonete', lavagem: 'R$ 500', polimento: 'R$ 450' }
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutoWash',
    name: 'GA Estética Automotiva',
    image: 'https://www.gaesteticaautomotiva.com.br/logo-ga-estetica.png',
    url: 'https://www.gaesteticaautomotiva.com.br',
    telephone: '+55 32 99964-8661',
    priceRange: 'R$80 - R$500',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Professor Ricardo Musse, Bairro de Lourdes',
      addressLocality: 'Juiz de Fora',
      addressRegion: 'MG',
      addressCountry: 'BR'
    },
    areaServed: 'Juiz de Fora e região',
    sameAs: ['https://www.instagram.com/ga.esteticaautomotiva/'],
    makesOffer: services.map((service) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.title } }))
  };

  return (
    <main className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Ir para o início">
            <img src="/logo-ga-estetica.png" alt="GA Estética Automotiva" className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40" />
            <div>
              <strong className="block text-sm tracking-widest text-goldLight">GA ESTÉTICA</strong>
              <span className="text-xs text-zinc-300">Automotiva em Juiz de Fora</span>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#servicos" className="hover:text-goldLight">Serviços</a>
            <a href="#precos" className="hover:text-goldLight">Promoções</a>
            <a href="#localizacao" className="hover:text-goldLight">Localização</a>
          </nav>
          <a href={whatsapp} className="rounded-full bg-gold px-4 py-2 text-sm font-bold text-black transition hover:bg-goldLight">Agendar</a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(215,162,58,.22),transparent_35%),linear-gradient(135deg,#050506,#15151a_55%,#050506)] pt-28">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-goldLight">Lavagem • Higienização • Polimento</p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Estética automotiva premium em <span className="text-goldLight">Juiz de Fora</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Cuidado completo para valorizar seu veículo: lavagem detalhada, higienização interna, polimento, cristalização, limpeza de motor e proteção de verniz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} className="rounded-full bg-gold px-7 py-4 text-center font-black text-black shadow-glow transition hover:bg-goldLight">Agendar pelo WhatsApp</a>
              <a href="#servicos" className="rounded-full border border-white/20 px-7 py-4 text-center font-bold text-white transition hover:border-gold hover:text-goldLight">Ver serviços</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center">
              {['Lavagem detalhada', 'Polimento técnico', 'Limpeza profunda'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-zinc-200">{item}</div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-gold/30 bg-black/60 p-6 shadow-glow">
              <img src="/logo-ga-estetica.png" alt="Logo da GA Estética Automotiva com carro dourado" className="mx-auto w-full max-w-md rounded-3xl object-contain" />
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[.25em] text-goldLight">Atendimento</p>
                <p className="mt-2 text-2xl font-black">Bairro de Lourdes</p>
                <p className="text-zinc-300">Rua Professor Ricardo Musse, Juiz de Fora - MG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[.25em] text-goldLight">Serviços</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Tudo para deixar seu carro limpo, protegido e valorizado.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[.03] p-6 transition hover:-translate-y-1 hover:border-gold/60">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-lg font-black text-black">{index + 1}</span>
                <h3 className="mt-6 text-xl font-black text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="precos" className="relative bg-black py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-bold uppercase tracking-[.25em] text-goldLight">Promoções</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">Pacotes com preço claro para cada tipo de veículo.</h2>
              <p className="mt-5 text-zinc-300">Valores promocionais sujeitos à avaliação do estado do veículo. Confirme disponibilidade pelo WhatsApp.</p>
              <a href={whatsapp} className="mt-8 inline-flex rounded-full bg-gold px-7 py-4 font-black text-black transition hover:bg-goldLight">Consultar horário</a>
            </div>
            <div className="rounded-[2rem] border border-gold/30 bg-zinc-950 p-4 shadow-glow sm:p-6">
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-gold text-black">
                    <tr>
                      <th className="p-4">Veículo</th>
                      <th className="p-4">Lavagem detalhada</th>
                      <th className="p-4">Polimento</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {prices.map((item) => (
                      <tr key={item.name} className="bg-white/[.03]">
                        <td className="p-4 font-bold">{item.name}</td>
                        <td className="p-4 text-goldLight">{item.lavagem}</td>
                        <td className="p-4 text-goldLight">{item.polimento}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4"><b>Polimento de farol</b><span className="block text-goldLight">R$ 80</span></div>
                <div className="rounded-2xl bg-white/5 p-4"><b>Limpeza de motor</b><span className="block text-goldLight">R$ 100</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-gold/30 bg-[radial-gradient(circle_at_top_left,rgba(215,162,58,.25),transparent_35%),#101014] p-8 sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-black sm:text-5xl">Seu carro merece sair brilhando.</h2>
              <p className="mt-4 max-w-2xl text-zinc-300">Agende agora e receba atendimento especializado com acabamento caprichado e foco nos detalhes.</p>
            </div>
            <a href={whatsapp} className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 font-black text-black transition hover:bg-goldLight lg:mt-0">Chamar no WhatsApp</a>
          </div>
        </div>
      </section>

      <section id="localizacao" className="bg-black py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[.25em] text-goldLight">Localização</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">GA Estética Automotiva em Juiz de Fora</h2>
            <div className="mt-8 space-y-4 text-zinc-300">
              <p><strong className="text-white">Endereço:</strong> Rua Professor Ricardo Musse, Bairro de Lourdes, Juiz de Fora - MG</p>
              <p><strong className="text-white">WhatsApp:</strong> (32) 99964-8661</p>
              <p><strong className="text-white">Instagram:</strong> @ga.esteticaautomotiva</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6">
            <h3 className="text-2xl font-black">Por que escolher a GA?</h3>
            <ul className="mt-6 space-y-4 text-zinc-300">
              <li>✓ Atendimento direto pelo WhatsApp</li>
              <li>✓ Serviços para carro médio, SUV e caminhonete</li>
              <li>✓ Foco em limpeza profunda, brilho e valorização</li>
              <li>✓ Localização acessível no Bairro de Lourdes</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-zinc-950 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-400 sm:px-6 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} GA Estética Automotiva. Todos os direitos reservados.</p>
          <a href={whatsapp} className="font-bold text-goldLight">WhatsApp: (32) 99964-8661</a>
        </div>
      </footer>

      {/* =======================
    WhatsApp Flutuante
======================= */}
<div className="fixed bottom-6 right-6 z-[999] flex items-end gap-3 ">

  {/* Balão */}
<div className="relative hidden animate-bounce rounded-2xl border border-gold/40 bg-zinc-950 px-5 py-3 shadow-2xl md:block">
    <p className="font-bold text-white">
        👋 Agendar via WhatsApp
    </p>

    <p className="mt-1 text-xs text-zinc-300">
        Atendimento rápido.
    </p>

    <div className="absolute -right-2 bottom-5 h-4 w-4 rotate-45 border-r border-b border-gold/40 bg-zinc-950"></div>
</div>

  {/* Botão */}
  <a
    href={whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Agendar via WhatsApp"
    className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_35px_rgba(37,211,102,.45)] transition duration-300 hover:scale-110"
  >

    {/* Ping */}
    <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>

    {/* Ícone */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="relative z-10 h-8 w-8 fill-white"
    >
      <path d="M19.11 17.21c-.29-.14-1.71-.84-1.97-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.02 1.43 1.03 2.81 1.17 3 .14.19 2.01 3.07 4.87 4.31.68.29 1.21.46 1.63.59.68.22 1.29.19 1.78.12.54-.08 1.71-.7 1.95-1.38.24-.67.24-1.24.17-1.38-.07-.14-.26-.22-.55-.36z"/>
      <path d="M16.02 3C8.83 3 3 8.82 3 16c0 2.54.74 4.91 2 6.93L3 29l6.25-1.96A12.9 12.9 0 0016.02 29C23.2 29 29 23.18 29 16S23.2 3 16.02 3zm0 23.68c-2.13 0-4.12-.62-5.81-1.69l-.42-.26-3.71 1.17 1.2-3.62-.28-.44A10.57 10.57 0 015.34 16c0-5.89 4.79-10.68 10.68-10.68S26.7 10.11 26.7 16s-4.79 10.68-10.68 10.68z"/>
    </svg>

  </a>

</div>
    </main>
  );
}
