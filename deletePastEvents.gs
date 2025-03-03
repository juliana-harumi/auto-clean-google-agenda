function deletePastEvents() {
  var calendarId = 'ID da Agenda'; // Substitua pelo ID da sua agenda 
  var calendar = CalendarApp.getCalendarById(calendarId);
  var now = new Date();
  var events = calendar.getEvents(new Date(2000, 0, 1), now); // Busca eventos até o momento atual

  for (var i = 0; i < events.length; i++) {
    events[i].deleteEvent();
  }
}
