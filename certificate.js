function generateCertificate(){

let name=document.getElementById("studentName").value

document.getElementById("name").innerText=name

let today=new Date()

document.getElementById("date").innerText=today.toDateString()

}

function downloadPDF(){

let element=document.getElementById("certificate")

html2pdf().from(element).save("certificate.pdf")

}