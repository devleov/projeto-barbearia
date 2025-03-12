/* Animação de tremer no botão de whatsapp */

let delay;
const icone_whatsapp = $(".contact-whatsapp")

icone_whatsapp.click(function () {
    if (delay) return; /* Quando o delay for verdadeiro ele não executa */

    $(this).css("animation", "tremer .2s")
    delay = true;

    /* Delay de animação */
    setTimeout(() => {
        $(this).css("animation", "")

        delay = false;
    }, 2000)
});

/* Eventos de scroll para sumir e aparecer elementos */

window.addEventListener("scroll", () => {
    if (window.scrollY >= 2429) {
        icone_whatsapp.css("opacity", 0)
        icone_whatsapp.css("pointer-events", "none")
    } else {
        icone_whatsapp.css("opacity", 1)
        icone_whatsapp.css("pointer-events", "visible")
    }
});