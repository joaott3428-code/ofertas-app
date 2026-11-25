# Ofertas da Semana

Site simples para celular, sem login, sem servidor próprio e sem bibliotecas: mostra as ofertas dos mercados agrupadas por mercado, com busca, ordenação por preço e ocultação automática das ofertas vencidas. Pode ser aberto direto do celular ou publicado como site estático no GitHub Pages/Netlify.

Pasta isolada desta versão: `ofertas-semana-app`.

## Arquivos

- `index.html` — tela do app.
- `estilo.css` — visual com fonte grande e botões fáceis de tocar.
- `app.js` — busca, filtro por validade, ordenação, leitura dos dados e cópia de segurança.
- `ofertas.json` — **sua lista semanal** (edite este arquivo).
- `manifest.webmanifest`, `sw.js`, `icone.svg`, `icone-180.png`, `icone-192.png`, `icone-512.png` — para salvar como app na tela inicial e funcionar offline.

## Atualizando as ofertas

Edite `ofertas.json`. Cada item tem estes campos:

```json
{
  "mercado": "Guanabara",
  "produto": "Arroz Tio João 5 kg",
  "preco": 27.95,
  "validade": "2026-11-25",
  "encarte": "https://www.catalogosofertas.com.br/ofertas/arroz/supermercados-guanabara"
}
```

- `preco` aceita número (`27.95`) ou texto (`"27,95"`, `"R$ 27,95"`).
- `validade` aceita `AAAA-MM-DD` ou `DD/MM/AAAA`. Ofertas com data anterior ao dia atual do celular são escondidas.
- `encarte` deve ser um link `http://` ou `https://`.

## De onde vieram os preços

Pesquisa feita em **24/11/2026**. O `ofertas.json` traz 20 ofertas com preço conferido:

- **Supermarket:** site oficial `redesupermarket.com.br/ofertas` (ofertas de 24 a 25/11/2026; some exigem CPF no caixa).
- **Mundial:** página oficial `supermercadosmundial.com.br/departamentos/categoria/ofertas`. Vários preços são o valor **com o app Mundial Total** — isso está escrito no nome do produto.
- **Guanabara:** agregador Catalogosofertas, páginas atualizadas em 24/11/2026, com validade até 25/11/2026. O site oficial do Guanabara não respondeu à consulta automatizada, por isso os links apontam para as páginas onde os preços foram conferidos.

**Bom Desconto:** os preços estão nos cartazes do carrossel da página inicial (`supermercadosbomdesconto.com.br`), em imagens. Extraí os valores por OCR dos seis cartazes e conferi a validade no texto da própria página (19 a 24/11/2026). Todos os preços dessa rede são **com o Clube Bom Desconto** — deixei isso escrito no nome do produto. O botão “Ver encarte” abre a página inicial, onde os cartazes aparecem ao rolar um pouco.

Os preços são uma foto do dia da pesquisa. Confira sempre o encarte antes de comprar; a validade e o estoque podem mudar.

### Abrindo direto do celular (sem hospedar)

Navegadores bloqueiam a leitura de `ofertas.json` quando a página é aberta como arquivo local (`file://`). Por isso o app traz uma cópia dos dados reais em `app.js` (`DADOS_EXEMPLO`) para funcionar mesmo assim.

Depois de editar `ofertas.json` no computador, envie o arquivo para o celular e, no app, abra **Como usar e como atualizar → Escolher arquivo ofertas.json**. A nova lista é salva no próprio celular e usada nas próximas aberturas. Se preferir, atualize também a cópia `DADOS_EXEMPLO` em `app.js` antes de copiar a pasta para o celular.

A lista escolhida no celular tem prioridade sobre o `ofertas.json` publicado. Para descartá-la e voltar a usar a lista do site, toque em **Voltar à lista publicada** (o botão aparece quando existe uma lista salva).

### Atualização semanal

Semana nova = editar `ofertas.json` (e a cópia `DADOS_EXEMPLO` em `app.js`) no computador e distribuir a versão nova conforme a forma de abertura:

- **Pasta copiada para o celular:** recopie os arquivos ou use **Escolher arquivo ofertas.json** no app.
- **Servidor na Wi-Fi:** substitua os arquivos na pasta do computador; no próximo acesso o celular lê o `ofertas.json` novo. Se tiver uma lista escolhida salva, toque em **Voltar à lista publicada**.
- **Site publicado (GitHub Pages/Netlify):** envie os arquivos atualizados para a hospedagem; quem abrir o endereço passa a ver a lista nova. Quem tiver lista salva no celular deve tocar em **Voltar à lista publicada**.

Como as validades antigas vencem, as ofertas da semana anterior desaparecem sozinhas no dia seguinte.

### Publicando no GitHub Pages

1. Crie um repositório e envie **todos os arquivos desta pasta** para a raiz dele.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch** → branch `main` → pasta `/(root)` → **Save**.
4. O endereço será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Depois disso, atualizar é simples: gere o novo `ofertas.json`, abra o arquivo no GitHub, clique no lápis, cole o conteúdo novo e faça o commit. Em cerca de 1 minuto o site publicado passa a mostrar a nova lista. Quem tiver uma lista escolhida no celular deve tocar em **Voltar à lista publicada**.

### Como instalar na tela inicial

- **Android (Chrome):** abra `index.html`, toque no menu ⋮ e em “Adicionar à tela inicial” / “Instalar app”.
- **iPhone (Safari):** abra `index.html`, toque em Compartilhar e em “Adicionar à Tela de Início”.

Para que a instalação e o funcionamento offline sejam completos (service worker), o ideal é abrir a pasta por um endereço `https://` — por exemplo, publicando em GitHub Pages, que é hospedagem estática gratuita. Sem hospedagem, o app ainda abre e funciona normalmente como página/atalho.

## Dica de teste

Abra o app e toque em **Arroz** ou **Carne**: você verá só as ofertas com esse termo, de todos os mercados, ordenadas pela menor preço. Conforme os dias passam, as ofertas cuja validade venceu desaparecem automaticamente.
