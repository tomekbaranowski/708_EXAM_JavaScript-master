/*
3. (3ptk) Napisz funkcje ```bigestSumOfTwoElements(array)```, która przyjmuje tablicę z liczbami i zwraca sumę dwóch największych elementów z tej tablicy.
Dla uproszczenia możemy założyć, że przekazana tablica zawiera wyłącznie liczby.
Jeżeli tablica zawiera tylko jeden element funkcja powinna zwrócić wartość tego elementu.
Jeżeli tablica zawiera zero elementów powinna zwracać ```NaN```
Np:
  ```
  bigestSumOfTwoElements([1,2,3,4]) // => 7
  bigestSumOfTwoElements([]) // => NaN
  bigestSumOfTwoElements([23,45,17,12]) // => 68
  */

  var array = [0, 1, 3, 5];
  var max = Math.max.apply(Math, array);


  function sumSeries (largest) {

      var sum = i * ((smallest + largest) / 2);

      return sum;
  }

  var sum = sumSeries( max);
  console.log(sum);
