document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    let validationPassed = true; 
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
  
      if (name.trim() === "" || email.trim() === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        validationPassed = false; 
      } else {
        const emailPattern = /^[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/;
        if (!emailPattern.test(email) || !email.endsWith(".com")) {
          alert("Por favor, insira um endereço de e-mail válido.");
          validationPassed = false;
        }
      }
  
      if (validationPassed) {
        
        alert("Mensagem enviada com sucesso!");
        form.reset();
      }
  
     
      validationPassed = true;
    });
  });
  