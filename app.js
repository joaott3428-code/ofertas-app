/* Ofertas da Semana — HTML, CSS e JavaScript puro, sem servidor. */

// Cópia de ofertas.json usada quando o navegador não permite ler arquivos locais
// (por exemplo, ao abrir o index.html direto do celular via file://).
// Mantenha igual ao ofertas.json quando atualizar a lista.
const DADOS_EXEMPLO = [
  { mercado: "Guanabara", produto: "Arroz Tio João 5 kg (preço segundo Catalogosofertas)", preco: 27.95, validade: "2026-11-25", encarte: "https://www.supermercadosguanabara.com.br/encarte" },
  { mercado: "Guanabara", produto: "Leite UHT desnatado ou semidesnatado (preço segundo Catalogosofertas)", preco: 3.99, validade: "2026-11-25", encarte: "https://www.supermercadosguanabara.com.br/encarte" },
  { mercado: "Guanabara", produto: "Carne moída Friboi tubete 500 g (preço segundo Catalogosofertas)", preco: 16.98, validade: "2026-11-25", encarte: "https://www.supermercadosguanabara.com.br/encarte" },
  { mercado: "Guanabara", produto: "Biscoito recheado maltado Piraquê 85 g (preço segundo Catalogosofertas)", preco: 1.79, validade: "2026-11-25", encarte: "https://www.supermercadosguanabara.com.br/encarte" },
  { mercado: "Supermarket", produto: "Cenoura, abacate ou melão amarelo (kg) (com CPF cadastrado)", preco: 3.99, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Abóbora, aipim ou laranja pera (kg) (com CPF cadastrado)", preco: 2.98, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Manga Palmer (kg) (com CPF cadastrado)", preco: 4.95, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Maçã Gala 850 g (com CPF cadastrado)", preco: 4.95, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Uva vermelha 500 g (com CPF cadastrado)", preco: 6.95, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Banana Prata (kg) (com CPF cadastrado)", preco: 6.98, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Pêssego (kg) (com CPF cadastrado)", preco: 8.98, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Alho (kg) (com CPF cadastrado)", preco: 18.9, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Ovos brancos 20 unidades (com CPF cadastrado)", preco: 9.98, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Carré suíno congelado (kg) (com CPF cadastrado)", preco: 14.97, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Filé de coxa/sobrecoxa de frango Lar (kg) (com CPF cadastrado)", preco: 13.97, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Leite Elegê UHT 1 L (com CPF cadastrado)", preco: 4.47, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Ace ou Invicto 1,5/1,6 kg (com CPF cadastrado)", preco: 9.98, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "OMO 3 L (com CPF cadastrado)", preco: 29.9, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Supermarket", produto: "Toalhas Meu Bebê 100 unidades (com CPF cadastrado)", preco: 7.98, validade: "2026-11-25", encarte: "https://redesupermarket.com.br/ofertas/" },
  { mercado: "Mundial", produto: "Bacalhau Morhua legítimo (kg)", preco: 159.8, validade: "2026-11-26", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Mundial", produto: "Vodka Grey Goose 750 ml (app Mundial Total)", preco: 139.9, validade: "2026-12-02", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Mundial", produto: "Frigideira de indução Tramontina inox (app Mundial Total)", preco: 129.9, validade: "2026-11-29", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Mundial", produto: "Amêndoas sem casca importadas a granel (kg) (app Mundial Total)", preco: 105.9, validade: "2026-12-02", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Mundial", produto: "Nozes sem casca importadas a granel (kg) (app Mundial Total)", preco: 105.9, validade: "2026-12-02", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Mundial", produto: "Cerveja Heineken barril 5 L (app Mundial Total)", preco: 99.9, validade: "2026-11-29", encarte: "https://www.supermercadosmundial.com.br/departamentos/categoria/ofertas" },
  { mercado: "Prezunic", produto: "Ovos vermelhos Happy Eggs 20 unidades (com Clube Prezunic)", preco: 13.99, validade: "2026-11-25", encarte: "https://www.prezunic.com.br/encartes" },
  { mercado: "Prezunic", produto: "Alho a granel (kg) (com Clube Prezunic)", preco: 17.99, validade: "2026-11-25", encarte: "https://www.prezunic.com.br/encartes" },
  { mercado: "Prezunic", produto: "Carne moída Friboi congelada 500 g (com Clube Prezunic)", preco: 13.98, validade: "2026-11-25", encarte: "https://www.prezunic.com.br/encartes" },
  { mercado: "Prezunic", produto: "Acém ou paleta bovina Maturatta (kg) (com Clube Prezunic)", preco: 36.98, validade: "2026-11-26", encarte: "https://www.prezunic.com.br/encartes" },
  { mercado: "Prezunic", produto: "Coração da alcatra Maturatta (kg) (com Clube Prezunic)", preco: 59.98, validade: "2026-11-26", encarte: "https://www.prezunic.com.br/encartes" },
  { mercado: "Prezunic", produto: "Contrafilé tradicional ou filé de costela Maturatta (kg) (com Clube Prezunic)", preco: 52.98, validade: "2026-11-26", encarte: "https://www.prezunic.com.br/encartes" },
  { mercado: "Prezunic", produto: "Sobrecoxa de frango Seara ou Sadia congelada 1 kg (com Clube Prezunic)", preco: 12.98, validade: "2026-11-26", encarte: "https://www.prezunic.com.br/encartes" },
  { mercado: "Prezunic", produto: "Hambúrguer Perdigão congelado 672 g (com Clube Prezunic)", preco: 13.99, validade: "2026-11-26", encarte: "https://www.prezunic.com.br/encartes" },
  { mercado: "Prezunic", produto: "Linguiça de pernil Perdigão (kg) (com Clube Prezunic)", preco: 14.99, validade: "2026-11-26", encarte: "https://www.prezunic.com.br/encartes" },
  { mercado: "Prezunic", produto: "Óleo de soja Liza ou Soya 900 ml (com Clube Prezunic)", preco: 7.99, validade: "2026-11-26", encarte: "https://www.prezunic.com.br/encartes" }
];

const CHAVE_LOCAL = "ofertas-da-semana-dados";
const CHAVE_HISTORICO = "ofertas-da-semana-historico";
const CHAVE_TEMA = "ofertas-da-semana-tema";

let mudancasPreco = {};

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

function chaveOferta(oferta) {
  return semAcento(oferta.mercado) + "|" + semAcento(oferta.produto);
}

function assinaturaDaLista(lista) {
  return lista.map(oferta => `${chaveOferta(oferta)}:${oferta.preco}`).sort().join("|");
}

function atualizarHistorico(lista) {
  if (!aceitaLocalStorage()) return {};
  const assinatura = assinaturaDaLista(lista);
  let anteriores = {};

  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_HISTORICO) || "null");
    if (salvo && Array.isArray(salvo.itens)) {
      if (salvo.assinatura === assinatura) return salvo.mudancas || {};
      salvo.itens.forEach(item => {
        const chave = chaveOferta(item);
        if (chave && typeof item.preco === "number") anteriores[chave] = item.preco;
      });
    }
  } catch (_) { /* histórico inválido começa do zero */ }

  const mudancas = {};
  lista.forEach(oferta => {
    const anterior = anteriores[chaveOferta(oferta)];
    if (typeof anterior === "number" && typeof oferta.preco === "number" && Math.abs(anterior - oferta.preco) > 0.001) {
      mudancas[chaveOferta(oferta)] = anterior;
    }
  });

  try {
    localStorage.setItem(CHAVE_HISTORICO, JSON.stringify({
      assinatura,
      itens: lista.map(oferta => ({
        mercado: oferta.mercado,
        produto: oferta.produto,
        preco: oferta.preco
      })),
      mudancas
    }));
  } catch (_) { /* sem espaço: o app segue sem histórico */ }

  return mudancas;
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
    if (!atual || (oferta.preco ?? Infinity) < (atual.preco ?? Infinity)) {
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
    const menor = Math.min(...[...porMercado.values()].map(oferta => oferta.preco ?? Infinity));
    const linhas = el("div", "comparador__linhas");

    [...porMercado.values()]
      .sort((a, b) => (a.preco ?? Infinity) - (b.preco ?? Infinity))
      .forEach(oferta => {
        const destino = linkSeguro(oferta.encarte);
        const linha = el(destino ? "a" : "div",
          "comparador__linha" + (oferta.preco === menor ? " comparador__linha--melhor" : ""));
        if (destino) {
          linha.href = destino;
          linha.target = "_blank";
          linha.rel = "noopener noreferrer";
        }
        linha.append(
          el("span", "comparador__mercado", oferta.mercado),
          el("span", "comparador__detalhe", oferta.produto),
          el("strong", "comparador__preco", formatarPreco(oferta.preco))
        );
        linhas.append(linha);
      });

    bloco.append(el("h3", "comparador__produto", titulo), linhas);
    secao.append(bloco);
  });

  return secao;
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
  if (eUltimoDia(oferta)) {
    cartao.classList.add("oferta--ultimo-dia");
    cartao.append(el("span", "oferta__selo", "Último dia"));
  }

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

  const partes = [linha, validade];

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
    (vencidas ? ` ${vencidas} vencida${vencidas === 1 ? "" : "s"} foi${vencidas === 1 ? "" : "ram"} escondida${vencidas === 1 ? "" : "s"}.` : "") +
    " Ordenadas por validade.";

  const comparador = criarComparador(validas);
  if (comparador) lista.append(comparador);

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
      .sort((a, b) =>
        (diasParaVencer(a) ?? Infinity) - (diasParaVencer(b) ?? Infinity) ||
        (a.preco ?? Infinity) - (b.preco ?? Infinity))
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
        mudancasPreco = atualizarHistorico(normalizados);
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
  configurarTema();
  configurarEventos();
  const carregadas = await carregarOfertas();
  ofertas = carregadas.dados.map(normalizarOferta).filter(Boolean);
  mudancasPreco = atualizarHistorico(ofertas);
  renderizar();

  if (
    "serviceWorker" in navigator &&
    (location.protocol === "https:" || location.protocol === "http:")
  ) {
    try { await navigator.serviceWorker.register("sw.js"); } catch (_) { /* app funciona sem service worker */ }
  }
}

iniciar();
