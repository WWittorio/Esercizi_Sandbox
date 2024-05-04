# Esercizi_Sandbox


Link Esercizio:
https://codesandbox.io/p/sandbox/usa-la-forza-luke-cloxjh?file=%2Findex.html


Problema 1: Usa la forza luke (solo vanilla JS, no framework!!!)

SWAPI è un API online che ci permette di ottenere informazioni 
sull'universo di Star Wars

Step 1:
Crea un button che quando premuto recuperi i dati da https://swapi.dev/api/people 
e stampi in HTML i nomi contenuti in lista

Step 2:
Aggiungi 2 button, "avanti" e "indietro", che quando premuti ci permettano di 
fetchare le pagine precedenti o successive e stampare in html i risultati

ex. 
https://swapi.dev/api/people?page=1
https://swapi.dev/api/people?page=2
https://swapi.dev/api/people?page=3

Step 3:
Ogni personaggio fetchato con le api https://swapi.dev/api/people 
ha associato un pianeta di origine

ex.
{
  ...
  "homeworld": "https://swapi.dev/api/planets/1/"
}


per ogni personaggio stampato in pagina, vogliamo accanto 
il nome del pianeta di origine 
