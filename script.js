// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contactForm");
//   const successMessage = document.getElementById("successMessage");

//   // Esconde a mensagem de sucesso inicialmente
//   successMessage.style.display = "none";

//   // Seleciona todos os inputs do tipo radio
//   const radioButtons = document.querySelectorAll('input[type="radio"]');

//   // Adiciona evento de mudança para cada radio button
//   radioButtons.forEach((radio) => {
//     radio.addEventListener("change", (event) => {
//       // Remove a cor de fundo de todos os contêineres
//       radioButtons.forEach((r) => {
//         const container = r.closest(".input-radio");
//         if (container) {
//           container.style.backgroundColor = ""; // Reseta a cor de fundo
//           container.style.borderColor = ""; // Reseta a cor da borda
//         }
//       });

//       // Altera a cor de fundo e a borda do contêiner do rádio selecionado
//       const selectedContainer = event.target.closest(".input-radio");
//       if (selectedContainer) {
//         selectedContainer.style.backgroundColor = "#E0F1E7"; // Cor de fundo
//         selectedContainer.style.borderColor = "#0C7C69"; // Cor da borda
//       }
//     });
//   });

//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Evita o envio do formulário

//     let isValid = true;

//     // Função para exibir mensagens de erro
//     function showError(element, message) {
//       const errorElement = element.closest("div")?.querySelector("p.aviso"); // Mudamos de <ul> para <p.aviso>
//       if (errorElement) {
//         errorElement.style.display = "block";
//         errorElement.textContent = message;
//       }
//     }

//     // Função para esconder mensagens de erro
//     function hideError(element) {
//       const errorElement = element.closest("div")?.querySelector("p.aviso"); // Mudamos de <ul> para <p.aviso>
//       if (errorElement) {
//         errorElement.style.display = "none";
//         errorElement.textContent = "";
//       }
//     }

//     // Validação do First Name
//     const firstName = document.getElementById("First-Name");
//     if (firstName.value.trim() === "") {
//       showError(firstName, "This field is required");
//       isValid = false;
//     } else {
//       hideError(firstName);
//     }

//     // Validação do Last Name
//     const lastName = document.getElementById("Last-Name");
//     if (lastName.value.trim() === "") {
//       showError(lastName, "This field is required");
//       isValid = false;
//     } else {
//       hideError(lastName);
//     }

//     // Validação do Email
//     const email = document.getElementById("Email");
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email.value.trim() === "") {
//       showError(email, "This field is required");
//       isValid = false;
//     } else if (!emailPattern.test(email.value.trim())) {
//       showError(email, "Please enter a valid email address");
//       isValid = false;
//     } else {
//       hideError(email);
//     }

//     // Validação do Query Type (Radio Buttons)
//     const queryType = document.querySelector('input[name="QueryType"]:checked');
//     const queryTypeError = document.querySelector(".container-radio + p.aviso"); // Mudamos para <p.aviso>
//     if (!queryType) {
//       queryTypeError.style.display = "block";
//       isValid = false;
//     } else {
//       queryTypeError.style.display = "none";
//     }

//     // Validação da Mensagem
//     const message = document.getElementById("msg");
//     if (message.value.trim() === "") {
//       showError(message, "This field is required");
//       isValid = false;
//     } else {
//       hideError(message);
//     }

//     // Validação do Consentimento (Checkbox)
//     const consent = document.getElementById("Consent");
//     const consentError = document.querySelector(".CheckBox + p.aviso"); // Mudamos para <p.aviso>
//     if (!consent.checked) {
//       consentError.style.display = "block";
//       isValid = false;
//     } else {
//       consentError.style.display = "none";
//     }

//     // Se todos os campos forem válidos, exibe a mensagem de sucesso e limpa o formulário
//     if (isValid) {
//       successMessage.style.display = "flex"; // Exibe a mensagem de sucesso
//       form.reset(); // Limpa os campos do formulário

//       // Esconde mensagens de erro após resetar
//       document
//         .querySelectorAll("p.aviso")
//         .forEach((p) => (p.style.display = "none")); // Mudamos para <p.aviso>

//       // Remove realce de radio buttons selecionados
//       document.querySelectorAll(".input-radio").forEach((container) => {
//         container.style.backgroundColor = "";
//         container.style.borderColor = "";
//       });

//       // Esconde a mensagem após 3 segundos
//       setTimeout(() => {
//         successMessage.style.display = "none";
//       }, 3000);
//     } else {
//       // Se houver erros, esconde a mensagem de sucesso
//       successMessage.style.display = "none";
//     }
//   });
// });
