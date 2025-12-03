
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});


//Inicio - Apresentação
const texts = [
    "Desenvolvedor Web",
    "UI/UX Designer",
    "Freelancer",
    "Front-end Developer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const element = document.getElementById("typing");
    const currentText = texts[textIndex];

    if (!deleting) {
        element.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1200); // pausa após terminar a palavra
            return;
        }
    } else {
        element.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length; // avança no array
        }
    }

    setTimeout(typeEffect, deleting ? 55 : 80); // velocidade digitar/apagar
}

window.addEventListener("load", typeEffect);



// Scroll suave até o topo
const scrollTopBtn = document.querySelector('.scroll-top');
const sobreSecao = document.querySelector('#sobre-mim');

window.addEventListener('scroll', () => {
    if (window.scrollY >= sobreSecao.offsetTop) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.querySelector(".form-card form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = this.querySelector("input[name='name']").value;
    const mensagem = this.querySelector("textarea[name='message']").value;

    // Função para gerar ID padrão corporativo
    function gerarID() {
        const t = Date.now().toString(36).toUpperCase();
        const r = Math.random().toString(36).substring(2, 8).toUpperCase();
        return `MSG-${t}-${r}`;
    }

    const id = gerarID();
    const dataHora = new Date().toLocaleString("pt-BR");

    const numero = "5517988096975";

    const texto = encodeURIComponent(
        `[Formulário de Contato - Nova Solicitação]

        ID da Solicitação: ${id}
        Data/Hora: ${dataHora}

        Nome do Solicitante: ${nome}

        Mensagem:
        ${mensagem}

--------------------------------------------
        Notificação automática gerada pelo sistema.`
    );

    window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
});

