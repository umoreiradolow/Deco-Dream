import Image from 'next/image';
import { ArrowRight, BookOpen, Brain, Check, ChevronDown, Clock3, CloudMoon, Eye, FileText, Heart, Infinity, KeyRound, LockKeyhole, MessageCircle, MoonStar, ShieldCheck, Sparkles, Star } from 'lucide-react';

const checkout = 'https://pay.wiapy.com/rAMUZYNpu0q5';
const benefits = [
  { icon: Brain, title: 'Entenda os sinais', text: 'Identifique símbolos, emoções e padrões que seu inconsciente repete.' },
  { icon: Heart, title: 'Acorde mais leve', text: 'Troque a ansiedade do “o que isso quer dizer?” por clareza e direção.' },
  { icon: Eye, title: 'Se conheça melhor', text: 'Use cada sonho como uma pista prática sobre sua fase atual.' },
  { icon: Sparkles, title: 'Crie seu ritual', text: 'Registre e interprete em poucos minutos, mesmo que lembre só de detalhes.' },
];
const faqs = [
  ['Para quem o Decodificador é indicado?', 'Para quem tem sonhos marcantes ou recorrentes e quer compreender melhor suas emoções — sem precisar ter experiência com interpretação de sonhos.'],
  ['Como o material é entregue?', 'Você recebe acesso ao material digital em PDF, pronto para consultar no celular, tablet ou computador. Também pode imprimir as páginas que desejar.'],
  ['Quando o acesso será liberado?', 'O acesso é enviado por e-mail logo após a confirmação do pagamento. Na maioria dos casos, isso acontece em poucos minutos.'],
  ['Preciso comprar algo adicional?', 'Não. O Decodificador já traz o método, o guia de símbolos, as perguntas de interpretação e o diário.'],
  ['O produto possui atualizações?', 'Sim. Atualizações futuras desta edição serão liberadas sem custo adicional para quem já comprou.'],
  ['Como funciona a garantia?', 'Você tem 7 dias para conhecer o material. Se sentir que não é para você, basta solicitar o reembolso pelo e-mail de suporte.'],
  ['Quais são as formas de pagamento?', 'O pagamento pode ser feito por cartão de crédito ou Pix, conforme as opções exibidas na página segura de checkout.'],
];
function CTA({ label = 'QUERO DECODIFICAR MEUS SONHOS', href = '#oferta' }: { label?: string; href?: string }) { return <a href={href} className="cta">{label}<ArrowRight size={20} /></a>; }

