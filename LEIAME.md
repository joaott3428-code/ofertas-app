# Ofertas da Semana

Site simples para celular, sem login, sem servidor próprio e sem bibliotecas: mostra as ofertas dos mercados agrupadas por mercado, com busca, ordenação por preço e ocultação automática das ofertas vencidas. Pode ser aberto direto do celular ou publicado como site estático no GitHub Pages/Netlify.

Pasta isolada desta versão: `ofertas-semana-app`.

## Arquivos

- `index.html` — tela do app.
- `estilo.css` — visual com fonte grande e botões fáceis de tocar.
- `app.js` — busca, filtro por validade e por condição, preços com/sem clube, aviso de lista antiga, histórico por ID, ordenação, leitura dos dados e cópia de segurança.
- `ofertas.json` — **sua lista semanal** (edite este arquivo).
- `manifest.webmanifest`, `sw.js`, `icone.svg`, `icone-180.png`, `icone-192.png`, `icone-512.png` — para salvar como app na tela inicial e funcionar offline.

## Recursos da tela

- **Selo “Último dia”:** ofertas que vencem hoje recebem o selo e vêm primeiro em cada mercado; na lista completa a ordem é por validade.
- **Preço com e sem condição:** quando a fonte publica os dois valores, o cartão mostra o preço com Clube/app/CPF em destaque e o preço sem clube/app/CPF logo abaixo. Se a fonte não publica o valor sem condição, o cartão diz “sem app: ver encarte” ou “sem CPF: ver encarte”. Nenhum valor é inventado.
- **Compare entre mercados:** produtos presentes em duas ou mais redes aparecem no topo com o menor preço de cada uma; o mais barato fica com a borda destacada. Os nomes completos mostram a unidade e a condição do preço (CPF, Clube, app).
- **Histórico de preço:** ao carregar uma lista diferente da anterior, o app compara pelo `id` da oferta e mostra “Caiu de R$ X” ou “Subiu de R$ X”, mesmo que o nome do produto mude um pouco.
- **Aviso de lista antiga:** se a lista publicada tiver mais de um dia, aparece no topo a data da pesquisa (ou o número de dias). Isso evita confundir “sem ofertas” com “esqueci de atualizar”.
- **Filtro “Só preços sem clube/app/CPF”:** troca o preço em destaque para o valor sem condição quando ele existe; ofertas que só publicam preço com condição ficam de fora. No cartão, o selo muda para “Preço sem clube/app/CPF”.
- **Fonte no cartão:** cada oferta informa se o preço veio do site oficial ou de um agregador. Fontes de agregador ficam destacadas.
- **Atualizar agora:** botão no rodapé que força o service worker e o `ofertas.json` a buscarem a versão publicada. Não existe mais opção de escolher um arquivo no celular.
- **Modo escuro:** botão 🌙/☀️ no topo; a escolha fica salva. Sem escolha, segue a preferência do sistema.

## Atualizando as ofertas

Edite `ofertas.json`. O arquivo tem a data da pesquisa e a lista de ofertas:

```json
{
  "atualizado_em": "2026-11-26",
  "ofertas": [
    {
      "id": "prezunic-acem-ou-paleta-bovina-maturatta-kg",
      "mercado": "Prezunic",
      "produto": "Acém ou paleta bovina Maturatta (kg) (com Clube Prezunic)",
      "preco": 36.98,
      "validade": "2026-11-26",
      "condicao": "Clube Prezunic",
      "fonte": "Encarte oficial Prezunic (OCR)",
      "encarte": "https://www.prezunic.com.br/encartes",
      "preco_sem_condicao": 42.99
    }
  ]
}
```

- `atualizado_em`: data em que a lista foi pesquisada. Alimenta o aviso de lista antiga.
- `id`: identificador estável da oferta. Se o preço mudar ou o texto do produto for ajustado, mantenha o mesmo `id` para o histórico continuar funcionando.
- `preco`: preço exigido para a oferta (com Clube, com app ou com CPF, quando houver condição). Aceita número (`27.95`) ou texto (`"27,95"`, `"R$ 27,95"`).
- `preco_sem_condicao`: preço publicado para quem **não tem** o Clube/app/CPF. Use `null` quando a fonte não publica esse valor — o app então mostra “ver encarte” em vez de inventar um número.
- `condicao`: o que é necessário para pagar o preço principal (`CPF cadastrado`, `app Mundial Total`, `Clube Prezunic`). Use `""` para preço de balcão.
- `fonte`: de onde veio o preço. Se for agregador, escreva `(agregador)` para o app destacar.
- `validade` aceita `AAAA-MM-DD` ou `DD/MM/AAAA`. Ofertas com data anterior ao dia atual do celular são escondidas.
- `encarte` deve ser um link `http://` ou `https://`.

O formato antigo (array simples, sem `atualizado_em`) ainda é aceito, mas não mostra a data da pesquisa.

