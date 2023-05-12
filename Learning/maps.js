let my_map = new Map();

let arr = ["Adiyaman", "Eskişehir", "Erzurum", "Konya", "Sivas", "Tokat"];

my_map.set(34, "Istanbul");
my_map.set(44, "Malatya");
my_map.set(35, "Izmir");
my_map.set(01, "Adana");
my_map.set("cities", arr);

// console.log(my_map);
// console.log(my_map.get(44));

console.log(my_map.delete(01)); // True
console.log(my_map.size);
console.log(my_map.has("cities")); // true

// with For-of ->
for (const value of my_map) {
    console.log(value);
    // ekledğimiz her key-valueyi bir diziye çevirdi
}

for (const [key, value] of my_map) {
    console.log(key, value);
    // key value olarak verdi , dizi olarak vermedi
}