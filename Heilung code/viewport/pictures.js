// const block = document.getElementById('block');
// const block2 = document.getElementById('block2');

// block.addEventListener('wheel', function(e) {
//   e.preventDefault();

//   const scrollSpeed = 13; // Скорость скроллинга
//   const scrollDirection = e.deltaY > 0 ? 1 : -1; //Хуй знает как сделала, но работает (если поставить deltaX то идёт чистейшая хуета)

//   block.scrollLeft += scrollDirection * scrollSpeed;

//   if (scrollDirection === 1 && block.scrollLeft >= block.scrollWidth - block.clientWidth) {
//     block.scrollLeft = 0;
//   } 
//   else if (scrollDirection === -1 && block.scrollLeft <= 0) {
//     block.scrollLeft = block.scrollWidth - block.clientWidth;
//   }
// });

// block2.addEventListener('wheel', function(e) {
//   e.preventDefault();

//   const scrollSpeed = 13; // Скорость скроллинга
//   const scrollDirection = e.deltaY > 0 ? 1 : -1; //Хуй знает как сделала, но работает (если поставить deltaX то идёт чистейшая хуета)

//   block2.scrollLeft += scrollDirection * scrollSpeed;

//   if (scrollDirection === 1 && block.scrollLeft >= block2.scrollWidth - block2.clientWidth) {
//     block2.scrollLeft = 0;
//   } 
//   else if (scrollDirection === -1 && block2.scrollLeft <= 0) {
//     block2.scrollLeft = block2.scrollWidth - block2.clientWidth;
//   }
// });


const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');

block1.addEventListener('wheel', handleScroll);
block2.addEventListener('wheel', handleScroll);
block3.addEventListener('wheel', handleScroll);
block4.addEventListener('wheel', handleScroll);
block5.addEventListener('wheel', handleScroll);
block6.addEventListener('wheel', handleScroll);

function handleScroll(e) {
  e.preventDefault();

  const scrollSpeed = 13; // Скорость скроллинга
  const scrollDirection = e.deltaY > 0 ? 1 : -1;

  const blockElement = e.currentTarget;

  blockElement.scrollLeft += scrollDirection * scrollSpeed;

  if (scrollDirection === 1 && blockElement.scrollLeft >= blockElement.scrollWidth - blockElement.clientWidth) {
    blockElement.scrollLeft = 0;
  } else if (scrollDirection === -1 && blockElement.scrollLeft <= 0) {
    blockElement.scrollLeft = blockElement.scrollWidth - blockElement.clientWidth;
  }
}

