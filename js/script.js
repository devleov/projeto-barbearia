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


/* Fazendo o input de horário do agendamento */
for (let i = 8; i < 18; i++) {
    $("#scheduling-hour").append(`<option>${i}:00</option>`)
}

/* Pegando os valores dos campos de agendamento */
$(".btn-scheduling-now > button").click(function () {

    const nomeAgendamento = $("#scheduling-name").val()
    const hourAgendamento = $("#scheduling-hour").val()
    const corteAgendamento = $("#scheduling-cut").val()
    const dataAgendamento = $("#scheduling-date").val()

    if (!nomeAgendamento || !hourAgendamento || !corteAgendamento || !dataAgendamento) {
        $("#scheduling-warns").text("* Preencha todos os campos!")
            .css("opacity", 1)

        setTimeout(() => {
            $("#scheduling-warns").css("opacity", 0)

            setTimeout(() => {
                $("#scheduling-warns").text("")
            }, 500)
        }, 7000)
    }

    const msg = `Olá, meu nome é ${nomeAgendamento} e gostaria de agendar um corte de cabelo no(a):
    Dia: ${dataAgendamento}
    Hora prevista: ${hourAgendamento}
    Corte de cabelo: ${corteAgendamento}`;

    console.log(msg);
});


/* Animação no menu ao clicar e ao fechar */

$(".menu-link").click(function() {
    $(this).toggleClass("active")
    $(".box-menu-link").toggleClass("active").slideToggle(2000)
});

$(window).resize(function() {
    if ($(this).width() >= 636) {
        $(".menu-link").removeClass("active")
        $(".box-menu-link").css("display", "none").removeClass("active")
    }
})