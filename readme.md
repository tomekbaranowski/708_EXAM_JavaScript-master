# JavaScript - egzamin

Zadanie 1-2 rozwiąż w pliku odpowiedzi.txt

Resztę zadań rozwiąż w odpowiednich plikach js.

Nie zmieniaj nic w plikach HTML.

## Zadania:
1. (2ptk) Co to jest propagacja eventów? Jakie znasz typy propagacji? Czym się od siebie różnią?

2. (1ptk) Wytłumacz dlaczego powinniśmy kod JavaScript umieszczać w następującym bloku kodu:
  ```
  document.addEventListener('DOMContentLoaded', function () {
    ... js code goes here...
  }
  ``` 
Do czego może prowadzić sytuacja, w której tego nie zrobimy?

3. (3ptk) Napisz funkcje ```bigestSumOfTwoElements(array)```, która przyjmuje tablicę z liczbami i zwraca sumę dwóch największych elementów z tej tablicy.
Dla uproszczenia możemy założyć, że przekazana tablica zawiera wyłącznie liczby.
Jeżeli tablica zawiera tylko jeden element funkcja powinna zwrócić wartość tego elementu.
Jeżeli tablica zawiera zero elementów powinna zwracać ```NaN```
Np:
  ```
  bigestSumOfTwoElements([1,2,3,4]) // => 7
  bigestSumOfTwoElements([]) // => NaN
  bigestSumOfTwoElements([23,45,17,12]) // => 68
  ```

4. (5ptk) Używając JavaScript:
  1. Znajdź wszystkie elementy o klasie ```sample_class``` i wypisz w konsoli ich tagi,
  2. Znajdź element o id ```sample_id``` i wypisz w konsoli jego wszystkie klasy,
  3. Znajdź wszystkie elementy listy znajdujące się w divie o klasie ```sample_class_2``` i wypisz znajdujący się w nich tekst,
  4. Znajdź wszystkie linki i wypisz adresy, na które wskazują,
  5. Znajdź element o klasie ```sample_class_3``` i wypisz w konsoli tagi wszystkich jego dzieci.

5. (3ptk) Używając JavaScript dopisz do wszystkich guzików znajdujących się na stronie event który po naciśnięciu spowoduje, że na divie pokaże się tekst trzymany w ```data-text```.

6. (6ptk) Używając JavaScript dopisz event do formularza. Event ma reagować na wysłanie formularza. Event ma:
  1. zapobiegać przeładowaniu strony,
  2. sprawdzić czy długość danych w polu Imię jest dłuższa niż 5 zniaków. Jeżeli warunek nie jest spełniony odpowiednia wiadomość powinna być pokazana w divie o klasie ```error_message```,
  3. sprawdzić czy wartości pól Hasło i Hasło2 są identyczne. Jeżeli warunek nie jest spełniony odpowiednia wiadomość powinna być pokazana w divie o klasie ```error_message```,
  4. sprawddzić czy zaznaczony jest checkbox "Akceptuję warunki". Jeżeli warunek nie jest spełniony odpowiednia wiadomość powinna być pokazana w divie o klasie ```error_message```,
  5. Jeżeli wszystkie warunki są spełnione w konsoli wyświetl wszyskie informacje z fomularza, a w divie o klasie ```success_message``` wyświetl informację o tym że rejstracja się udała.