Mantenha `DADOS_EXEMPLO` em `app.js` igual a `ofertas.json`: é a cópia usada quando o navegador abre a página como arquivo local (`file://`) e não consegue fazer `fetch` do JSON.

## De onde vieram os preços

Pesquisa conferida em **26/11/2026**. O `ofertas.json` traz 35 ofertas; 14 têm o preço sem condição publicado pela fonte.

- **Supermarket:** site oficial `redesupermarket.com.br/ofertas`. Os preços exigem registro de CPF antes de iniciar as compras no caixa; o site não publica o valor sem CPF, então o app mostra “sem CPF: ver encarte”.
- **Mundial:** página oficial `supermercadosmundial.com.br/departamentos/categoria/ofertas`. Frigideira, amêndoas, nozes e barril de Heineken mostram os dois preços no site (sem app / com app). A vodka Grey Goose passou a aparecer apenas com o preço no app: R$ 99,90 (o valor antigo de R$ 139,90 foi corrigido) e sem app “ver encarte”. O bacalhau segue como preço de balcão.
- **Guanabara:** encarte oficial `supermercadosguanabara.com.br/encarte`. Os preços publicados aqui foram conferidos no agregador Catalogosofertas; o nome do produto identifica essa fonte. São preços sem condição, então não precisam de `preco_sem_condicao`.
- **Prezunic:** encartes oficiais em `prezunic.com.br/encartes`, extraídos por OCR dos cartazes “3ª e 4ª da feirinha” (24 a 25/11/2026) e “4ª e 5ª da carne” (25 a 26/11/2026). Nesses PDFs o primeiro valor é o preço sem clube e o segundo é o preço com Clube Prezunic — os dois foram cadastrados.

Além do nome, condição e fonte também estão nos campos `condicao` e `fonte` e aparecem no cartão (selo “Requer ...” e linha “Fonte: ...”).

**Bom Desconto:** a campanha publicada no site (`supermercadosbomdesconto.com.br`) ainda era de 19 a 24/11/2026. Como não havia oferta válida em 25/11, os itens dessa rede foram removidos da lista.

Os preços são uma foto do dia da pesquisa. Confira sempre o encarte antes de comprar; a validade e o estoque podem mudar.

### Abrindo direto do celular (sem hospedar)

Navegadores bloqueiam a leitura de `ofertas.json` quando a página é aberta como arquivo local (`file://`). Por isso o app traz uma cópia dos dados reais em `app.js` (`DADOS_EXEMPLO`) para funcionar mesmo assim.

Para usar no celular sem hospedagem, copie a pasta atualizada para o aparelho e abra o `index.html`. A lista carregada é sempre a que está nos arquivos — não há mais seleção de arquivo dentro do app.

### Atualização semanal

Semana nova = editar `ofertas.json` (e a cópia `DADOS_EXEMPLO` em `app.js`) no computador e distribuir a versão nova:

- **Pasta copiada para o celular:** recopie os arquivos da pasta.
- **Servidor na Wi-Fi:** substitua os arquivos na pasta do computador; no próximo acesso o celular lê o `ofertas.json` novo.
- **Site publicado (GitHub Pages/Netlify):** envie os arquivos atualizados para a hospedagem; quem abrir o endereço passa a ver a lista nova. Se o celular tiver uma versão em cache, toque em **Atualizar agora**.

Como as validades antigas vencem, as ofertas da semana anterior desaparecem sozinhas no dia seguinte.

### Publicando no GitHub Pages

1. Crie um repositório e envie **todos os arquivos desta pasta** para a raiz dele.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch** → branch `main` → pasta `/(root)` → **Save**.
4. O endereço será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Depois disso, atualizar é simples: gere o novo `ofertas.json` (com a nova `atualizado_em`), abra o arquivo no GitHub, clique no lápis, cole o conteúdo novo e faça o commit. Em cerca de 1 minuto o site publicado passa a mostrar a nova lista. Quando mudar `index.html`, `estilo.css`, `app.js` ou `sw.js`, envie também esses arquivos — o cache do service worker foi para `ofertas-semana-v7` e precisa ser publicado para o botão **Atualizar agora** surtir efeito.

### Como instalar na tela inicial

- **Android (Chrome):** abra `index.html`, toque no menu ⋮ e em “Adicionar à tela inicial” / “Instalar app”.
- **iPhone (Safari):** abra `index.html`, toque em Compartilhar e em “Adicionar à Tela de Início”.

Para que a instalação e o funcionamento offline sejam completos (service worker), o ideal é abrir a pasta por um endereço `https://` — por exemplo, publicando em GitHub Pages, que é hospedagem estática gratuita. Sem hospedagem, o app ainda abre e funciona normalmente como página/atalho.

## Dica de teste

Abra o app e toque em **Arroz** ou **Carne**: você verá só as ofertas com esse termo, de todos os mercados, ordenadas pelo menor preço. Toque em **Só preços sem clube/app/CPF** para ver os valores sem condição em destaque. Conforme os dias passam, as ofertas cuja validade venceu desaparecem automaticamente.
