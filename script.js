document.addEventListener("DOMContentLoaded", function () {
    const now = new Date();
    const hours = now.getHours();
    const body = document.body;
  
    
    if (hours >= 6 && hours < 12) {
      body.className = "morning"; 
    } else if (hours >= 12 && hours < 18) {
      body.className = "afternoon"; 
    } else {
      body.className = "evening";
    }
  
    
    const generateBtn = document.getElementById("generateBtn");
    const qrInput = document.getElementById("qrInput");
    const qrCodeContainer = document.getElementById("qrcode");
  
    generateBtn.addEventListener("click", function () {
      const text = qrInput.value.trim();
      qrCodeContainer.innerHTML = ""; 
  
      if (text === "") {
        alert("Please enter some text or a URL!");
        return;
      }
  
      new QRCode(qrCodeContainer, {
        text: text,
        width: 200,
        height: 200,
      });
    });
  });
  