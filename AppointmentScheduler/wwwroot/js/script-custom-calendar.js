(document).addEventListener('DOMContentLoaded', function () {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',

            headerToolbar: {
                left: 'prev,next,today',
                center: 'title',
                right: 'timeGridWeek,dayGridMonth,timeGridDay'
            },
            selectable: true,
            select: function (event) {
                onShowModal(event, null);
            }
        });
        calendar.render();
});

function onShowModal(obj, isEventDetail) {
    $("#appointmentInput").modal("show")
};

function onCloseModal() {
    $("#appointmentInput").modal("hide")
}