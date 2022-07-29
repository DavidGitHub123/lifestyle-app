function formatDate(dateObject) {
  const parts = {
    word: dateObject.toDateString(),
    hour: (dateObject.getHours() % 12) || 12,
    minutes: dateObject.getMinutes().toString().padStart(2, "0"),
    amOrPm: dateObject.getHours() < 12 ?"AM" : "PM"
  };

  return {
    date: `${parts.word}`,
    time: `${parts.hour}:${parts.minutes} ${parts.amOrPm}`
  }
}

const myDate = new Date();
const myDateFormatted = formatDate(myDate);

document.getElementById('date').innerHTML = myDateFormatted.date;
document.getElementById('time').innerHTML = myDateFormatted.time;




// const getDate = () => {
//   const date = new Date();
//   const day = date.getDate();
//   const month = date.getMonth();
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// document.getElementById('date').innerHTML = getDate();

// const getTime = () => {
//   const date = new Date();
//   let hours = date.getHours();
//   const amPm = hours >= 12 ? 'PM' : 'AM'; 
//     if (hours > 12) {
//       hours -= 12;
//     }
//   const minutes = date.getMinutes();
//   return `${hours}:${minutes} ${amPm}`;
// }
// document.getElementById('time').innerHTML = getTime();

// Ticking clock updadating every second
// const init = () => {
//   setInterval(() => {
//     document.getElementById('time')
//       .innerHTML = getTime();
//   },1000);
// };

// init();









// https://www.google.com/search?q=youtube+tutorial+javascript+code+to+display+current+day&sxsrf=ALiCzsa4JjdydOGxrhVk2Io_iCzHypb7hA%3A1657140431522&ei=z_TFYpHBH9TJkPIP8dCF-AI&ved=0ahUKEwjR5I2WkeX4AhXUJEQIHXFoAS8Q4dUDCA8&uact=5&oq=youtube+tutorial+javascript+code+to+display+current+day&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsAM6CggAEOQCELADGAE6BwgjELACECc6BAghEApKBQg8EgE0SgQIQRgASgQIRhgBUJALWN4nYLgraARwAXgAgAGmAYgByBSSAQQwLjIwmAEAoAEByAENwAEB2gEGCAEQARgJ&sclient=gws-wiz#kpvalbx=_bvbFYoWtPIefkPIPtZ-h4AY15