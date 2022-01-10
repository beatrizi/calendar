//Number days
const numberCalendar = document.querySelector("#number-calendar");
for (let dayNumber =1;dayNumber < 32; dayNumber++){
    console.log(dayNumber)
}



 
//Name days
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
document.querySelector("#days-of-the-week").innerHTML = weekdays;


//Months
const months = ["January", "Febrary", "March", "April", "May", "June", "July", "Aug", "September", "October", "November", "December"];
for(let i = 0; i < months.length -1; i++)
{
    document.querySelector("#month-calendar").innerHTML = months[i];
}  


//today


//Load the page with the number days of today
function load() {
    const dayTodayIs = new Date();
    console.log(dayTodayIs);
  
    if (nav !== 0) {
      dayTodayIs.setMonth(new Date().getMonth() + nav);
    }
  
    const day = dayTodayIs.getDate();
    const month = dayTodayIs.getMonth();
    const year = dayTodayIs.getFullYear();
  
    const firstDayOfMonth = new Date(year, month, 1); 
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
}