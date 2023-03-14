$(document).ready(function() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  
  var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  var calendarDates = $(".calendar-dates");
  var prevButton = $("#prev-button");
  var nextButton = $("#next-button");
  
  var events = {
	"2023-03-15": ["Meeting with Johns", "12:00 PM"],
	"2023-03-22": ["Dentist appointment", "10:00 AM"],
	"2023-04-01": ["April Fool\'s Day", ""]
  };
  
  function updateCalendar(year, month) {
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var daysInMonth = lastDay.getDate();
    var startingDay = firstDay.getDay();
  
    $(".calendar-month-year").text(year);
    $(".calendar-month-name").text(months[month]);
  
    calendarDates.empty();
    $(".calendar-weekdays").empty();
  
    for (var i = 0; i < weekdays.length; i++) {
      $(".calendar-weekdays").append("<div class='calendar-weekday'>" + weekdays[i] + "</div>");
    }
  
    for (var i = 0; i < Math.ceil((startingDay + daysInMonth) / 7) * 7; i++) {
      if (i < startingDay || i >= startingDay + daysInMonth) {
        calendarDates.append("<div class='calendar-date'></div>");
      } else {
        var date = i - startingDay + 1;
        var dateElement = $("<div class='calendar-date'>" + date + "</div>");
        var currentDateObj = new Date();
        var calendarDateObj = new Date(year, month, date);
        
        // Check if date has events
        var eventDateKey = calendarDateObj.getFullYear() + "-" + (calendarDateObj.getMonth()+1).toString().padStart(2, '0') + "-" + date.toString().padStart(2, '0');
        if (events.hasOwnProperty(eventDateKey)) {
          var eventDetails = events[eventDateKey];
          var eventElement = $("<div class='calendar-event'>" + eventDetails[0] + "<br><span class='event-time'>" + eventDetails[1] + "</span></div>");
          dateElement.append(eventElement);
        }
        
        if (calendarDateObj.toDateString() === currentDateObj.toDateString()) {
          dateElement.addClass("active");
        }
        calendarDates.append(dateElement);
      }
    }
  }
  
  updateCalendar(currentYear, currentMonth);
  
  prevButton.click(function() {
    if (currentMonth === 0) {
      currentYear--;
      currentMonth = 11;
    } else {
      currentMonth--;
    }
    updateCalendar(currentYear, currentMonth);
  });
  
  nextButton.click(function() {
    if (currentMonth === 11) {
      currentYear++;
      currentMonth = 0;
    } else {
      currentMonth++;
    }
    updateCalendar(currentYear, currentMonth);
  });
  
  calendarDates.on("click", ".calendar-date:not(:empty)", function() {
    var clickedDate = $(this).text();
    var clickedMonth = $(".calendar-month-name").text();
    var clickedYear = $(".calendar-month-year").text();
    var formattedDate = clickedMonth + " " + clickedDate + ", " + clickedYear;
    alert("You clicked on " + formattedDate);
  });
});
