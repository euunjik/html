'use strict';
// 도서 5권의 제목, 저서, 가격

const bookArray = new Array(5);

function Book (title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;

}

console.log(bookArray);

//도서 가격이 가장 비싼 도서 인덱스 반환.
function max(arrays) {
    let max = arrays[0].price
    let index = -1;
    for(let i=0; i<arrays.length; i++ ) {
        if(max < arrays[i].price) {
            max = arrays[i].price;
            index = i;
        }
    }
    return maxBook;
}

//도서 정보 등록
for(let i=0; i<bookArray.length; i++) {
    const bookStr = prompt('도서 정보를 입력하세요 (제목, 저서, 가격)',"제목,저서,가격");
    const tokens = bookStr.split(",");
    bookArray[i] = new Book(tokens[0],tokens[1],tokens[3]);
  
 
}

let maxIndex = (max(bookArray));
