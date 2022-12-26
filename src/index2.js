// async function onLoadMore() {
//   newsApiService.incrementPage();
//   // newsApiService

//   try {
//     const data = await newsApiService.fetchImage();

//     const { hits } = data;
//     // const hits = data.hits;
//     console.log(hits);

//     const { totalHits } = data;
//     // const totalHits = data.totalHits;
//     console.log(totalHits);

//     renderCard(hits);
//     console.log(newsApiService.page);
//     console.log(totalPages);
//     if (newsApiService.page === totalPages) {
//       refs.buttonLoad.classList.add('is-hidden');
//       Notify.failure(
//         'We are sorry, but you have reached the end of search results'
//       );
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

//! Task 01-1

function addToList(item, list) {
  return list.push(item);
}

const result = addToList('apple', ['banana']);
console.log(result); // 2

// console.log(addToList('apple', ['banana'])); // 2

//! Task 01-2

// function addToList(item, list) {
//   list.push(item);

//   return list;
// }

// const result = addToList('apple', ['banana']);
// console.log(result); // ['banana', 'apple']

// console.log(addToList('apple', ['banana'])); // ['banana', 'apple']

// a) ['apple', 'banana'];
// b) ['banana', 'apple']
// c) true
// d) 2
// e) undefined

//! Task 02
// Змініть myNestedArray, використовуючи будь-яку комбінацію рядків , чисел і логічних значень для елементів даних,
// щоб він мав рівно п’ять рівнів глибини(пам’ятайте, що крайній масив має рівень 1).
// Десь на третьому рівні включите рядок deep, на четвертому рівні включите рядок deeper, а на п’ятому рівні включите рядок deepest.

let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
    ['loop', 'shift', 6, 7, 1000, 'method', 'deep'],
  ],
  [
    [['concat', false, true, 'spread', 'array', 'deeper']],
    [[['mutate', 1327.98, 'splice', 'slice', 'push', 'deepest']]],
  ],
];
console.log(myNestedArray[2][0][0]);
console.log(myNestedArray[2][0][1][0]);
console.log(myNestedArray[2][0][1][1][0]);

//просто комент для практики