export default function Home() {
  return <main>
    <section className="hero section"><div className="container hero-grid">
      <div className="hero-copy">
        <h1><span className="headline-highlight">Seus sonhos traduzidos</span> em poucos minutos, logo após acordar.</h1>
        <p className="lead">Descreva o que você lembra de ter sonhado. O sistema gera um relatório completo com os símbolos, as emoções e os possíveis significados — explicado de forma simples.</p>
      </div>
      <div className="hero-art"><div className="image-frame"><Image src="/hero-chat-sonhos.png" alt="Exemplo ilustrativo de conversa: um sonho sobre tentar voltar para casa e chamar pela mãe recebe uma interpretação detalhada sobre saudade, segurança e acolhimento, seguida de perguntas para reflexão." width={941} height={1672} priority /></div></div>
      <div className="hero-action"><CTA /><p className="microcopy"><LockKeyhole size={13} /> Pagamento seguro • Acesso imediato • 7 dias de garantia</p></div>
    </div></section>
    <section className="problem section clean-problem" aria-label="Dificuldades ao interpretar sonhos">
      <div className="container">
        <p className="problem-opening">É frustrante acordar com um sonho marcante e não entender o que ele significa. Quando você tenta buscar respostas, a dúvida continua…</p>
        <div className="clean-card-list">
          <article><span className="card-marker">01</span><div><h3>O mesmo sonho volta a aparecer</h3><p>Cenas se repetem e deixam aquela pergunta: por que estou sonhando com isso de novo?</p></div></article>
          <article><span className="card-marker">02</span><div><h3>Os detalhes parecem não fazer sentido</h3><p>Pessoas, lugares e situações se misturam. Você lembra do sonho, mas não sabe por onde começar.</p></div></article>
          <article><span className="card-marker">03</span><div><h3>Cada pesquisa traz uma resposta diferente</h3><p>Os significados são genéricos e não consideram o que você sentiu. No fim, sobra mais dúvida do que clareza.</p></div></article>
        </div>
      </div>
    </section>
    <section className="mechanism section clean-mechanism" aria-label="Como funciona">
      <div className="container">
        <p className="solution-note">Você descreve o que sonhou. O <span>Decodificador de Sonhos</span> organiza os detalhes em um relatório com símbolos, emoções e possíveis significados.</p>
      </div>
    </section>
    <section className="benefits section clean-benefits">
      <div className="container">
        <h2>Mais clareza para entender seus sonhos:</h2>
        <div className="clean-card-list">
          <article><span className="card-marker"><Check size={16} aria-hidden="true" /></span><div><h3>Uma explicação fácil de acompanhar</h3><p>Explore os possíveis significados dos símbolos do seu sonho, em uma linguagem simples.</p></div></article>
          <article><span className="card-marker"><Check size={16} aria-hidden="true" /></span><div><h3>Um olhar para o que você sentiu</h3><p>Reflita sobre as emoções que apareceram no sonho e como elas podem se conectar ao seu momento.</p></div></article>
          <article><span className="card-marker"><Check size={16} aria-hidden="true" /></span><div><h3>Menos tempo juntando respostas soltas</h3><p>Descreva o que lembra pelo celular e consulte uma interpretação organizada em um só relatório.</p></div></article>
        </div>
      </div>
    </section>
    <section className="receive section"><div className="container receive-grid"><div><h2 className="center">Você recebe o acesso imediato via WhatsApp</h2><div className="receive-list"><div><Sparkles/><p><b>Acesso ao Decodificador de Sonhos</b><span>Descreva o que você acabou de sonhar e receba seu relatório imediatamente.</span></p></div><div><BookOpen/><p><b>Guia Decodificador de Sonhos</b><span>O passo a passo completo para usar o decodificador</span></p></div><div><MoonStar/><p><b>Biblioteca de símbolos</b><span>Significados possíveis para os temas mais frequentes.</span></p></div><div><FileText/><p><b>Diário de sonhos imprimível</b><span>Páginas guiadas para registrar sem esquecer detalhes.</span></p></div><div><Infinity/><p><b>Acesso vitalício</b><span>Consulte quantas vezes quiser, no seu ritmo.</span></p></div></div></div></div></section>
    <section className="guarantee section guarantee-simple" aria-labelledby="guarantee-title">
      <div className="container guarantee-content">
        <span className="guarantee-icon"><ShieldCheck size={28} aria-hidden="true" /></span>
        <h2 id="guarantee-title">Garantia Incondicional de 7 Dias</h2>
        <p>Você tem 7 dias para experimentar o Decodificador de Sonhos. Se sentir que ele não atende às suas expectativas, basta enviar um e-mail solicitando o reembolso. Devolvemos o seu dinheiro sem questionamentos.</p>
        <span className="guarantee-security"><LockKeyhole size={14} aria-hidden="true" /> Compra 100% Segura &amp; Risco Zero</span>
      </div>
    </section>
    <section id="oferta" className="offer section offer-v5" aria-labelledby="offer-title">
      <div className="container offer-shell">
        <h2 id="offer-title">Comece a entender seus sonhos por um valor super acessível</h2>
        <div className="offer-panel">
          <header className="offer-panel-heading">
            <p>ACESSO AO SISTEMA + MATERIAIS DIGITAIS</p>
            <h3>Decodificador de Sonhos</h3>
          </header>
          <ul className="offer-inclusions">
            {['Acesso ao Decodificador e aos relatórios dos seus sonhos','Guia de uso + biblioteca de símbolos + diário de sonhos','Acesso enviado imediatamente via WhatsApp','Garantia de 7 dias'].map(item => <li key={item}><Check size={16} aria-hidden="true" /><span>{item}</span></li>)}
          </ul>
          <div className="offer-price-box">
            <div className="offer-price-line"><span>Por apenas</span><strong>R$ 9,90</strong></div>
            <span className="offer-price-badge"><Sparkles size={13} aria-hidden="true" /> Acesso vitalício</span>
            <p>Pagamento único • Sem assinaturas</p>
          </div>
          <CTA label="SIM! QUERO RECEBER AGORA" href={checkout} />
          <p className="offer-payment-note"><LockKeyhole size={13} aria-hidden="true" /><span>Pagamento seguro via Pix ou cartão<br />Acesso enviado no WhatsApp</span></p>
        </div>
      </div>
    </section>
    <section className="faq section"><div className="container narrow"><div className="center"><p className="eyebrow">AINDA TEM DÚVIDAS?</p><h2>Perguntas frequentes</h2></div><div className="accordion">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></div></section>
    <section className="final-cta section"><div className="container narrow center"><MoonStar size={40}/><h2>Seu próximo sonho pode ser a pista que estava faltando.</h2><p>Comece hoje a ouvir o que a sua mente tenta dizer enquanto você dorme.</p><CTA label="SIM! QUERO RECEBER AGORA"/><span><ShieldCheck size={15}/> Acesso imediato + 7 dias de garantia</span></div></section>
    <footer><div className="container footer-grid"><div><div className="brand light"><span><MoonStar size={18}/></span> DECODIFICADOR <b>DE SONHOS</b></div><p>Material digital de autoconhecimento para uma relação mais consciente com os seus sonhos.</p></div><div><b>Suporte</b><a href="mailto:moreira.digital2026@gmail.com">moreira.digital2026@gmail.com</a><small>Resposta em até 2 dias úteis.</small></div><div><a href="#">Política de Privacidade</a><a href="#">Termos de Uso</a></div></div><div className="copyright">© 2026 Decodificador de Sonhos. Todos os direitos reservados.<br/><small>Este produto não substitui acompanhamento médico ou psicológico.</small></div></footer>
  </main>;
}
