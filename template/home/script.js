// script.js
document.addEventListener("DOMContentLoaded", function () {
  var menuLateral = document.querySelector(".menu-lateral");
  var conteudo = document.querySelector(".conteudo");
  var toggleButton = document.querySelector(".toggle-menu");

  toggleButton.addEventListener("click", function () {
    menuLateral.classList.toggle("collapsed");
    conteudo.classList.toggle("collapsed");
    toggleButton.classList.toggle("show");
  });

  // Adicionar evento de click nos itens do menu
  var menuItens = document.querySelectorAll(".menu-item");
  menuItens.forEach(function (item) {
    item.addEventListener("click", function () {
      // Adicionar lógica para lidar com o click no item do menu
    });
  });
});
