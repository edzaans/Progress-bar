
let width = 10;
const element = document.getElementById('progressBar');

    function addSkill() {
        width += 10;
        element.style.width = width+"%";
    if(width >= 100) {
        width = 100;
    }

}

function resetSkill() {
    if(width > 10) {
        width -= 10;
        element.style.width = width+"%";
    }
}
    
