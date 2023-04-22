# 1. Movies filtering

![cinema](https://media.giphy.com/media/l6mBchxYZc7Sw/giphy.gif)

The list of movies are copied and made movies.json file from the movies array in the [movies](homework/movies.js) file. The following tasks have been implemented:

1.1. Listed all the movies containing the **with a short title**.<br>
1.2. Listed all the movie titles with **long movie titles**.<br>
1.3. Counted the **number of movies** made between 1980-1989 (including both the years).<br>
1.4. Created a new array that has an **extra key called tag**. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4).<br>
1.5. **Using [chaining](readme.md#Chaining)**, first filtered the movies array to only contain the movies rated higher than 6. Then the movies array has been mapped to only the rating of the movies.<br>
1.6. **Counted the total number of movies** containing any of following keywords: `Surfer`, `Alien` or `Benjamin`. So if there were 3 movies that contained `Surfer`, 1 with `Alien` and 2 with `Benjamin`, then it returns 6. Case insensitivity does not applied.<br>
1.7. Created an array of movies where a **word in the title is duplicated**. Fx "Star **Wars**: The Clone **Wars**" the word **Wars** is duplicated. Here are some madeup examples of movies with duplicated words in the title: "**The** three men and **the** pistol", "**Chase** three - The final **chase**".<br>
1.8. Calculated the **average rating** of all the movies using [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).<br>
1.9. **Counted the total number** of Good, Average and Bad movies using [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). A return could fx be `{goodMovies: 33, averageMovies: 45, goodMovies: 123}`.<br>
