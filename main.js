const countdown = () => {
  var now = new Date();
  var eventDate = new Date(new Date().getFullYear()+1, 00, 1);
  var remTime = eventDate.getTime() - now.getTime();

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;
  d = d < 10 ? `0${d}` : d;
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
  setInterval(() => {
    countdown();
  }, 1000);
};
countdown();
