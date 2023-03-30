const artworkList = document.querySelector('.artworks-container');
const artworkInfoList = document.querySelectorAll('.artwork-info');
console.log(artworkList);
artworkList.forEach((artwork, index) => {
  artwork.addEventListener('click', () => {
    artworkInfoList[index].classList.toggle('open');
  });
});