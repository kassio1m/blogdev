import Link from "next/link";
import DiscordWidget from "./components/DiscordWidget";

// Icon Components
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-500"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Desenvolvimento FiveM: Guia Completo para Criar Servidores de Sucesso
          </h1>
          <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
            Transforme sua paixão por desenvolvimento em servidores FiveM profissionais e inovadores
          </p>
        </header>

        {/* Discord Widget - Fixed position */}
        <DiscordWidget />

        {/* Cover Image */}
        <div className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl">
          <div className="aspect-video w-full bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="mb-4 text-6xl font-bold">FiveM</div>
              <div className="text-xl opacity-90">Desenvolvimento Profissional</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
          {/* Text Block 1 */}
          <div className="mb-8 space-y-4">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              O desenvolvimento para FiveM oferece oportunidades incríveis para criar experiências únicas e envolventes. 
              Com as ferramentas certas e conhecimento adequado, você pode construir servidores que se destacam na comunidade.
            </p>
          </div>

          {/* Text Block 2 */}
          <div className="mb-8 space-y-4">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              Este guia foi criado para desenvolvedores que buscam elevar seus projetos ao próximo nível. 
              Aqui você encontrará as melhores práticas, recursos essenciais e insights valiosos para o desenvolvimento moderno.
            </p>
          </div>

          {/* List with Icons */}
          <div className="my-12 rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Recursos Essenciais
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Scripts Customizados
                  </h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    Desenvolva recursos únicos com Lua e C# para personalizar completamente seu servidor
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Framework Moderno
                  </h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    Utilize frameworks como vRP, ESX, QBCore ou crie sua própria base do zero
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Performance Otimizada
                  </h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    Aprenda técnicas avançadas para garantir que seu servidor rode suavemente mesmo com muitos jogadores
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Integração com APIs
                  </h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    Conecte seu servidor com serviços externos para funcionalidades avançadas e automação
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Text Block 3 */}
          <div className="mb-8 space-y-4">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              A comunidade FiveM é vibrante e sempre disposta a ajudar. Participar de fóruns, 
              contribuir com projetos open-source e compartilhar conhecimento são formas excelentes 
              de crescer como desenvolvedor.
            </p>
          </div>

          {/* Social Links */}
          <div className="my-12 flex flex-wrap gap-4">
            <a
              href="https://github.com/DunksVRP"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-zinc-300 bg-white px-6 py-3 text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              <GitHubIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://discord.gg/8qQxf68PBU"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-zinc-300 bg-white px-6 py-3 text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              <DiscordIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="font-medium">Discord</span>
            </a>
          </div>

          {/* Call-to-Action */}
          <div className="mt-16 rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-8 text-center dark:border-zinc-800 dark:from-zinc-900/50 dark:to-zinc-900">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Pronto para começar?
            </h2>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              Junte-se à comunidade e comece a construir seu servidor FiveM hoje mesmo
            </p>
            <Link
              href="/docs"
              className="inline-block rounded-lg bg-zinc-900 px-8 py-3 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
