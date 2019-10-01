const internTextFile = "txt/wd-intern-exp.txt"
const researchTextFile = "txt/uci-research-exp.txt"
const tutorTextFile = "txt/lab-tutor-exp.txt"
const appTextFile = "txt/first-app-exp.txt"

function setup() {
    addParagraphs("swe-intern", internTextFile)
    addParagraphs("uci-research", researchTextFile)
    addParagraphs("lab-tutor", tutorTextFile)
    addParagraphs("first-app", appTextFile)
}

function addParagraphs(id, url) {
    var file = new XMLHttpRequest()
    file.open("GET", url, true)
    file.send(null)
    file.onreadystatechange = function () {
        if (file.readyState == XMLHttpRequest.DONE && file.status == 200) {
            var paragraph = file.responseText
            document.getElementById(id).innerHTML = paragraph
        }
    }
}

window.onload = setup
