const Gallery = [
  {
    ImageSrc: "./Images/first.jpg",
    Alt: "First astronaut",
    CheckingSrc: "Images/first.jpg",
    Title: "Press to Choose The head of astronaut for background Image",
  },
  {
    ImageSrc: "./Images/second.jpg",
    Alt: "second astronount",
    CheckingSrc: "Images/second.jpg",
    Title:
      "Press to Choose the astronaut playing with stars for background Image",
  },
  {
    ImageSrc: "./Images/third.jpg",
    Alt: "third astronount",
    CheckingSrc: "Images/third.jpg",
    Title: " Press to Choose the astronaut amazed by moon for background Image",
  },
  {
    ImageSrc: "./Images/fourth.jpg",
    Alt: "SuperMan",
    CheckingSrc: "Images/fourth.jpg",
    Title: "Press to Choose SuperMan background Image",
  },
];
const URL = "http://localhost:5500/"; // it is used for checking the current src while web is on localhost
const GitURL = "https://khashayarrohani.github.io/Gallery/"; // it is used for checking the current src while web is on github pages
const section = document.getElementById("sec");

//Creating function to initialize the section to show a preview Image
function BackgroundFirstImage() {
  section.innerHTML = `<img src="${Gallery[0].ImageSrc}" alt="${Gallery[0].Alt}" />`;
}
BackgroundFirstImage();

//it is aria function that reads the image's alt and it sets to be hidden for users
function ariaReader(imageAlt) {
  const ariaOption = document.getElementById("announcer");
  ariaOption.textContent = imageAlt;
  ariaOption.style.display = "none"; //setting hidden happen here
  console.log(imageAlt + " it is happening");
}
const galleryDiv = document.getElementById("galView"); //here I show my pictures to let user choose one for background

for (let i = 0; i < Gallery.length; i++) {
  galleryDiv.innerHTML += `<div class="ImageContainer"> 
    <img title="${Gallery[i].Title}" tabindex="1" id="selectedImage${i}" src="${Gallery[i].ImageSrc}" alt="${Gallery[i].Alt}" />
    </div>`;
}

for (let i = 0; i < Gallery.length; i++) {
  // here i show the selected image in background
  const SelectedImage = document.getElementById(`selectedImage${i}`);
  SelectedImage.addEventListener("click", function () {
    section.innerHTML = `<img id="selectedImage${i}" src="${Gallery[i].ImageSrc}" alt="${Gallery[i].Alt}" />`;
    ariaReader(Gallery[i].Alt);
  });
}
function PREVIOUSbutton() {
  const previousButton = document.getElementById("PreviousButton");
  //setting button to select and background changes to the previous one
  previousButton.addEventListener("click", function () {
    var imageElement = section.querySelector("img");
    console.log(imageElement.src);
    let curIndex = 0;
    for (let i = 0; i < Gallery.length; i++) {
      if (
        imageElement.src == GitURL + Gallery[i].CheckingSrc || //here i check which image of the gallery is already is selected
        imageElement.src == URL + Gallery[i].CheckingSrc
      ) {
        curIndex = i;
        console.log("picture is found index is: " + i);
      }
    }
    curIndex--; // here i change the current index that i found in last step and set it to index before
    if (curIndex < 0) {
      console.log("index is set to max");

      curIndex = Gallery.length - 1;
      section.innerHTML = `<img id="selectedImage${curIndex}" src="${Gallery[curIndex].ImageSrc}" alt="${Gallery[curIndex].Alt}" />`;
      ariaReader(Gallery[curIndex].Alt);
    } else {
      console.log("index is fine");
      section.innerHTML = `<img id="selectedImage${curIndex}" src="${Gallery[curIndex].ImageSrc}" alt="${Gallery[curIndex].Alt}" />`;
      ariaReader(Gallery[curIndex].Alt);
    }
  });
}
PREVIOUSbutton();
//same as previous button for nextbutton
function NEXTbutton() {
  const nextButton = document.getElementById("NextButton");
  nextButton.addEventListener("click", function () {
    var ImageElement = section.querySelector("img");
    console.log(ImageElement.src);
    let CurIndex = 0;
    for (let i = 0; i < Gallery.length; i++) {
      if (
        ImageElement.src == GitURL + Gallery[i].CheckingSrc ||
        ImageElement.src == URL + Gallery[i].CheckingSrc
      ) {
        CurIndex = i;
        console.log("picture is found index is: " + i);
      }
    }
    CurIndex++;
    if (CurIndex < Gallery.length) {
      console.log("index is fine");
      section.innerHTML = `<img id="selectedImage${CurIndex}" src="${Gallery[CurIndex].ImageSrc}" alt="${Gallery[CurIndex].Alt}" />`;
      ariaReader(Gallery[CurIndex].Alt);
    } else {
      console.log("index is set to min");
      CurIndex = 0;
      section.innerHTML = `<img id="selectedImage${CurIndex}" src="${Gallery[CurIndex].ImageSrc}" alt="${Gallery[CurIndex].Alt}" />`;
      ariaReader(Gallery[CurIndex].Alt);
    }
  });
}
NEXTbutton();
//arrow Right to change picture to Next one
function ARNext() {
  var ImageElement = section.querySelector("img");
  console.log(ImageElement.src);
  let CurIndex = 0;
  for (let i = 0; i < Gallery.length; i++) {
    if (
      ImageElement.src == GitURL + Gallery[i].CheckingSrc ||
      ImageElement.src == URL + Gallery[i].CheckingSrc
    ) {
      CurIndex = i;
      console.log("picture is found index is: " + i);
    }
  }
  CurIndex++;
  if (CurIndex < Gallery.length) {
    console.log("index is fine");

    section.innerHTML = `<img id="selectedImage${CurIndex}" src="${Gallery[CurIndex].ImageSrc}" alt="${Gallery[CurIndex].Alt}" />`;
    ariaReader(Gallery[CurIndex].Alt);
  } else {
    console.log("index is set to min");
    CurIndex = 0;
    section.innerHTML = `<img id="selectedImage${CurIndex}" src="${Gallery[CurIndex].ImageSrc}" alt="${Gallery[CurIndex].Alt}" />`;
    ariaReader(Gallery[CurIndex].Alt);
  }
}
//arrow left to change picture to previous
function ARBack() {
  var imageElement = section.querySelector("img");
  console.log(imageElement.src);
  let curIndex = 0;
  for (let i = 0; i < Gallery.length; i++) {
    if (
      imageElement.src == GitURL + Gallery[i].CheckingSrc ||
      imageElement.src == URL + Gallery[i].CheckingSrc
    ) {
      curIndex = i;
      console.log("picture is found index is: " + i);
    }
  }
  curIndex--;
  if (curIndex < 0) {
    console.log("index is set to max");

    curIndex = Gallery.length - 1;
    section.innerHTML = `<img id="selectedImage${curIndex}" src="${Gallery[curIndex].ImageSrc}" alt="${Gallery[curIndex].Alt}" />`;
    ariaReader(Gallery[curIndex].Alt);
  } else {
    console.log("index is fine");
    section.innerHTML = `<img id="selectedImage${curIndex}" src="${Gallery[curIndex].ImageSrc}" alt="${Gallery[curIndex].Alt}" />`;
    ariaReader(Gallery[curIndex].Alt);
  }
}
document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key === "ArrowRight") {
    ARNext();
  } else if (event.key === "ArrowLeft") {
    ARBack();
  }
});
