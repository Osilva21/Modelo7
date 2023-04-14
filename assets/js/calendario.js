document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });

  var form = document.getElementById('event-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(form);
    var title = formData.get('title');
    var date = formData.get('date');
    var time = formData.get('time');
    var description = formData.get('description');

    calendar.addEvent({
      title: title,
      start: date + 'T' + time,
      description: description
    });

    form.reset();
  });

  calendar.render();
});
