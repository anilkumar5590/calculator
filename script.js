let alertTitle = false;
setInterval(() => {
  document.title = alertTitle
    ? "Anil's Calculator❤️"
    : "Follow me on Social Media";
  alertTitle = !alertTitle;
}, 1000);
