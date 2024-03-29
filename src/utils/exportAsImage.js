import html2canvas from "html2canvas";

const exportAsImage = async (element, imageFileName, idol, part) => {
  const canvas = await html2canvas(element, { width: 380, height: 380 }); //  -> width, height 값 지정으로 문제 해결
  const image = canvas.toDataURL("image/png", 1.0);
  // download the image
  downloadImage(image, imageFileName);
  localStorage.setItem("imgURL", image); // localStorage로 이미지 url 임시 저장 후 완성 페이지에서 이미지 연동

  
};

const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

export default exportAsImage;
