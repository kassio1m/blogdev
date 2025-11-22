import Link from "next/link";

const CodeBlock = ({ children, language = "lua" }: { children: string; language?: string }) => (
  <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-950">
    <code>{children}</code>
  </pre>
);

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="mb-6 mt-12 text-3xl font-bold text-zinc-900 dark:text-zinc-50">{title}</h2>
    {children}
  </section>
);

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <header className="mb-12 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <Link
            href="/"
            className="mb-4 inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            ← Voltar para o blog
          </Link>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Documentação vRP
          </h1>
          <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            Guia completo para desenvolvimento com o framework vRP para FiveM
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">Índice</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#sobre" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Sobre o vRP
              </a>
            </li>
            <li>
              <a href="#instalacao" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Instalação
              </a>
            </li>
            <li>
              <a href="#configuracao" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Configuração
              </a>
            </li>
            <li>
              <a href="#api" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                API Base
              </a>
            </li>
            <li>
              <a href="#grupos" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Grupos e Permissões
              </a>
            </li>
            <li>
              <a href="#inventario" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Inventário
              </a>
            </li>
            <li>
              <a href="#gui" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                GUI e Menus
              </a>
            </li>
          </ul>
        </nav>

        {/* Content */}
        <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
          <Section id="sobre" title="Sobre o vRP">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              O vRP é um framework/addon genérico e simples para servidores de Roleplay no FiveM. 
              O projeto visa criar uma base sólida para evitar que todos reinventem a roda. 
              Contribuições são bem-vindas!
            </p>

            <div className="my-8 rounded-xl border border-zinc-200 bg-blue-50 p-6 dark:border-zinc-800 dark:bg-blue-950/20">
              <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Recursos Principais
              </h3>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>• Ferramentas básicas de admin (kick, ban, whitelist)</li>
                <li>• Sistema de grupos e permissões</li>
                <li>• Sistema de identificação persistente</li>
                <li>• Estado do jogador salvo automaticamente (fome, sede, armas, aparência, posição)</li>
                <li>• Sistema de identidade, telefone e aptidões</li>
                <li>• Sistema de dinheiro (carteira/banco)</li>
                <li>• Inventário com itens customizáveis</li>
                <li>• Sistema de casas</li>
                <li>• Polícia básica (PC, verificação, algemas, prisão)</li>
                <li>• Emergência básica (coma, reanimação)</li>
                <li>• API de GUI (menu dinâmico, barras de progresso, prompt)</li>
                <li>• Sistema de banco de dados SQL/MySQL</li>
              </ul>
            </div>
          </Section>

          <Section id="instalacao" title="Instalação">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              O vRP foi testado no Windows e GNU/Linux com Mono 4.8.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Passo a Passo
            </h3>
            <ol className="space-y-4 text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-zinc-50 dark:text-zinc-900">
                  1
                </span>
                <span>
                  Clone o repositório ou baixe o arquivo master e copie os diretórios <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">vrp</code> e <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">vrp_mysql</code> para sua pasta de recursos.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-zinc-50 dark:text-zinc-900">
                  2
                </span>
                <span>
                  Adicione <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">vrp_mysql</code> e depois <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">vrp</code> à lista de recursos (primeiro após os recursos básicos do FiveM é melhor).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-zinc-50 dark:text-zinc-900">
                  3
                </span>
                <span>
                  Configure o arquivo <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">cfg/base.lua</code> com as credenciais do banco de dados MySQL.
                </span>
              </li>
            </ol>
          </Section>

          <Section id="configuracao" title="Configuração">
            <div className="my-6 rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/20">
              <p className="font-semibold text-amber-900 dark:text-amber-200">
                ⚠️ Importante:
              </p>
              <p className="mt-2 text-amber-800 dark:text-amber-300">
                Apenas os arquivos no diretório <code className="rounded bg-amber-100 px-1.5 py-0.5 text-sm dark:bg-amber-900">cfg/</code> devem ser modificados. 
                Modificar os arquivos core do vRP é altamente desencorajado.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              Há muito para configurar no vRP, nada vem pré-configurado para que todos possam fazer seu servidor único. 
              Tudo que você precisa saber está nos arquivos de configuração.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Arquivo Base
            </h3>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              O único arquivo obrigatório para configurar antes de iniciar o servidor é <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">cfg/base.lua</code>, 
              para configurar as credenciais do banco de dados MySQL.
            </p>
          </Section>

          <Section id="api" title="API Base">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              Para chamar as funções da API do servidor, obtenha a interface vRP usando o Proxy.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Obtendo a Interface
            </h3>
            <CodeBlock>
{`local Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface("vRP")

-- Exemplo:
local user_id = vRP.getUserId(source)`}
            </CodeBlock>

            <h3 className="mb-4 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Funções Principais (Proxy API)
            </h3>
            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.getUsers()</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Retorna um mapa de user_id → source do jogador
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.getUserId(source)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Retorna o ID do usuário ou nil se o source for inválido
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.getUserSource(user_id)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Retorna o source do usuário ou nil se não estiver conectado
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.setUData(user_id, key, value)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Define dados do usuário (dados textuais)
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.getUData(user_id, key)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Obtém dados do usuário (retorna nil se não encontrado)
                </p>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Eventos Base
            </h3>
            <CodeBlock>
{`-- (server) chamado após identificação
AddEventHandler("vRP:playerJoin", function(user_id, source, name, last_login) 
  -- seu código aqui
end)

-- (server) chamado quando um jogador logado spawna
AddEventHandler("vRP:playerSpawn", function(user_id, source, first_spawn) 
  -- seu código aqui
end)

-- (server) chamado quando um jogador sai
AddEventHandler("vRP:playerLeave", function(user_id, source) 
  -- seu código aqui
end)`}
            </CodeBlock>
          </Section>

          <Section id="grupos" title="Grupos e Permissões">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              Grupos e permissões são uma forma de limitar funcionalidades a jogadores específicos. 
              Cada grupo tem um conjunto de permissões definidas em <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">cfg/groups.lua</code>.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              API de Grupos
            </h3>
            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.addUserGroup(user_id, group)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Adiciona um grupo a um usuário conectado
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.removeUserGroup(user_id, group)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Remove um grupo de um usuário conectado
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.hasGroup(user_id, group)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Verifica se o usuário tem um grupo específico
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.hasPermission(user_id, perm)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Verifica se o usuário tem uma permissão específica
                </p>
              </div>
            </div>
          </Section>

          <Section id="inventario" title="Inventário">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              O inventário é salvo automaticamente e, assim como a carteira, fica vazio ao morrer.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Definindo Itens
            </h3>
            <CodeBlock>
{`-- Definir um item de inventário
vRP.defInventoryItem(idname, name, description, choices, weight)

-- Exemplo: Garrafa de água
local wb_choices = {}
wb_choices["Beber"] = {
  function(player, choice)
    local user_id = vRP.getUserId(player)
    if user_id then
      if vRP.tryGetInventoryItem(user_id, "water_bottle", 1) then
        vRP.varyThirst(user_id, -35)
        vRPclient.notify(player, "~b~ Bebendo.")
        vRP.closeMenu(player)
      end
    end
  end,
  "Beber água."
}

vRP.defInventoryItem("water_bottle", "Garrafa de Água", "Beba isso, meu amigo.", 
  function() return wb_choices end, 0.5)`}
            </CodeBlock>

            <h3 className="mb-4 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Funções de Inventário
            </h3>
            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.giveInventoryItem(user_id, idname, amount, notify)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Adiciona item ao inventário de um usuário conectado
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.tryGetInventoryItem(user_id, idname, amount, notify)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Tenta obter item do inventário (retorna true se encontrado e removido)
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.getInventoryItemAmount(user_id, idname)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Obtém a quantidade de um item no inventário
                </p>
              </div>
            </div>
          </Section>

          <Section id="gui" title="GUI e Menus">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              O sistema de GUI do vRP permite criar menus dinâmicos, barras de progresso e prompts.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Criando um Menu Dinâmico
            </h3>
            <CodeBlock>
{`local menudata = {}
menudata.name = "Meu Menu"

-- Deslocar menu do topo em 75px e definir cabeçalho verde
menudata.css = {top = "75px", header_color = "rgba(0,255,0,0.75)"}

menudata.onclose = function(player)
  print("menu fechado")
end

local onchoose = function(player, choice, mod)
  -- mod será modulação de entrada -1,0,1 (esquerda, centro, direita)
  print("jogador escolheu " .. choice)
  vRP.closeMenu(source)
end

-- Adicionar opções e callbacks
menudata["Opção 1"] = {onchoose, "esta <b>opção</b> é incrível"}
menudata["Opção dois"] = {onchoose}

-- Abrir menu dinâmico para o cliente
vRP.openMenu(source, menudata)`}
            </CodeBlock>

            <h3 className="mb-4 mt-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Outras Funções GUI
            </h3>
            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.closeMenu(source)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Fecha o menu ativo do cliente
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.prompt(source, title, default_text, cb_result)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Solicita informação textual (e multilinha) do jogador
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">vRP.request(source, text, time, cb_ok)</code>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Pergunta algo ao jogador com tempo limitado para responder (sim|não)
                </p>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <div className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <p className="text-center text-zinc-600 dark:text-zinc-400">
              Para mais informações, visite o{" "}
              <a
                href="https://github.com/ImagicTheCat/vRP"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-900 underline hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
              >
                repositório oficial do vRP
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

