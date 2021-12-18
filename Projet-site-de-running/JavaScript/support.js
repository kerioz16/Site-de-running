var icon = document.querySelector("#icone-contact");
console.log(icon)
icon.onmouseover = () =>{
    icon.style.filter = "contrast(400%)"
    icon.style.transform = "rotate(1turn)"
    icon.style.transition = "0.5s"
}

icon.onmouseout = () =>{
    icon.style.filter = "contrast(100%)"
    icon.style.transform = "rotate(0turn)"
    icon.style.transition = "0.5s"
}
