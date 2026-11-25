/* Ofertas da Semana — HTML, CSS e JavaScript puro, sem servidor. */

// Cópia de ofertas.json usada quando o navegador não permite ler arquivos locais
// (por exemplo, ao abrir o index.html direto do celular via file://).
// Mantenha igual ao ofertas.json quando atualizar a lista.
const DADOS_EXEMPLO = [
  { mercado: "Guanabara", produto: "Arroz Tio João 5 kg", preco: 27.95, validade: "2026-11-25", encarte: "https://www.catalogosofertas.com.br/ofertas/arroz/supermercados-guanabara" },
  { mercado: "Guanabara", produto: "Leite UHT desnatado ou semidesnatado", preco: 3.99, validade: "2026-11-25", encarte: "https://www.catalogosofertas.com.br/ofertas/leite/supermercados-guanabara" },
  { mercado: "Guanabara", produto: "Carne moída Friboi tubete 500 g", preco: 16.98, validade: "2026-11-25", encarte: "https://www.catalogosofertas.com.br/ofertas/carne/supermercados-guanabara" },
  { mercado: "Guanabara", produto: "Biscoito recheado maltado Piraquê 85 g", preco: 1.79, validade: "2026-11-25", encarte: "https://www.catalogosofertas.com.br/ofertas/biscoito/supermercados-guanabara" },
  { mercado: "Supermarket", produto: "Leite Elegê UHT 1 L", preco: 4.47, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Ovos brancos 20 unidades", preco: 9.98, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Carré suíno congelado (kg)", preco: 14.97, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Filé de coxa/sobrecoxa de frango Lar (kg)", preco: 13.97, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Banana Prata (kg)", preco: 6.98, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Mundial", produto: "Refresco Parati 15 g (app Mundial Total)", preco: 0.85, validade: "2026-12-02", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Mundial", produto: "Biscoito Parati 85 g (app Mundial Total)", preco: 1.77, validade: "2026-12-02", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Mundial", produto: "Chuchu a granel (kg) (app Mundial Total)", preco: 1.98, validade: "2026-11-25", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Mundial", produto: "Farinha de trigo Farina 1 kg (app Mundial Total)", preco: 2.87, validade: "2026-12-02", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Mundial", produto: "Molho de tomate Knorr sachê 300 g (app Mundial Total)", preco: 2.68, validade: "2026-12-02", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Bom Desconto", produto: "Margarina Cremosy 500 g (com Clube)", preco: 4.99, validade: "2026-11-24", encarte: "https://supermercadosbomdesconto.com.br/" },
  { mercado: "Bom Desconto", produto: "Requeijão Itambé Cremoso copo 200 g (com Clube)", preco: 8.98, validade: "2026-11-24", encarte: "https://supermercadosbomdesconto.com.br/" },
  { mercado: "Bom Desconto", produto: "Salsicha Hot Dog Perdigão (kg) (com Clube)", preco: 8.98, validade: "2026-11-24", encarte: "https://supermercadosbomdesconto.com.br/" },
  { mercado: "Bom Desconto", produto: "Hambúrguer Sadia Tradicional ou Churrasco 672 g (com Clube)", preco: 13.98, validade: "2026-11-24", encarte: "https://supermercadosbomdesconto.com.br/" },
  { mercado: "Bom Desconto", produto: "Arroz Agulhinha Tchê 5 kg (com Clube)", preco: 16.98, validade: "2026-11-24", encarte: "https://supermercadosbomdesconto.com.br/" },
  { mercado: "Bom Desconto", produto: "Mortadela Ouro Perdigão (kg) (com Clube)", preco: 21.98, validade: "2026-11-24", encarte: "https://supermercadosbomdesconto.com.br/" }
];

const CHAVE_LOCAL = "ofertas-da-semana-dados";
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

