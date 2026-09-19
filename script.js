"use strict";

/* ==========================================================
   CLÍNICA VESPER
   Interações sem bibliotecas externas.

   01. Menu mobile
   02. Animações discretas
   03. Formulário demonstrativo
   ========================================================== */

function iniciarVesper() {
  configurarMenuMobile();
  configurarAnimacoes();
  configurarFormulario();
}


/* ==========================================================
   01. MENU MOBILE
   Sem JavaScript, a navegação original continua visível.
   ========================================================== */

function configurarMenuMobile() {
  const cabecalho = document.querySelector(".site-header__inner");
  const navegacao = document.querySelector(".site-nav");

  if (!cabecalho || !navegacao) return;

  const telaMobile = window.matchMedia("(max-width: 52rem)");

  const botaoMenu = document.createElement("button");

  botaoMenu.type = "button";
  botaoMenu.className = "button button--outline menu-toggle";
  botaoMenu.textContent = "Menu";
  botaoMenu.hidden = true;

  if (!navegacao.id) {
    navegacao.id = "navegacao-principal";
  }

  botaoMenu.setAttribute("aria-controls", navegacao.id);
  botaoMenu.setAttribute("aria-expanded", "false");
  botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");

  cabecalho.insertBefore(botaoMenu, navegacao);

  function definirMenu(aberto, devolverFoco = false) {
    navegacao.hidden = !aberto;

    botaoMenu.setAttribute("aria-expanded", String(aberto));

    botaoMenu.setAttribute(
      "aria-label",
      aberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );

    botaoMenu.textContent = aberto ? "Fechar menu" : "Menu";

    if (devolverFoco) {
      botaoMenu.focus({ preventScroll: true });
    }
  }

  function ajustarAoTamanhoDaTela() {
    const focoNaNavegacao = navegacao.contains(document.activeElement);
    const focoNoBotao = document.activeElement === botaoMenu;

    if (telaMobile.matches) {
      botaoMenu.hidden = false;

      // Evita deixar o foco dentro da navegação ao escondê-la.
      definirMenu(false, focoNaNavegacao);
    } else {
      navegacao.hidden = false;

      // Devolve o foco à navegação antes de ocultar seu botão.
      if (focoNoBotao) {
        const primeiroLink = navegacao.querySelector("a[href]");
        primeiroLink?.focus({ preventScroll: true });
      }

      botaoMenu.hidden = true;
      botaoMenu.setAttribute("aria-expanded", "false");
      botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
      botaoMenu.textContent = "Menu";
    }
  }

  botaoMenu.addEventListener("click", () => {
    const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
    definirMenu(!aberto);
  });

  cabecalho.addEventListener("keydown", (evento) => {
    if (
      evento.key === "Escape" &&
      telaMobile.matches &&
      !navegacao.hidden
    ) {
      evento.preventDefault();
      definirMenu(false, true);
    }
  });

  navegacao.addEventListener("click", (evento) => {
    // Preserva ações nativas, como abrir links em outra aba.
    if (
      evento.defaultPrevented ||
      evento.ctrlKey ||
      evento.metaKey ||
      evento.shiftKey ||
      evento.altKey ||
      evento.button !== 0
    ) {
      return;
    }

    if (!(evento.target instanceof Element)) return;

    const link = evento.target.closest('a[href^="#"]');

    if (!link || !telaMobile.matches) return;

    const identificador = link.getAttribute("href").slice(1);
    const destino = document.getElementById(identificador);

    if (!destino) return;

    definirMenu(false);

    // Permite focar a seção sem incluí-la permanentemente
    // na sequência de navegação pela tecla Tab.
    if (!destino.hasAttribute("tabindex")) {
      destino.setAttribute("tabindex", "-1");

      destino.addEventListener(
        "blur",
        () => destino.removeAttribute("tabindex"),
        { once: true }
      );
    }

    destino.focus({ preventScroll: true });

    // A ação padrão do link atualiza a âncora e realiza
    // a rolagem, respeitando o CSS de movimento reduzido.
  });

  telaMobile.addEventListener("change", ajustarAoTamanhoDaTela);
  ajustarAoTamanhoDaTela();
}


