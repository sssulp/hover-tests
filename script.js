const subtitle = document.getElementsByClassName("subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("Hi, thanks for coming by - please leave a like, and subscribe");