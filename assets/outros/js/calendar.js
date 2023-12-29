document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'pt-br',
        initialView: 'listWeek',
        events: [
            {
                "title": "Ato Contra o Aumento da Tarifa",
                "start": "2024-01-04T18:00:00",
                "allDay": false
            },
            {
                "title": "Calourada 2024",
                "start": "2024-02-26",
                "end": "2024-03-01"
            }
        ]
    });
    calendar.render();
});

calendar.setOption('locale', 'pt-br');