function normalizarOferta(item) {
  if (!item || typeof item !== "object") return null;
  const produto = String(primeiroCampo(item, ["produto", "product", "nome"])).trim();
  const mercado = String(primeiroCampo(item, ["mercado", "market", "supermercado"])).trim() || "Outros mercados";
  if (!produto) return null;
  return {
    mercado,
    produto,
    preco: precoParaNumero(primeiroCampo(item, ["preco", "preço", "price", "valor"])),
    validade: primeiroCampo(item, ["validade", "data_validade", "data de validade", "vencimento"]),
    encarte: String(primeiroCampo(item, ["encarte", "link_encarte", "link do encarte", "link", "url"])).trim()
  };
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

function formatarValidade(oferta) {
  const validade = dataParaComparacao(oferta.validade);
  if (datasSaoValidas(validade)) {
    const dia = String(validade.dia).padStart(2, "0");
    const mes = String(validade.mes).padStart(2, "0");
    return `Válido até ${dia}/${mes}/${validade.ano}`;
  }
  return "Validade conforme encarte";
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

async function carregarOfertas() {
  if (aceitaLocalStorage()) {
    try {
      const salvo = localStorage.getItem(CHAVE_LOCAL);
      if (salvo) {
        const dados = JSON.parse(salvo);
        if (Array.isArray(dados)) return { dados, origem: "arquivo escolhido" };
      }
    } catch (_) { /* descarta dados inválidos e tenta o arquivo */ }
  }

  try {
    const resposta = await fetch("ofertas.json", { cache: "no-store" });
    if (resposta.ok) {
      const dados = await resposta.json();
      if (Array.isArray(dados)) return { dados, origem: "ofertas.json" };
    }
  } catch (_) { /* file:// bloqueia fetch: usa a cópia embutida */ }

  return { dados: DADOS_EXEMPLO, origem: "cópia embutida" };
}

function criarCartao(oferta, mostrarMercado) {
  const cartao = el("article", "oferta");
  const linha = el("div", "oferta__linha");
  const nome = el("h3", "oferta__produto", oferta.produto);
  const preco = el("div", "oferta__preco", formatarPreco(oferta.preco));
  linha.append(nome, preco);

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

  cartao.append(linha, validade, acao);
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

  const validas = ofertas.filter(oferta => !estaVencida(oferta));
  const vencidas = ofertas.length - validas.length;

  if (!ofertas.length) {
    status.textContent = "Nenhuma oferta cadastrada. Confira o arquivo ofertas.json.";
    lista.append(el("p", "vazio", "Não há ofertas para mostrar."));
    return;
  }

  if (termo) {
    const termos = semAcento(termo).split(/\s+/).filter(Boolean);
    const encontradas = validas
      .filter(oferta => {
        const texto = semAcento(`${oferta.produto} ${oferta.mercado}`);
        return termos.every(parte => texto.includes(parte));
      })
      .sort((a, b) => (a.preco ?? Infinity) - (b.preco ?? Infinity));

    status.textContent = `${encontradas.length} ${encontradas.length === 1 ? "oferta encontrada" : "ofertas encontradas"} para “${termo}”, do menor para o maior preço.`;

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
    (vencidas ? ` ${vencidas} vencida${vencidas === 1 ? "" : "s"} foi${vencidas === 1 ? "" : "ram"} escondida${vencidas === 1 ? "" : "s"}.` : "");

  const grupos = new Map();
  validas.forEach(oferta => {
    if (!grupos.has(oferta.mercado)) grupos.set(oferta.mercado, []);
    grupos.get(oferta.mercado).push(oferta);
  });

  if (!grupos.size) {
    lista.append(el("p", "vazio", "Todas as ofertas vencidas. Atualize o arquivo ofertas.json."));
    return;
  }

  grupos.forEach((itens, mercado) => {
    const secao = el("section", "mercado");
    const titulo = el("h2", "mercado__titulo");
    titulo.append(document.createTextNode(mercado), el("span", "mercado__contador", String(itens.length)));
    const grade = el("div", "lista-ofertas");
    itens
      .slice()
      .sort((a, b) => (a.preco ?? Infinity) - (b.preco ?? Infinity))
      .forEach(oferta => grade.append(criarCartao(oferta, false)));
    secao.append(titulo, grade);
    lista.append(secao);
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

  const arquivo = document.getElementById("arquivo");
  const mensagem = document.getElementById("mensagem-arquivo");

  const restaurar = document.getElementById("restaurar");
  const atualizarBotaoRestaurar = () => {
    restaurar.hidden = !(aceitaLocalStorage() && localStorage.getItem(CHAVE_LOCAL));
  };

  document.getElementById("atualizar").addEventListener("click", () => arquivo.click());
  restaurar.addEventListener("click", () => {
    if (aceitaLocalStorage()) localStorage.removeItem(CHAVE_LOCAL);
    location.reload();
  });
  atualizarBotaoRestaurar();

  arquivo.addEventListener("change", () => {
    const selecionado = arquivo.files && arquivo.files[0];
    if (!selecionado) return;
    const leitor = new FileReader();
    mensagem.className = "mensagem";
    mensagem.textContent = "Lendo arquivo...";
    leitor.onload = () => {
      try {
        const dados = JSON.parse(leitor.result);
        if (!Array.isArray(dados)) throw new Error("formato inválido");
        const normalizados = dados.map(normalizarOferta).filter(Boolean);
        if (!normalizados.length) throw new Error("nenhuma oferta válida");
        if (aceitaLocalStorage()) localStorage.setItem(CHAVE_LOCAL, JSON.stringify(normalizados));
        atualizarBotaoRestaurar();
        ofertas = normalizados;
        renderizar();
        mensagem.className = "mensagem ok";
        mensagem.textContent = `Lista atualizada: ${normalizados.length} ofertas.`;
      } catch (_) {
        mensagem.className = "mensagem erro";
        mensagem.textContent = "Não foi possível ler o arquivo. Verifique se ele é um ofertas.json válido.";
      }
      arquivo.value = "";
    };
    leitor.onerror = () => {
      mensagem.className = "mensagem erro";
      mensagem.textContent = "Não foi possível abrir o arquivo.";
      arquivo.value = "";
    };
    leitor.readAsText(selecionado);
  });
}

async function iniciar() {
  configurarEventos();
  const carregadas = await carregarOfertas();
  ofertas = carregadas.dados.map(normalizarOferta).filter(Boolean);
  renderizar();

  if (
    "serviceWorker" in navigator &&
    (location.protocol === "https:" || location.protocol === "http:")
  ) {
    try { await navigator.serviceWorker.register("sw.js"); } catch (_) { /* app funciona sem service worker */ }
  }
}

iniciar();
