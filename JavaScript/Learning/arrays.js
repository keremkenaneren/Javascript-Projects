const array1 = ["Kerem", "kenan", "eren"];

function arrayStart(array) {
   console.log(array);
}

// alt alta sıralamak için :
array1.forEach(arrayStart);

// yan yana arrayi direk basar :
console.log(array1);

array1.push("16"); // örn. pust metodunu bu lekilde kullanırsak ekler
console.log(array1.push()); // bu şekilde kullanırsak eleman sayısını gösterir

console.log(array1);
