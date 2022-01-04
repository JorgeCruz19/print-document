let date = new Date();

export const showDate = () =>{
  let day = date.getDate();
  let month = (date.getMonth()+1);
  let year = date.getFullYear();

  return `${day}/${month}/${year}`
}

export const showTime= () => {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let amPM = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;

  return `${hour}:${addZero(minutes)} ${amPM}`;
}

const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}