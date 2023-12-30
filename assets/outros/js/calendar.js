/**
 * Script para o funcionamento do calendario na pagina inicial
 * 
 * Os eventos sao importados do 'eventos.json' no diretorio '/data'. Em caso de
 * erro, um aviso eh enviado no console e o calendario eh carregado sem eventos.
 */
document.addEventListener('DOMContentLoaded', function () {
    fetch(`${window.location.href}data/eventos.json`)
        .then(resposta => {
            if (resposta.status >= 400 && resposta.status < 600)
                throw new Error(`Erro na captura do JSON! Status: ${resposta.status}`)
            return resposta.json();
        })
        .then(eventos => carregar_calendario(eventos)) // Carrega o calendario
        .catch(erro => {
            console.error(`Erro na captura dos eventos: ${erro}`)
            carregar_calendario([])
        })
})

function carregar_calendario (eventos) {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'pt-br',
        initialView: 'listWeek',
        events: eventos
    });
    calendar.render();
}