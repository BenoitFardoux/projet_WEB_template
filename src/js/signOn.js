function getLabels(htmlElement) {
  let result = [];
  console.log(htmlElement);
  for (let i = 0; i < htmlElement.children.length; i++) {
    if (htmlElement.children[i].tagName == "LABEL")
      result.push(htmlElement.children[i]);
    else result = result.concat(getLabels(htmlElement.children[i]));
  }
  return result;
}

function showPassword() {
  const x = document.getElementById("password");
  x.type = x.type === "password" ? "text" : "password";
}

window.addEventListener("load", () => {
  const form = document.getElementById("sign_on");
  const labels = getLabels(form);

  for (let i = 0; i < labels.length; i++) {
    if (i != 0) {
      labels[i].classList.add("transition-opacity");
      labels[i].setAttribute("style", "opacity: 0; visibility: hidden");
    }
    if (i != labels.length - 1) {
      labels[i].addEventListener(
        "input",
        () => {
          labels[i + 1].setAttribute("style", "opacity: 1");
        },
        { once: true }
      );
    }
  }
});
