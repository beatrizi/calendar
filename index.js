const calendar = document.querySelector("#number-calendar");
for (let day =1;day < 32; day++){
    console.log(day)
calendar.insertAdjacentHTML("beforeend",`<div class="day">${day}</div>`);
}


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
for(let i = 0; i < months.length -1; i++)
{
    document.querySelector("#months-calendar").innerHTML = months[i];
}   
