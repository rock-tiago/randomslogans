function generate() {
  let apple = "<img src='apple.jpg'";
  const number = Math.floor(Math.random()*7);
  if(number === 0) {
  document.getElementById("slogan-phrase").innerHTML = "Soup - We don't like you either"
  document.getElementById("apple-image").style.visibility = "hidden"
  document.getElementById("soup-image").style.visibility = "visible"
  document.getElementById("zoom-image").style.visibility = "hidden"
  document.getElementById("fedEx-image").style.visibility = "hidden"
  document.getElementById("playstation-image").style.visibility = "hidden"
  document.getElementById("microsoft-image").style.visibility = "hidden"
  document.getElementById("huawei-image").style.visibility = "hidden";
  } else if(number === 1) {
  document.getElementById("slogan-phrase").innerHTML = "Apple - We keep the doctors away"
  document.getElementById("apple-image").style.visibility = "visible"
  document.getElementById("huawei-image").style.visibility = "hidden"
  document.getElementById("soup-image").style.visibility = "hidden"
  document.getElementById("zoom-image").style.visibility = "hidden"
  document.getElementById("fedEx-image").style.visibility = "hidden"
  document.getElementById("playstation-image").style.visibility = "hidden"
  document.getElementById("microsoft-image").style.visibility = "hidden";
  } else if(number === 2) {
  document.getElementById("slogan-phrase").innerHTML = "Huawei - Because we know da wei"
  document.getElementById("huawei-image").style.visibility = "visible"
  document.getElementById("apple-image").style.visibility = "hidden"
  document.getElementById("soup-image").style.visibility = "hidden"
  document.getElementById("zoom-image").style.visibility = "hidden"
  document.getElementById("fedEx-image").style.visibility = "hidden"
  document.getElementById("playstation-image").style.visibility = "hidden"
  document.getElementById("microsoft-image").style.visibility = "hidden";
  } else if(number === 3) {
  document.getElementById("slogan-phrase").innerHTML = "Zoom - You never know if you'll be in quarintine"
  document.getElementById("huawei-image").style.visibility = "hidden"
  document.getElementById("apple-image").style.visibility = "hidden"
  document.getElementById("soup-image").style.visibility = "hidden"
  document.getElementById("zoom-image").style.visibility = "visible"
  document.getElementById("fedEx-image").style.visibility = "hidden"
  document.getElementById("playstation-image").style.visibility = "hidden"
  document.getElementById("microsoft-image").style.visibility = "hidden";
  } else if(number === 4) {
  document.getElementById("slogan-phrase").innerHTML = "fedEx - You need it, we destroy it"
  document.getElementById("huawei-image").style.visibility = "hidden"
  document.getElementById("apple-image").style.visibility = "hidden"
  document.getElementById("soup-image").style.visibility = "hidden"
  document.getElementById("zoom-image").style.visibility = "hidden"
  document.getElementById("fedEx-image").style.visibility = "visible"
  document.getElementById("playstation-image").style.visibility = "hidden"
  document.getElementById("microsoft-image").style.visibility = "hidden";
  } else if(number === 5) {
  document.getElementById("slogan-phrase").innerHTML = "Playstation - a station where you can play"
  document.getElementById("huawei-image").style.visibility = "hidden"
  document.getElementById("apple-image").style.visibility = "hidden"
  document.getElementById("soup-image").style.visibility = "hidden"
  document.getElementById("zoom-image").style.visibility = "hidden"
  document.getElementById("fedEx-image").style.visibility = "hidden"
  document.getElementById("playstation-image").style.visibility = "visible"
  document.getElementById("microsoft-image").style.visibility = "hidden";
  document.getElementById("apple-image").style.visibility = "hidden";
  } else if(number === 6) {
  document.getElementById("slogan-phrase").innerHTML = "Microsoft - It's like Macrohard onfire... but the opposite"
  document.getElementById("huawei-image").style.visibility = "hidden"
  document.getElementById("apple-image").style.visibility = "hidden"
  document.getElementById("soup-image").style.visibility = "hidden"
  document.getElementById("zoom-image").style.visibility = "hidden"
  document.getElementById("fedEx-image").style.visibility = "hidden"
  document.getElementById("playstation-image").style.visibility = "hidden"
  document.getElementById("microsoft-image").style.visibility = "visible";
  }
}