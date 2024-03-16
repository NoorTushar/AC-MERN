When there are nested elements and we click on the lowest of the element, then the upper elements are also triggered.

<img src="attachments/Pasted image 20240317015900.png">

### 🟪 to stop event bubbling

on the add event listener, add `event` as parameter and inside the function write

`event.stopPropagation()`

<img src="attachments/Pasted image 20240317020018.png">
