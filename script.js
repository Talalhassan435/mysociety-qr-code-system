
document.getElementById("qrForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const vehicleNumber = document.getElementById("vehicleNumber").value;
  const ownerName = document.getElementById("ownerName").value;
  const blockNo = document.getElementById("blockNo").value;
  const houseNo = document.getElementById("houseNo").value;

  const baseUrl = "https://teal-cendol-95dea2.netlify.app/data";
  const qrData = `${baseUrl}?vehicleNumber=${encodeURIComponent(vehicleNumber)}&ownerName=${encodeURIComponent(ownerName)}&blockNo=${encodeURIComponent(blockNo)}&houseNo=${encodeURIComponent(houseNo)}`;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;

  document.getElementById("qrCodeContainer").innerHTML = `<img src="${qrUrl}" alt="QR Code" />`;
});
