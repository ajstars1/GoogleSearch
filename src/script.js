loadState();
function loadState() {
  if (localStorage.getItem(checkBox) === "True") {
    checkBox.checked = true;
    loadTheme();
    console.log("loadstates");
    console.log(checkBox.checked);
  } else {
    checkBox.checked = false;
    loadTheme();
    console.log(checkBox.checked);
  }
}
function sumbit() {
  document.getElementById("form").submit();
}
function loadTheme() {
  let checkBox = document.getElementById("checkBox");
  if (checkBox.checked == true) {
    document.documentElement.style.setProperty("--theme-color", "#fff");
    document.documentElement.style.setProperty("--theme-bg-color", "#000");
    localStorage.setItem(checkBox, "True");
    console.log(localStorage.getItem(checkBox));
  }
  if (checkBox.checked == false) {
    localStorage.setItem(checkBox, "False");
    console.log(localStorage.getItem(checkBox));
    document.documentElement.style.setProperty("--theme-color", "#000");
    document.documentElement.style.setProperty("--theme-bg-color", "#fff");
  }
}
