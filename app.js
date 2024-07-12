const Gallery = [
  {
    ImageSrc: "./Images/first.jpg",
    Alt: "First astronount",
    CheckingSrc: "Images/first.jpg",
  },
  {
    ImageSrc: "./Images/second.jpg",
    Alt: "fourth astronount",
    CheckingSrc: "Images/second.jpg",
  },
  {
    ImageSrc: "./Images/third.jpg",
    Alt: "third astronount",
    CheckingSrc: "Images/third.jpg",
  },
  {
    ImageSrc: "./Images/fourth.jpg",
    Alt: "SuperMan",
    CheckingSrc: "Images/fourth.jpg",
  },
];
const URL = "http://localhost:5500/";
const GitURL = "https://khashayarrohani.github.io/Gallery/";
const section = document.getElementById("sec");
function BackgroundFirstImage() {
  section.innerHTML = `<img src="${Gallery[0].ImageSrc}" alt="${Gallery[0].Alt}" />`;
}
BackgroundFirstImage();
const galleryDiv = document.getElementById("galView");

for (let i = 0; i < Gallery.length; i++) {
  galleryDiv.innerHTML += `<div class="ImageContainer"> 
    <img id="selectedImage${i}" src="${Gallery[i].ImageSrc}" alt="${Gallery[i].Alt}" />
    </div>`;
}

for (let i = 0; i < Gallery.length; i++) {
  const SelectedImage = document.getElementById(`selectedImage${i}`);
  SelectedImage.addEventListener("click", function () {
    section.innerHTML = `<img id="selectedImage${i}" src="${Gallery[i].ImageSrc}" alt="${Gallery[i].Alt}" />`;
  });
}
const previousButton = document.getElementById("PreviousButton");

previousButton.addEventListener("click", function () {
  var imageElement = section.querySelector("img");
  console.log(imageElement.src);
  let curIndex = 0;
  for (let i = 0; i < Gallery.length; i++) {
    if (imageElement.src == GitURL + Gallery[i].CheckingSrc) {
      curIndex = i;
      console.log("picture is found index is: " + i);
    }
  }
  curIndex--;
  if (curIndex < 0) {
    console.log("index is set to max");

    curIndex = Gallery.length - 1;
    section.innerHTML = `<img id="selectedImage${curIndex}" src="${Gallery[curIndex].ImageSrc}" alt="${Gallery[curIndex].Alt}" />`;
  } else {
    console.log("index is fine");
    section.innerHTML = `<img id="selectedImage${curIndex}" src="${Gallery[curIndex].ImageSrc}" alt="${Gallery[curIndex].Alt}" />`;
  }
});
const nextButton = document.getElementById("NextButton");

nextButton.addEventListener("click", function () {
  var imageElement = section.querySelector("img");
  console.log(imageElement.src);
  let curIndex = 0;
  for (let i = 0; i < Gallery.length; i++) {
    if (imageElement.src == URL + Gallery[i].CheckingSrc) {
      curIndex = i;
      console.log("it is found: " + i);
    }
  }
  curIndex++;
  if (curIndex < Gallery.length) {
    section.innerHTML = `<img id="selectedImage${curIndex}" src="${Gallery[curIndex].ImageSrc}" alt="${Gallery[curIndex].Alt}" />`;
  } else {
    curIndex = 0;
    section.innerHTML = `<img id="selectedImage${curIndex}" src="${Gallery[curIndex].ImageSrc}" alt="${Gallery[curIndex].Alt}" />`;
  }
});
