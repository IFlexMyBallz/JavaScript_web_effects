// Create the dropdown menu container
const menuContainer = document.createElement("div");
menuContainer.style.position = "fixed";
menuContainer.style.bottom = "10px";
menuContainer.style.right = "10px";
menuContainer.style.zIndex = "99999";
menuContainer.style.backgroundColor = "#000";  // Black background
menuContainer.style.padding = "10px";
menuContainer.style.borderRadius = "5px";
menuContainer.style.color = "#fff";  // White text
menuContainer.style.fontFamily = "Arial, sans-serif";
menuContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
document.body.appendChild(menuContainer);

// Create the dropdown and button
const dropdown = document.createElement("select");
dropdown.style.padding = "5px";
dropdown.style.marginRight = "10px";
dropdown.style.fontSize = "14px";
dropdown.style.backgroundColor = "#333";  // Dark background for the dropdown
dropdown.style.color = "#fff";  // White text color

const options = [
  { text: "Choose an effect", value: "" },
  { text: "Moving Block", value: "block" },
  { text: "Glitch Effect", value: "glitch" },
];
options.forEach((option) => {
  const opt = document.createElement("option");
  opt.value = option.value;
  opt.textContent = option.text;
  dropdown.appendChild(opt);
});

const runButton = document.createElement("button");
runButton.textContent = "Run";
runButton.style.padding = "5px 10px";
runButton.style.cursor = "pointer";
runButton.style.backgroundColor = "#007BFF";
runButton.style.color = "#fff";
runButton.style.border = "none";
runButton.style.borderRadius = "3px";

// Append dropdown and button to the container
menuContainer.appendChild(dropdown);
menuContainer.appendChild(runButton);

// Define the effects
function runEffect(effect) {
  if (effect === "block") {
    // Moving Block Effect
    const block = document.createElement("div");
    block.style.width = "50px";
    block.style.height = "50px";
    block.style.backgroundColor = "red";
    block.style.position = "fixed";
    block.style.top = "0px";
    block.style.left = "0px";
    block.style.zIndex = "9999";
    document.body.appendChild(block);

    let posX = 0, posY = 0, velocityX = 2, velocityY = 2;
    function moveBlock() {
      posX += velocityX;
      posY += velocityY;

      if (posX <= 0 || posX + 50 >= window.innerWidth) velocityX = -velocityX;
      if (posY <= 0 || posY + 50 >= window.innerHeight) velocityY = -velocityY;

      block.style.left = `${posX}px`;
      block.style.top = `${posY}px`;
      requestAnimationFrame(moveBlock);
    }
    moveBlock();
  } else if (effect === "glitch") {
    // Glitch Effect
    const elements = document.querySelectorAll("*");
    const intervalTime = 100;

    const glitchInterval = setInterval(() => {
      elements.forEach((el) => {
        el.style.transform = `skew(${Math.random() * 10 - 5}deg, ${Math.random() * 10 - 5}deg)`;
        el.style.transition = "transform 0.1s";
      });

      if (Math.random() > 0.7) {
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        randomElement.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        randomElement.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      }

      setTimeout(() => {
        elements.forEach((el) => {
          el.style.transform = "";
          el.style.backgroundColor = "";
          el.style.color = "";
        });
      }, 80);
    }, intervalTime);

    setTimeout(() => clearInterval(glitchInterval), 5000);
  }
}

// Attach the event listener to the button
runButton.addEventListener("click", () => {
  const selectedEffect = dropdown.value;
  if (selectedEffect) {
    runEffect(selectedEffect);
  } else {
    alert("Please select an effect!");
  }
});