/* ==========================================================
   02. ANIMAÇÕES DISCRETAS
   Cada elemento anima uma única vez ao entrar na tela.
   O conteúdo nunca depende da animação para ficar visível.
   ========================================================== */

function configurarAnimacoes() {
  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (
    movimentoReduzido.matches ||
    !("IntersectionObserver" in window) ||
    typeof Element.prototype.animate !== "function"
  ) {
    return;
  }

  const elementos = document.querySelectorAll(
    ".service-card, .professional-card, .care-step"
  );

  const animacoesAtivas = new Set();

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;

        observador.unobserve(entrada.target);

        if (movimentoReduzido.matches) return;

        // Anima somente a opacidade para não disputar o transform
        // utilizado pelos efeitos de hover do CSS.
        const animacao = entrada.target.animate(
          [
            { opacity: 0.65 },
            { opacity: 1 }
          ],
          {
            duration: 420,
            easing: "ease-out"
          }
        );

        animacoesAtivas.add(animacao);

        const removerAnimacao = () => {
          animacoesAtivas.delete(animacao);
        };

        animacao.addEventListener("finish", removerAnimacao, {
          once: true
        });

        animacao.addEventListener("cancel", removerAnimacao, {
          once: true
        });
      });
    },
    {
      threshold: 0.12
    }
  );

  elementos.forEach((elemento) => {
    observador.observe(elemento);
  });

  // Respeita também mudanças de preferência durante a visita.
  movimentoReduzido.addEventListener("change", (evento) => {
    if (!evento.matches) return;

    observador.disconnect();

    animacoesAtivas.forEach((animacao) => {
      animacao.cancel();
    });

    animacoesAtivas.clear();
  });
}


/* ==========================================================
   03. FORMULÁRIO DEMONSTRATIVO
   Validação local, sem requisições ou armazenamento.
   ========================================================== */

function configurarFormulario() {
  const formulario = document.querySelector(".contact-form");

  if (!formulario) return;

  const botao = formulario.querySelector(".contact-form__submit");

  if (!botao) return;

  const camposDeTexto = formulario.querySelectorAll(
    'input[type="text"], input[type="email"]'
  );

  const campos = formulario.querySelectorAll("input, select");

  // Região anunciada por leitores de tela após a simulação.
  const mensagem = document.createElement("p");

  mensagem.className = "contact-form__instructions";
  mensagem.setAttribute("role", "status");
  mensagem.setAttribute("aria-live", "polite");
  mensagem.setAttribute("aria-atomic", "true");

  botao.insertAdjacentElement("afterend", mensagem);

  function validarTexto(campo) {
    campo.setCustomValidity("");

    if (campo.required && campo.value.length > 0) {
      if (campo.value.trim() === "") {
        campo.setCustomValidity(
          "Preencha este campo com algo além de espaços."
        );
      }
    }
  }

  camposDeTexto.forEach((campo) => {
    campo.addEventListener("input", () => {
      validarTexto(campo);
    });

    // Considera valores que o navegador já tenha preenchido.
    validarTexto(campo);
  });

  campos.forEach((campo) => {
    campo.addEventListener("input", () => {
      mensagem.textContent = "";
    });

    campo.addEventListener("change", () => {
      mensagem.textContent = "";
    });
  });

  // Registra o bloqueio do envio antes de habilitar o botão.
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    camposDeTexto.forEach(validarTexto);

    // Reutiliza as mensagens e regras nativas do navegador:
    // campos obrigatórios, formato do e-mail e seleção de estado.
    if (!formulario.reportValidity()) {
      mensagem.textContent = "";
      return;
    }

    mensagem.textContent =
      "Validação concluída. Esta é apenas uma demonstração: " +
      "nenhum dado foi enviado ou armazenado e nenhum " +
      "agendamento foi realizado.";

    // Mantém os campos preenchidos para permitir a conferência.
  });

  botao.disabled = false;
  botao.textContent = "Testar formulário";
}


/* ==========================================================
   INICIALIZAÇÃO
   Funciona com defer ou com o script no final do HTML.
   ========================================================== */

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarVesper, {
    once: true
  });
} else {
  iniciarVesper();
}