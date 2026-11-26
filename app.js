/* Ofertas da Semana — HTML, CSS e JavaScript puro, sem servidor. */

// Cópia de ofertas.json usada quando o navegador não permite ler arquivos locais
// (por exemplo, ao abrir o index.html direto do celular via file://).
// Mantenha igual ao ofertas.json quando atualizar a lista.
const DADOS_EXEMPLO = [
  { id: "guanabara-arroz-tio-joao-5-kg-preco", mercado: "Guanabara", produto: "Arroz Tio João 5 kg (preço segundo Catalogosofertas)", preco: 27.95, validade: "2026-11-25", condicao: "", fonte: "Catalogosofertas (agregador)", encarte: "https://www.supermercadosguanabara.com.br/encarte", preco_sem_condicao: null },
  { id: "guanabara-leite-uht-desnatado-ou-semidesnatado-preco", mercado: "Guanabara", produto: "Leite UHT desnatado ou semidesnatado (preço segundo Catalogosofertas)", preco: 3.99, validade: "2026-11-25", condicao: "", fonte: "Catalogosofertas (agregador)", encarte: "https://www.supermercadosguanabara.com.br/encarte", preco_sem_condicao: null },
  { id: "guanabara-carne-moida-friboi-tubete-500-g", mercado: "Guanabara", produto: "Carne moída Friboi tubete 500 g (preço segundo Catalogosofertas)", preco: 16.98, validade: "2026-11-25", condicao: "", fonte: "Catalogosofertas (agregador)", encarte: "https://www.supermercadosguanabara.com.br/encarte", preco_sem_condicao: null },
  { id: "guanabara-biscoito-recheado-maltado-piraque-85-g", mercado: "Guanabara", produto: "Biscoito recheado maltado Piraquê 85 g (preço segundo Catalogosofertas)", preco: 1.79, validade: "2026-11-25", condicao: "", fonte: "Catalogosofertas (agregador)", encarte: "https://www.supermercadosguanabara.com.br/encarte", preco_sem_condicao: null },
  { id: "supermarket-cenoura-abacate-ou-melao-amarelo-kg", mercado: "Supermarket", produto: "Cenoura, abacate ou melão amarelo (kg) (com CPF cadastrado)", preco: 3.99, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-abobora-aipim-ou-laranja-pera-kg", mercado: "Supermarket", produto: "Abóbora, aipim ou laranja pera (kg) (com CPF cadastrado)", preco: 2.98, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-manga-palmer-kg-com-cpf-cadastrado", mercado: "Supermarket", produto: "Manga Palmer (kg) (com CPF cadastrado)", preco: 4.95, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-maca-gala-850-g-com-cpf", mercado: "Supermarket", produto: "Maçã Gala 850 g (com CPF cadastrado)", preco: 4.95, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-uva-vermelha-500-g-com-cpf", mercado: "Supermarket", produto: "Uva vermelha 500 g (com CPF cadastrado)", preco: 6.95, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-banana-prata-kg-com-cpf-cadastrado", mercado: "Supermarket", produto: "Banana Prata (kg) (com CPF cadastrado)", preco: 6.98, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-pessego-kg-com-cpf-cadastrado", mercado: "Supermarket", produto: "Pêssego (kg) (com CPF cadastrado)", preco: 8.98, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-alho-kg-com-cpf-cadastrado", mercado: "Supermarket", produto: "Alho (kg) (com CPF cadastrado)", preco: 18.9, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-ovos-brancos-20-unidades-com-cpf", mercado: "Supermarket", produto: "Ovos brancos 20 unidades (com CPF cadastrado)", preco: 9.98, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-carre-suino-congelado-kg-com-cpf", mercado: "Supermarket", produto: "Carré suíno congelado (kg) (com CPF cadastrado)", preco: 14.97, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-file-de-coxa-sobrecoxa-de-frango", mercado: "Supermarket", produto: "Filé de coxa/sobrecoxa de frango Lar (kg) (com CPF cadastrado)", preco: 13.97, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-leite-elege-uht-1-l-com", mercado: "Supermarket", produto: "Leite Elegê UHT 1 L (com CPF cadastrado)", preco: 4.47, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-ace-ou-invicto-1-5-1", mercado: "Supermarket", produto: "Ace ou Invicto 1,5/1,6 kg (com CPF cadastrado)", preco: 9.98, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-omo-3-l-com-cpf-cadastrado", mercado: "Supermarket", produto: "OMO 3 L (com CPF cadastrado)", preco: 29.9, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "supermarket-toalhas-meu-bebe-100-unidades-com", mercado: "Supermarket", produto: "Toalhas Meu Bebê 100 unidades (com CPF cadastrado)", preco: 7.98, validade: "2026-11-25", condicao: "CPF cadastrado", fonte: "Site oficial Supermarket", encarte: "https://redesupermarket.com.br/ofertas/", preco_sem_condicao: null },
  { id: "mundial-bacalhau-morhua-legitimo-kg", mercado: "Mundial", produto: "Bacalhau Morhua legítimo (kg)", preco: 159.8, validade: "2026-11-26", condicao: "", fonte: "Site oficial Mundial", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas", preco_sem_condicao: null },
  { id: "mundial-vodka-grey-goose-750-ml-app", mercado: "Mundial", produto: "Vodka Grey Goose 750 ml (app Mundial Total)", preco: 99.9, validade: "2026-12-02", condicao: "app Mundial Total", fonte: "Site oficial Mundial", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas", preco_sem_condicao: null },
  { id: "mundial-frigideira-de-inducao-tramontina-inox-app", mercado: "Mundial", produto: "Frigideira de indução Tramontina inox (app Mundial Total)", preco: 129.9, validade: "2026-11-29", condicao: "app Mundial Total", fonte: "Site oficial Mundial", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas", preco_sem_condicao: 149.9 },
  { id: "mundial-amendoas-sem-casca-importadas-a-granel", mercado: "Mundial", produto: "Amêndoas sem casca importadas a granel (kg) (app Mundial Total)", preco: 105.9, validade: "2026-12-02", condicao: "app Mundial Total", fonte: "Site oficial Mundial", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas", preco_sem_condicao: 129.8 },
  { id: "mundial-nozes-sem-casca-importadas-a-granel", mercado: "Mundial", produto: "Nozes sem casca importadas a granel (kg) (app Mundial Total)", preco: 105.9, validade: "2026-12-02", condicao: "app Mundial Total", fonte: "Site oficial Mundial", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas", preco_sem_condicao: 129.9 },
  { id: "mundial-cerveja-heineken-barril-5-l-app", mercado: "Mundial", produto: "Cerveja Heineken barril 5 L (app Mundial Total)", preco: 99.9, validade: "2026-11-29", condicao: "app Mundial Total", fonte: "Site oficial Mundial", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas", preco_sem_condicao: 119.9 },
  { id: "prezunic-ovos-vermelhos-happy-eggs-20-unidades", mercado: "Prezunic", produto: "Ovos vermelhos Happy Eggs 20 unidades (com Clube Prezunic)", preco: 13.99, validade: "2026-11-25", condicao: "Clube Prezunic", fonte: "Encarte oficial Prezunic (OCR)", encarte: "https://www.prezunic.com.br/encartes", preco_sem_condicao: 15.99 },
  { id: "prezunic-alho-a-granel-kg-com-clube", mercado: "Prezunic", produto: "Alho a granel (kg) (com Clube Prezunic)", preco: 17.99, validade: "2026-11-25", condicao: "Clube Prezunic", fonte: "Encarte oficial Prezunic (OCR)", encarte: "https://www.prezunic.com.br/encartes", preco_sem_condicao: 22.99 },
  { id: "prezunic-carne-moida-friboi-congelada-500-g", mercado: "Prezunic", produto: "Carne moída Friboi congelada 500 g (com Clube Prezunic)", preco: 13.98, validade: "2026-11-25", condicao: "Clube Prezunic", fonte: "Encarte oficial Prezunic (OCR)", encarte: "https://www.prezunic.com.br/encartes", preco_sem_condicao: 16.99 },
  { id: "prezunic-acem-ou-paleta-bovina-maturatta-kg", mercado: "Prezunic", produto: "Acém ou paleta bovina Maturatta (kg) (com Clube Prezunic)", preco: 36.98, validade: "2026-11-26", condicao: "Clube Prezunic", fonte: "Encarte oficial Prezunic (OCR)", encarte: "https://www.prezunic.com.br/encartes", preco_sem_condicao: 42.99 },
  { id: "prezunic-coracao-da-alcatra-maturatta-kg-com", mercado: "Prezunic", produto: "Coração da alcatra Maturatta (kg) (com Clube Prezunic)", preco: 59.98, validade: "2026-11-26", condicao: "Clube Prezunic", fonte: "Encarte oficial Prezunic (OCR)", encarte: "https://www.prezunic.com.br/encartes", preco_sem_condicao: 69.99 },
  { id: "prezunic-contrafile-tradicional-ou-file-de-costela", mercado: "Prezunic", produto: "Contrafilé tradicional ou filé de costela Maturatta (kg) (com Clube Prezunic)", preco: 52.98, validade: "2026-11-26", condicao: "Clube Prezunic", fonte: "Encarte oficial Prezunic (OCR)", encarte: "https://www.prezunic.com.br/encartes", preco_sem_condicao: 62.99 },
  { id: "prezunic-sobrecoxa-de-frango-seara-ou-sadia", mercado: "Prezunic", produto: "Sobrecoxa de frango Seara ou Sadia congelada 1 kg (com Clube Prezunic)", preco: 12.98, validade: "2026-11-26", condicao: "Clube Prezunic", fonte: "Encarte oficial Prezunic (OCR)", encarte: "https://www.prezunic.com.br/encartes", preco_sem_condicao: 15.99 },
  { id: "prezunic-hamburguer-perdigao-congelado-672-g-com", mercado: "Prezunic", produto: "Hambúrguer Perdigão congelado 672 g (com Clube Prezunic)", preco: 13.99, validade: "2026-11-26", condicao: "Clube Prezunic", fonte: "Encarte oficial Prezunic (OCR)", encarte: "https://www.prezunic.com.br/encartes", preco_sem_condicao: 17.99 },
  { id: "prezunic-linguica-de-pernil-perdigao-kg-com", mercado: "Prezunic", produto: "Linguiça de pernil Perdigão (kg) (com Clube Prezunic)", preco: 14.99, validade: "2026-11-26", condicao: "Clube Prezunic", fonte: "Encarte oficial Prezunic (OCR)", encarte: "https://www.prezunic.com.br/encartes", preco_sem_condicao: 19.99 },
  { id: "prezunic-oleo-de-soja-liza-ou-soya", mercado: "Prezunic", produto: "Óleo de soja Liza ou Soya 900 ml (com Clube Prezunic)", preco: 7.99, validade: "2026-11-26", condicao: "Clube Prezunic", fonte: "Encarte oficial Prezunic (OCR)", encarte: "https://www.prezunic.com.br/encartes", preco_sem_condicao: 8.79 }
];

const CHAVE_HISTORICO = "ofertas-da-semana-historico";
const CHAVE_TEMA = "ofertas-da-semana-tema";
const ATUALIZADO_EM_EXEMPLO = "2026-11-26";

let mudancasPreco = {};
let atualizadoEm = "";
let soSemCondicao = false;

const el = (tag, classe, texto) => {
  const node = document.createElement(tag);
  if (classe) node.className = classe;
  if (texto !== undefined) node.textContent = texto;
  return node;
};

let ofertas = [];

function semAcento(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function primeiroCampo(objeto, nomes) {
  for (const nome of nomes) {
    if (objeto[nome] !== undefined && objeto[nome] !== null && objeto[nome] !== "") return objeto[nome];
  }
  return "";
}

function inferirCondicao(produto) {
  const texto = produto.toLowerCase();
  if (texto.includes("clube prezunic")) return "Clube Prezunic";
  if (texto.includes("app mundial total")) return "app Mundial Total";
  if (texto.includes("cpf cadastrado")) return "CPF cadastrado";
  return "";
}

function inferirFonte(produto, mercado) {
  if (/catalogosofertas/i.test(produto)) return "Catalogosofertas (agregador)";
  if (mercado === "Supermarket") return "Site oficial Supermarket";
  if (mercado === "Mundial") return "Site oficial Mundial";
  if (mercado === "Prezunic") return "Encarte oficial Prezunic (OCR)";
  return "";
}

function gerarIdLocal(mercado, produto) {
  return semAcento(`${mercado} ${produto}`)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .split("-")
    .slice(0, 7)
    .join("-");
}

function normalizarOferta(item) {
  if (!item || typeof item !== "object") return null;
  const produto = String(primeiroCampo(item, ["produto", "product", "nome"])).trim();
  const mercado = String(primeiroCampo(item, ["mercado", "market", "supermercado"])).trim() || "Outros mercados";
  if (!produto) return null;
  const condicao = String(primeiroCampo(item, ["condicao", "condição", "requer"])).trim() || inferirCondicao(produto);
  const fonte = String(primeiroCampo(item, ["fonte", "source"])).trim() || inferirFonte(produto, mercado);
  const id = String(primeiroCampo(item, ["id", "id_oferta", "oferta_id"])).trim() || gerarIdLocal(mercado, produto);
  return {
    id,
    mercado,
    produto,
    preco: precoParaNumero(primeiroCampo(item, ["preco", "preço", "price", "valor"])),
    validade: primeiroCampo(item, ["validade", "data_validade", "data de validade", "vencimento"]),
    condicao,
    fonte,
    encarte: String(primeiroCampo(item, ["encarte", "link_encarte", "link do encarte", "link", "url"])).trim(),
    precoSemCondicao: precoParaNumero(primeiroCampo(item, ["preco_sem_condicao", "precoSemCondicao", "preco sem condicao"]))
  };
}

function extrairLista(dados) {
  if (Array.isArray(dados)) return { lista: dados, atualizadoEm: "" };
  if (dados && typeof dados === "object" && Array.isArray(dados.ofertas)) {
    return {
      lista: dados.ofertas,
      atualizadoEm: String(dados.atualizado_em ?? dados["atualizado em"] ?? "").trim()
    };
  }
  return null;
}

function precoParaNumero(valor) {
  if (typeof valor === "number") return Number.isFinite(valor) ? valor : null;
  let texto = String(valor).replace(/[^\d,.-]/g, "").trim();
  if (!texto) return null;
  const temVirgula = texto.includes(",");
  const temPonto = texto.includes(".");
  if (temVirgula && temPonto) {
    texto = texto.replace(/\./g, "").replace(",", ".");
  } else if (temVirgula) {
    texto = texto.replace(",", ".");
  } else if (temPonto && /^\d{1,3}(\.\d{3})+$/.test(texto)) {
    texto = texto.replace(/\./g, "");
  }
  const numero = Number(texto);
  return Number.isFinite(numero) ? numero : null;
}

function formatarPreco(valor) {
  if (valor === null) return "Ver preço no encarte";
  return "R$ " + valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function rotuloSemCondicao(condicao) {
  const texto = String(condicao || "").toLowerCase();
  if (texto.includes("clube")) return "sem clube";
  if (texto.includes("app")) return "sem app";
  if (texto.includes("cpf")) return "sem CPF";
  return "sem condição";
}

function precoExibicao(oferta) {
  if (soSemCondicao && oferta.condicao && oferta.precoSemCondicao !== null) {
    return oferta.precoSemCondicao;
  }
  return oferta.preco;
}

function dataParaComparacao(valor) {
  const texto = String(valor ?? "").trim();
  if (!texto) return null;
  let match = texto.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (match) return { ano: +match[1], mes: +match[2], dia: +match[3] };
  match = texto.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (match) return { ano: +match[3], mes: +match[2], dia: +match[1] };
  return null;
}

function datasSaoValidas(data) {
  if (!data) return false;
  const teste = new Date(data.ano, data.mes - 1, data.dia);
  return teste.getFullYear() === data.ano && teste.getMonth() === data.mes - 1 && teste.getDate() === data.dia;
}

function hojeLocal() {
  const agora = new Date();
  return { ano: agora.getFullYear(), mes: agora.getMonth() + 1, dia: agora.getDate() };
}

function emOrdem(data, outra) {
  return data.ano - outra.ano || data.mes - outra.mes || data.dia - outra.dia;
}

function estaVencida(oferta) {
  const validade = dataParaComparacao(oferta.validade);
  if (!datasSaoValidas(validade)) return false; // sem data válida: não esconde
  return emOrdem(validade, hojeLocal()) < 0;
}

function diasParaVencer(oferta) {
  const validade = dataParaComparacao(oferta.validade);
  if (!datasSaoValidas(validade)) return null;
  const inicio = new Date(hojeLocal().ano, hojeLocal().mes - 1, hojeLocal().dia);
  const fim = new Date(validade.ano, validade.mes - 1, validade.dia);
  return Math.round((fim - inicio) / 86400000);
}

function eUltimoDia(oferta) {
  return diasParaVencer(oferta) === 0;
}

function formatarValidade(oferta) {
  const validade = dataParaComparacao(oferta.validade);
  if (datasSaoValidas(validade)) {
    const dia = String(validade.dia).padStart(2, "0");
    const mes = String(validade.mes).padStart(2, "0");
    return `Válido até ${dia}/${mes}/${validade.ano}`;
  }
  return "Validade conforme encarte";
}

function formatarDataCurta(valor) {
  const data = dataParaComparacao(valor);
  if (!datasSaoValidas(data)) return String(valor || "");
  return `${String(data.dia).padStart(2, "0")}/${String(data.mes).padStart(2, "0")}/${data.ano}`;
}

function renderizarAvisos() {
  const avisos = document.getElementById("avisos");
  if (!avisos) return;
  esvaziar(avisos);

  if (!atualizadoEm) return;

  const data = dataParaComparacao(atualizadoEm);
  if (!datasSaoValidas(data)) return;
  const hoje = hojeLocal();
  const inicio = new Date(hoje.ano, hoje.mes - 1, hoje.dia);
  const fim = new Date(data.ano, data.mes - 1, data.dia);
  const dias = Math.round((inicio - fim) / 86400000);
  const curto = formatarDataCurta(atualizadoEm);

  if (dias < 0) {
    avisos.append(el("div", "aviso aviso--atencao",
      `Lista com data futura (${curto}). Confira a data do celular.`));
  } else if (dias === 1) {
    avisos.append(el("div", "aviso aviso--leve",
      `Lista de ${curto} (ontem). Confira o encarte antes de comprar.`));
  } else if (dias >= 2) {
    avisos.append(el("div", "aviso aviso--atencao",
      `Lista com ${dias} dias (${curto}). Pode estar desatualizada: confira o encarte antes de comprar.`));
  }
}

function linkSeguro(url) {
  try {
    const endereco = new URL(url);
    return (endereco.protocol === "https:" || endereco.protocol === "http:") ? endereco.href : null;
  } catch (_) {
    return null;
  }
}

function aceitaLocalStorage() {
  try {
    localStorage.setItem("__teste_ofertas__", "1");
    localStorage.removeItem("__teste_ofertas__");
    return true;
  } catch (_) {
    return false;
  }
}

function chaveLegada(oferta) {
  return "legado:" + semAcento(oferta.mercado) + "|" + semAcento(oferta.produto);
}

function chaveOferta(oferta) {
  return oferta.id ? "id:" + oferta.id : chaveLegada(oferta);
}

function assinaturaDaLista(lista) {
  return lista.map(oferta => `${chaveOferta(oferta)}:${oferta.preco}`).sort().join("|");
}

function atualizarHistorico(lista, opcoes = {}) {
  const vazio = { mudancas: {}, aviso: "" };
  if (!aceitaLocalStorage()) return vazio;

  const assinatura = assinaturaDaLista(lista);
  let salvo = null;
  try {
    salvo = JSON.parse(localStorage.getItem(CHAVE_HISTORICO) || "null");
  } catch (_) { /* histórico inválido começa do zero */ }

  if (salvo && Array.isArray(salvo.itens) && salvo.assinatura === assinatura) {
    return { mudancas: salvo.mudancas || {}, aviso: "" };
  }

  const anteriores = {};
  if (salvo && Array.isArray(salvo.itens)) {
    salvo.itens.forEach(item => {
      if (typeof item.preco !== "number") return;
      if (item.id) anteriores["id:" + item.id] = item.preco;
      const legada = chaveLegada(item);
      if (legada && !(legada in anteriores)) anteriores[legada] = item.preco;
    });
  }

  const dataLista = String(opcoes.atualizadoEm || "");

  const mudancas = {};
  lista.forEach(oferta => {
    const chave = chaveOferta(oferta);
    const anterior = anteriores[chave] ?? anteriores[chaveLegada(oferta)];
    if (typeof anterior === "number" && typeof oferta.preco === "number" && Math.abs(anterior - oferta.preco) > 0.001) {
      mudancas[chave] = anterior;
    }
  });

  try {
    localStorage.setItem(CHAVE_HISTORICO, JSON.stringify({
      assinatura,
      atualizado_em: dataLista,
      itens: lista.map(oferta => ({
        id: oferta.id,
        mercado: oferta.mercado,
        produto: oferta.produto,
        preco: oferta.preco
      })),
      mudancas
    }));
  } catch (_) { /* sem espaço: o app segue sem histórico */ }

  return { mudancas, aviso: "" };
}

function produtoBase(produto) {
  return semAcento(produto)
    .replace(/\([^)]*\)/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")[0]
    .replace(/s$/, "");
}

function criarComparador(validas) {
  const grupos = new Map();
  validas.forEach(oferta => {
    const chave = produtoBase(oferta.produto);
    if (!chave) return;
    if (!grupos.has(chave)) grupos.set(chave, new Map());
    const porMercado = grupos.get(chave);
    const atual = porMercado.get(oferta.mercado);
    if (!atual || (precoExibicao(oferta) ?? Infinity) < (precoExibicao(atual) ?? Infinity)) {
      porMercado.set(oferta.mercado, oferta);
    }
  });

  const comparaveis = [...grupos.entries()].filter(([, porMercado]) => porMercado.size >= 2);
  if (!comparaveis.length) return null;

  const secao = el("section", "comparador");
  secao.append(
    el("h2", "comparador__titulo", "Compare entre mercados"),
    el("p", "comparador__dica", "Mesmo produto, menor preço em cada rede:")
  );

  comparaveis.forEach(([chave, porMercado]) => {
    const bloco = el("div", "comparador__item");
    const titulo = chave.charAt(0).toUpperCase() + chave.slice(1);
    const menor = Math.min(...[...porMercado.values()].map(oferta => precoExibicao(oferta) ?? Infinity));
    const linhas = el("div", "comparador__linhas");

    [...porMercado.values()]
      .sort((a, b) => (precoExibicao(a) ?? Infinity) - (precoExibicao(b) ?? Infinity))
      .forEach(oferta => {
        const destino = linkSeguro(oferta.encarte);
        const linha = el(destino ? "a" : "div",
          "comparador__linha" + (precoExibicao(oferta) === menor ? " comparador__linha--melhor" : ""));
        if (destino) {
          linha.href = destino;
          linha.target = "_blank";
          linha.rel = "noopener noreferrer";
        }
        linha.append(
          el("span", "comparador__mercado", oferta.mercado),
          el("span", "comparador__detalhe", oferta.produto),
          el("strong", "comparador__preco", formatarPreco(precoExibicao(oferta)))
        );
        linhas.append(linha);
      });

    bloco.append(el("h3", "comparador__produto", titulo), linhas);
    secao.append(bloco);
  });

  return secao;
}

async function carregarOfertas() {
  try {
    const resposta = await fetch("ofertas.json", { cache: "no-store" });
    if (resposta.ok) {
      const extraido = extrairLista(await resposta.json());
      if (extraido) return { ...extraido, origem: "ofertas.json" };
    }
  } catch (_) { /* file:// bloqueia fetch: usa a cópia embutida */ }

  return {
    lista: DADOS_EXEMPLO,
    atualizadoEm: ATUALIZADO_EM_EXEMPLO,
    origem: "cópia embutida"
  };
}

function criarCartao(oferta, mostrarMercado) {
  const cartao = el("article", "oferta");
  if (eUltimoDia(oferta)) {
    cartao.classList.add("oferta--ultimo-dia");
    cartao.append(el("span", "oferta__selo", "Último dia"));
  }
  const usarSemCondicao = soSemCondicao && !!oferta.condicao && oferta.precoSemCondicao !== null;

  if (oferta.condicao) {
    cartao.append(el("span", "oferta__selo " + (usarSemCondicao ? "oferta__selo--sem" : "oferta__selo--condicao"),
      usarSemCondicao ? "Preço " + rotuloSemCondicao(oferta.condicao) : "Requer " + oferta.condicao));
  }

  const linha = el("div", "oferta__linha");
  const nomeTexto = usarSemCondicao
    ? oferta.produto.replace(/\s*\((?:com|app)[^)]*\)\s*$/i, "")
    : oferta.produto;
  const nome = el("h3", "oferta__produto", nomeTexto || oferta.produto);

  const precos = el("div", "oferta__precos");
  precos.append(el("div", "oferta__preco", formatarPreco(precoExibicao(oferta))));

  if (oferta.condicao && oferta.precoSemCondicao !== null) {
    const alternativo = el("p", "oferta__preco-alternativo");
    if (usarSemCondicao) {
      alternativo.append(document.createTextNode("Com " + oferta.condicao + ": "),
        el("strong", "", formatarPreco(oferta.preco)));
    } else {
      const rotulo = rotuloSemCondicao(oferta.condicao);
      alternativo.append(document.createTextNode(rotulo.charAt(0).toUpperCase() + rotulo.slice(1) + ": "),
        el("strong", "", formatarPreco(oferta.precoSemCondicao)));
    }
    precos.append(alternativo);
  } else if (oferta.condicao) {
    const rotulo = rotuloSemCondicao(oferta.condicao);
    precos.append(el("p", "oferta__preco-alternativo",
      rotulo.charAt(0).toUpperCase() + rotulo.slice(1) + ": ver encarte"));
  }

  linha.append(nome, precos);

  const validade = el("p", "oferta__validade");
  if (mostrarMercado) {
    validade.append(el("span", "oferta__mercado", oferta.mercado), document.createTextNode(" · "));
  }
  validade.append(document.createTextNode(formatarValidade(oferta)));

  const destino = linkSeguro(oferta.encarte);
  let acao;
  if (destino) {
    acao = el("a", "oferta__botao", "Ver encarte ↗");
    acao.href = destino;
    acao.target = "_blank";
    acao.rel = "noopener noreferrer";
  } else {
    acao = el("button", "oferta__botao", "Encarte indisponível");
    acao.type = "button";
    acao.disabled = true;
  }

  const partes = [linha, validade];

  if (oferta.fonte) {
    const ehAgregador = /agregador/i.test(oferta.fonte);
    const fonte = el("p", "oferta__fonte" + (ehAgregador ? " oferta__fonte--agregador" : ""));
    fonte.append(document.createTextNode("Fonte: "), el("strong", "", oferta.fonte));
    partes.push(fonte);
  }

  const anterior = mudancasPreco[chaveOferta(oferta)];
  if (typeof anterior === "number" && typeof oferta.preco === "number" && Math.abs(anterior - oferta.preco) > 0.001) {
    const caiu = oferta.preco < anterior;
    partes.push(el("p", `oferta__variacao oferta__variacao--${caiu ? "baixou" : "subiu"}`,
      `${caiu ? "Caiu" : "Subiu"} de ${formatarPreco(anterior)}`));
  }

  partes.push(acao);
  cartao.append(...partes);
  return cartao;
}

function esvaziar(no) {
  while (no.firstChild) no.removeChild(no.firstChild);
}

function renderizar() {
  const lista = document.getElementById("lista");
  const status = document.getElementById("status");
  const termo = document.getElementById("busca").value.trim();
  esvaziar(lista);
  renderizarAvisos();

  const selecionadas = soSemCondicao
    ? ofertas.filter(oferta => !oferta.condicao || oferta.precoSemCondicao !== null)
    : ofertas;
  const validas = selecionadas.filter(oferta => !estaVencida(oferta));
  const vencidas = selecionadas.length - validas.length;

  if (!ofertas.length) {
    status.textContent = "Nenhuma oferta cadastrada. Confira o arquivo ofertas.json.";
    lista.append(el("p", "vazio", "Não há ofertas para mostrar."));
    return;
  }

  if (!selecionadas.length) {
    status.textContent = "Nenhuma oferta sem clube/app/CPF nesta lista.";
    lista.append(el("p", "vazio",
      "Nenhuma oferta tem preço publicado sem clube, app ou CPF. Toque no filtro para ver todas."));
    return;
  }

  if (termo) {
    const termos = semAcento(termo).split(/\s+/).filter(Boolean);
    const encontradas = validas
      .filter(oferta => {
        const texto = semAcento(`${oferta.produto} ${oferta.mercado}`);
        return termos.every(parte => texto.includes(parte));
      })
      .sort((a, b) => (precoExibicao(a) ?? Infinity) - (precoExibicao(b) ?? Infinity));

    status.textContent = `${encontradas.length} ${encontradas.length === 1 ? "oferta encontrada" : "ofertas encontradas"} para “${termo}”, do menor para o maior preço` +
      (soSemCondicao ? " (somente sem clube/app/CPF)." : ".");

    if (!encontradas.length) {
      lista.append(el("p", "vazio", "Nenhuma oferta com esse nome. Tente outra palavra."));
      return;
    }

    const grade = el("div", "lista-ofertas");
    encontradas.forEach(oferta => grade.append(criarCartao(oferta, true)));
    lista.append(grade);
    return;
  }

  status.textContent = `${validas.length} ${validas.length === 1 ? "oferta válida" : "ofertas válidas"} nesta semana.` +
    (vencidas ? ` ${vencidas} vencida${vencidas === 1 ? "" : "s"} ${vencidas === 1 ? "foi" : "foram"} escondida${vencidas === 1 ? "" : "s"}.` : "") +
    " Ordenadas por validade." +
    (soSemCondicao ? " Somente preços sem clube/app/CPF." : "");

  const comparador = criarComparador(validas);
  if (comparador) lista.append(comparador);

  const grupos = new Map();
  validas.forEach(oferta => {
    if (!grupos.has(oferta.mercado)) grupos.set(oferta.mercado, []);
    grupos.get(oferta.mercado).push(oferta);
  });

  if (!grupos.size) {
    lista.append(el("p", "vazio", "Todas as ofertas vencidas. Atualize a lista publicada."));
    return;
  }

  grupos.forEach((itens, mercado) => {
    const secao = el("section", "mercado");
    const titulo = el("h2", "mercado__titulo");
    titulo.append(document.createTextNode(mercado), el("span", "mercado__contador", String(itens.length)));
    const grade = el("div", "lista-ofertas");
    itens
      .slice()
      .sort((a, b) =>
        (diasParaVencer(a) ?? Infinity) - (diasParaVencer(b) ?? Infinity) ||
        (precoExibicao(a) ?? Infinity) - (precoExibicao(b) ?? Infinity))
      .forEach(oferta => grade.append(criarCartao(oferta, false)));
    secao.append(titulo, grade);
    lista.append(secao);
  });
}

function configurarTema() {
  const botao = document.getElementById("tema");
  const meta = document.querySelector('meta[name="theme-color"]');
  let escuro = !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);

  try {
    const salvo = localStorage.getItem(CHAVE_TEMA);
    if (salvo === "escuro") escuro = true;
    if (salvo === "claro") escuro = false;
  } catch (_) { /* usa a preferência do sistema */ }

  const aplicar = () => {
    document.body.classList.toggle("tema-escuro", escuro);
    botao.textContent = escuro ? "☀️" : "🌙";
    botao.setAttribute("aria-label", escuro ? "Ativar modo claro" : "Ativar modo escuro");
    if (meta) meta.setAttribute("content", escuro ? "#0a3a2b" : "#0b6b4f");
  };

  aplicar();
  botao.addEventListener("click", () => {
    escuro = !escuro;
    try { localStorage.setItem(CHAVE_TEMA, escuro ? "escuro" : "claro"); } catch (_) {}
    aplicar();
  });
}

function configurarEventos() {
  const busca = document.getElementById("busca");
  const limpar = document.getElementById("limpar");

  const atualizarBotaoLimpar = () => {
    limpar.hidden = !busca.value;
  };

  busca.addEventListener("input", () => {
    atualizarBotaoLimpar();
    renderizar();
  });

  busca.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
      busca.value = "";
      atualizarBotaoLimpar();
      renderizar();
    }
  });

  limpar.addEventListener("click", () => {
    busca.value = "";
    atualizarBotaoLimpar();
    busca.focus();
    renderizar();
  });

  document.querySelectorAll("[data-busca]").forEach(botao => {
    botao.addEventListener("click", () => {
      busca.value = botao.dataset.busca;
      atualizarBotaoLimpar();
      renderizar();
      busca.focus();
    });
  });

  const filtro = document.getElementById("sem-condicao");
  filtro.addEventListener("click", () => {
    soSemCondicao = !soSemCondicao;
    filtro.setAttribute("aria-pressed", String(soSemCondicao));
    filtro.classList.toggle("filtro--ativo", soSemCondicao);
    filtro.textContent = soSemCondicao ? "Mostrar todos os preços" : "Só preços sem clube/app/CPF";
    renderizar();
  });

  const mensagem = document.getElementById("mensagem-atualizar");
  const botaoAtualizar = document.getElementById("atualizar-agora");
  botaoAtualizar.addEventListener("click", async () => {
    botaoAtualizar.disabled = true;
    mensagem.className = "mensagem";
    mensagem.textContent = "Buscando a lista publicada...";

    try {
      if (
        "serviceWorker" in navigator &&
        (location.protocol === "https:" || location.protocol === "http:")
      ) {
        const registro = await navigator.serviceWorker.getRegistration();
        if (registro) {
          await registro.update();
          if (registro.waiting) registro.waiting.postMessage({ type: "SKIP_WAITING" });
        }
      }

      const resposta = await fetch(`ofertas.json?t=${Date.now()}`, { cache: "no-store" });
      if (!resposta.ok) throw new Error("falha na busca");
      if (!extrairLista(await resposta.json())) throw new Error("formato inválido");

      location.reload();
    } catch (_) {
      mensagem.className = "mensagem erro";
      mensagem.textContent = "Não foi possível buscar agora. Verifique a conexão e tente de novo.";
    } finally {
      botaoAtualizar.disabled = false;
    }
  });
}

async function iniciar() {
  configurarTema();
  configurarEventos();
  const carregadas = await carregarOfertas();
  ofertas = carregadas.lista.map(normalizarOferta).filter(Boolean);
  atualizadoEm = carregadas.atualizadoEm;
  const historico = atualizarHistorico(ofertas, { atualizadoEm });
  mudancasPreco = historico.mudancas;
  renderizar();

  if (
    "serviceWorker" in navigator &&
    (location.protocol === "https:" || location.protocol === "http:")
  ) {
    try { await navigator.serviceWorker.register("sw.js"); } catch (_) { /* app funciona sem service worker */ }
  }
}

iniciar();
