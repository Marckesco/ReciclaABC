let quizRespondido = false;

function abrirModal() {
  document.getElementById("modalQuiz").style.display = "block";
}

function fecharModal() {
  document.getElementById("modalQuiz").style.display = "none";
  document.getElementById("respostaQuiz").innerText = "";

  // Reseta estilos e estado
  const botoes = document.querySelectorAll("#modalQuiz button");
  botoes.forEach((btn) => {
    btn.style.backgroundColor = "#4caf50"; // verde padrão
    btn.disabled = false;
    btn.style.opacity = "1";
  });

  quizRespondido = false;
}

function responderQuiz(respostaSelecionada) {
  if (quizRespondido) return;

  quizRespondido = true;

  const botoes = document.querySelectorAll("#modalQuiz button");

  botoes.forEach((btn) => {
    const texto = btn.innerText.trim();

    if (texto === "Papel higiênico usado") {
      btn.style.backgroundColor = "green";
    } else if (btn.innerText.trim() === respostaSelecionada) {
      btn.style.backgroundColor = "red";
    } else {
      btn.style.backgroundColor = "gray";
    }

    btn.disabled = true;
    btn.style.opacity = "0.7";
  });

  const elemento = document.getElementById("respostaQuiz");
  if (respostaSelecionada === "Papel higiênico usado") {
    elemento.innerText =
      "✅ Correto! Papel higiênico usado não deve ser reciclado.";
    elemento.style.color = "green";
  } else {
    elemento.innerText =
      "❌ Ops! Esse item pode ser reciclado. Tente novamente.";
    elemento.style.color = "red";
  }
}

// Fecha o modal ao clicar fora dele
window.onclick = function (event) {
  const modal = document.getElementById("modalQuiz");
  if (event.target == modal) {
    fecharModal();
  }
};

// Abrrir navbar
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("mainNav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("rotated"); // Alterna a rotação
});

// Fecha o menu ao clicar em algum link no mobile
const linksMenu = nav.querySelectorAll("a");
linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle.classList.remove("rotated"); // se tiver classe para rotação do toggle
  });
});
