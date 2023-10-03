        let myArray = [];

        function displayArray() {
            document.getElementById('arrayDisplay').textContent = myArray.join(', ');
        }
        document.getElementById('pushButton').addEventListener('click', function () {
            const newItem = document.getElementById('inputItem').value;
            myArray.push(newItem);
            displayArray();
        });

        document.getElementById('unshiftButton').addEventListener('click', function () {
            const newItem = document.getElementById('inputItem').value;
            myArray.unshift(newItem);
            displayArray();
        });
        document.getElementById('insertAtButton').addEventListener('click', function () {
            const newItem = document.getElementById('inputItem').value;
            const index = parseInt(document.getElementById('inputIndex').value);
            
            if (!isNaN(index) && index >= 0 && index <= myArray.length) {
                myArray.splice(index, 0, newItem);
                displayArray();
            } else {
                alert('La posición debe ser un número válido dentro del rango del arreglo.');
            }
        });

 function displayArray() {
     document.getElementById('arrayDisplay').textContent = myArray.join(', ');
 }

 document.getElementById('popButton').addEventListener('click', function () {
     myArray.pop();
     displayArray();
 });

 document.getElementById('shiftButton').addEventListener('click', function () {
     myArray.shift();
     displayArray();
 });

 document.getElementById('removeAtButton').addEventListener('click', function () {
     const indexToRemove = parseInt(document.getElementById('inputIndexRemove').value);
     
     if (!isNaN(indexToRemove) && indexToRemove >= 0 && indexToRemove < myArray.length) {
         myArray.splice(indexToRemove, 1);
         displayArray();
     } else {
         alert('La posición debe ser un número válido dentro del rango del arreglo.');
     }
 });

 displayArray();        