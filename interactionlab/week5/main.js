const containerEl = document.querySelector("#blocks_container");
const createBlocksBtn = document.querySelector("#create_blocks_btn");
const removeBlocksBtn = document.querySelector("#remove_blocks_btn");

console.log(containerEl)


function createBlocks() {
  // first, remove the example blocks
  containerEl.innerHTML = "";
  console.log("create blocks");
}
function removeBlocks() {
  console.log("remove blocks");
  containerEl.innerHTML = "";
}

createBlocksBtn.addEventListener("click", createBlocks);
removeBlocksBtn.addEventListener("click", removeBlocks);

const blockScales = [
  "0.55",
  "0.64",
  "0.66",
  "0.72",
  "0.77",
  "0.80",
  "0.88",
  "0.99",
]



for(let i = 0; i < 8; i++) {
  console.log("blockScales: ", blockScales[i]);
  }