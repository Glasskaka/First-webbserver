function openConfirm(btn) {
    let btns = btn.parentNode;
    let modal = btns.nextElementSibling;
    
    if (modal.style.display === "none") {
        btns.style.display = "none";
        modal.style.display = "flex";
    }
}

function closeConfirm(mdl) {
    let modal = mdl.parentNode;
    let btns = modal.previousElementSibling;
    
    if (btns.style.display === "none") {
        modal.style.display = "none";
        btns.style.display = "flex";
    }
}