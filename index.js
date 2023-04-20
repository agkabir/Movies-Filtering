
const movies = require("./movies.json");
// 1. movies with short title
const shortTitleMovies = movies.filter((x) => x.title.length <= 12);
console.log(shortTitleMovies.length);
// 2. movies with long title
const longTitleMovies = movies.filter((x) => x.title.length > 12);
console.log(longTitleMovies.length);

// 3. number of movies between 1980-1989
const moviesBetween80And89 = movies.filter(
  (x) => x.year >= 1980 && x.year <= 1989
);
console.log(
  "Number of movies between 1980-1989 :",
  moviesBetween80And89.length
);

// 4. new array that has an extra key called tag using forEach
const moviesNew = [];
movies.forEach((movie) => {
  const newMovie = { ...movie };
  if (movie.rating >= 7) {
    newMovie["tag"] = "Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    newMovie["tag"] = "Average";
  } else {
    newMovie["tag"] = "Bad";
  }
  moviesNew.push(newMovie);
});

// 4. new array that has an extra key called tag using .map
const newMovies = movies.map((movie) => {
  if (movie.rating >= 7) {
    return { ...movie, tag: "Good" };
  } else if (movie.rating >= 4 && movie.rating < 7) {
    return { ...movie, tag: "Average" };
  } else {
    return { ...movie, tag: "Bad" };
  }
});

// 5. filtering by rating >6 then mapping the rating
const ratingsGreaterThan6 = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(ratingsGreaterThan6);

//6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
const pattern = /\b(Benjamin|surfer|alien)\b/gim;
const searchSurferBenjaminAlien = movies.filter((movie) =>
  pattern.test(movie.title)
).length;
console.log(searchSurferBenjaminAlien);

// 7. finding duplicate words in title
const duplicatePattern = /\b(\w+)\b.*\b\1\b/gim;
const searchDuplicate = movies.filter((movie) =>
  duplicatePattern.test(movie.title)
);
console.log(searchDuplicate.length);

function checkDuplicatewords(title) {
  let flag = "false";
  const words = title.split(" ");
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] == words[j]) {
        flag = "true";
        break;
      }
    }
  }
  return flag;
}

const duplicates = movies.filter(
  (x) => checkDuplicatewords(x.title.toLowerCase()) === "true"
);
console.log(duplicates);

//optional part
// 8. average rating using reduce
const averageRating = movies.reduce(
  (accumulator, currentObj) => accumulator + currentObj.rating / movies.length,
  0
);
console.log(averageRating);
// 9. Count the total number of Good, Average and Bad movies using reduce.
const countedDict = newMovies.reduce((tagMovies, movie) => {
  const currCount = tagMovies[movie.tag.toLowerCase() + "Movies"] ?? 0;
  return {
    ...tagMovies,
    [movie.tag.toLowerCase() + "Movies"]: currCount + 1,
  };
}, {});
console.log(countedDict);
