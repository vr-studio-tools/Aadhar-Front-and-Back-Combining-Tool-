document.getElementById('frontPhoto').addEventListener('change', function (event) {
  loadImage(event.target.files[0], 'frontPreview');
});

document.getElementById('backPhoto').addEventListener('change', function (event) {
  loadImage(event.target.files[0], 'backPreview');
});

function loadImage(file, previewId) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = document.getElementById(previewId);
    img.src = e.target.result;
    img.style.display = 'block';
    checkImagesLoaded();
  };
  reader.readAsDataURL(file);
}

function checkImagesLoaded() {
  const frontImg = document.getElementById('frontPreview').src;
  const backImg = document.getElementById('backPreview').src;
  const downloadBtn = document.getElementById('downloadBtn');

  if (frontImg !== '#' && backImg !== '#') {
    downloadBtn.disabled = false;
  }
}

document.getElementById('downloadBtn').addEventListener('click', function () {
  const a4Page = document.querySelector('.a4-page');
  html2canvas(a4Page).then(canvas => {
    const link = document.createElement('a');
    link.download = 'A4_Page.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});