const inputs = document.queryselecturALL(".input");

function focusfunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blursfunc() {
    let parent = this.parentNode;
    if(this.value =="") {
    parent.classList.remove("focus");
    }
}

input.forEach((input) => {
    input.addEventllistener("focus", focusfunc);
    input.addEventllistener("blur", blufunc);
});