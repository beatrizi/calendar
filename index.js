    const dayTodayIs = new Date();
    console.log(dayTodayIs);
  
    const dayNumber = dayTodayIs.getDate()
    console.log(dayNumber);
        
    const month = dayTodayIs.getMonth()
    const year = dayTodayIs.getFullYear()
  //console.log(dayNumber, month, year);

  let localArea = 'en-GB'
  const dayName = dayTodayIs.toLocaleString(localArea,{weekday: 'long'})
  console.log(dayName)

  const monthName = dayTodayIs.toLocaleString(localArea,{month: 'long'});
  console.log(monthName)

document.getElementById('month').innerHTML = monthName 
document.getElementById('dayName').innerHTML = dayName;
document.getElementById('dayNumber').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;