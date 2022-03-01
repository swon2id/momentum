const images = [
  "https://unsplash.com/photos/38h8bgXoxJI/download?ixid=MnwxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE2NDYxMDQ3OTE&force=true&w=1920",
  "https://unsplash.com/photos/NoQMszXaxGg/download?ixid=MnwxMjA3fDB8MXxhbGx8NXx8fHx8fDJ8fDE2NDYxMDQ3OTE&force=true&w=1920",
  "https://unsplash.com/photos/ys1h22t5h4E/download?ixid=MnwxMjA3fDB8MXxhbGx8Nnx8fHx8fDJ8fDE2NDYxMDQ3OTE&force=true&w=1920",
  "https://unsplash.com/photos/lb8_2K7D6rg/download?ixid=MnwxMjA3fDB8MXxhbGx8MTV8fHx8fHwyfHwxNjQ2MTA0Nzkx&force=true&w=1920",
];

const bgImg = document.createElement("img");

function paintBackgroundImage() {
  const randomNum = Math.floor(Math.random() * images.length);
  bgImg.src = `${images[randomNum]}`;
  bgImg.id = "backgroundImg";
  document.body.appendChild(bgImg);
}

paintBackgroundImage();
