//Kata Codewars
//Nombew: Pagination control - Showing page numbers
//Kyu: 5

const getPages = (length, currentPage, size) => {
  //const pages = [1, 3, 4, 5, 10];

  let beforeSize = size;
  let afterSize = size;
  let paginationArr = [currentPage];

  if (currentPage - size < 2) {
    beforeSize = currentPage - 1;
    afterSize;
  }
  for (let i = currentPage; i > currentPage - beforeSize; i--) {
    if (i <= 1) afterSize++;
    else paginationArr.unshift(i);
  }

  console.log(afterSize);
  console.log(paginationArr);

  //return pages;
};

getPages(10, 5, 6);
