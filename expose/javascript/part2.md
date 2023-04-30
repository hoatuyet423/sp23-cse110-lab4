# PART 2

### Question 1:
- 3
- It will print 3 because that is the values of i after all the operations in the for loop. Since i is a var, i is declared at the begining of the function then initilized in the for lopp and increment until it reach the length of prices, which is 3. 

### Question 2:
- 150 
- There are no error because discounedPrice is a var so it can be access even after the for loop block.

### Question 3:
- 150
- There will be no error because finalPrice is a var so it can be used anywhere in the function scope. Since line 14 is still in the function, it give no error and finalPrice will be values of it is during the last iteration in the for loop. 

### Question 4: 
-  It will return an array [50, 100, 150]
- There will be no error becuase discounted is a var and it can be access anywhere in the function block, since the return statement is still inside the function, discounted have no problem with being return at the end. 
- The array is generate by divided the elements in the prices array by 2. Hence we have [50, 100, 150].

### Question 5:
- It will cause an error because i is a let variable that is declared and initialize inside the for loop scope, meaning it can only survive inside the for loop block. Since line 12 is not in the for loop block, we can't access i in line 12, hence there will be an error. 

### Question 6: 
- It will cause an error because discountedPrice is a let variable that is declared and initialize inside the for loop scope, meaning it can only survive inside the for loop block. Since line 13 is not in the for loop block, we can't access discountedPrice in line 13, hence there will be an error. 

### Question 7: 
- 150 
- Since finalPrice is declare and first initialize at the beginning of the function, the scope of it will be anywhere inside the function, meaning it can be used in line 14 without any problmes or errors. finalPrice is modify during the loop iteration, so by the time it get to line 14, it will hold the values it have in the last iteration in the for loop. 

### Question 8:
- It will return an array [50, 100, 150]
- There will be no error becuase discounted is a let variable and it can be access anywhere in the function block, since the return statement is still inside the function, discounted have no problem with being return at the end. 
- The array is generate by divided the elements in the prices array by 2. Hence we have [50, 100, 150].

### Question 9:
- It will cause an error because i is a let variable that is declared and initialize inside the for loop scope, meaning it can only survive inside the for loop block. Since line 12 is not in the for loop block, we can't access i in line 12, hence there will be an error. 

### Quesion 10: 
- 3
- At the beginning of the function, length is decalred and initilized as a const variable with the values of 3. Since it is a const variable, the values can't be change at anytime, and it is correct for the given code. Hence there is no errors and the values at line 12 stay to be 3. Line 12 is also inside the function scope, so there is no error for the print statement/

### Question 11: 
- [50, 100, 150]
- There is no error because although discounted is a const variable, there is an exception for array and object. Hence discounted can still be added by the values of discountedPrice every time in the for loop


### Question 12:
- A: student.name
- B: student["Grad Year"]
- C: studeht.greeting()
- D: student["Favorite Teacher"].name
- D: student.courseLoad[0]

### Question 13:
- A: 32. Because integer map to their string representation so 2 turn into a string. 
- B: 1. Because the operation - can only be use for arithmetic. Hence 3 will now turn into an integer. 
- C: 3. Since 3 is an integer, the null follow and also turn into an integer with value of 0. 
- D: 3. Since 3 is an string, the null follow and also turn into an string with value of 0. 
- E: 4. Since true is actually the number 1. It will perform the addition math for 1 and 3. 
- F: 0. In boolean, all values such as null and false will equal to 0, and any other will be 1. In this case, null and false map to 0 and adding them will also bring 0.
- G: 3undefined. Since '3' is a string, undefined also follow and turn into a string itself. 
- H: NaN. Because the operation - can only be use for arithmetic. It will turn undefined into NaN, which mean that the conversion fail.

### Question 14: 
- A: true. Since 2 become the number 2. 
- B: false. Because they are both string, so the first character in the string is compared. Since 1 > 2, it is false.
- C: true. == perform a comparason with type conversion. Hence, it turn '2' into 2 and comapre the two numbers, which return true.
- D: false. === perform a comparason without type conversion. Hence, true can't euqla to 2.
- E: false. == perform a comparason with type conversion. Hence, it turn true into 1 and compare them, which return false. 
- F: true. Boolean(2) will return true becuase 2 is a number that is not 0. Then it compare the two sides and return the final result of true. 

### Question 15: 
- == perform a comparason with type conversion while the === perform a comparason without type conversion.

### Question 16: 
- [part2-question16.js](/expose/javascript/part2-question16.js)

### Question 17:
- [2,4,6]
- doSomething become the callback function in modifyArray. Whenever callbacl is call, it is actually calling doSomething and and dopuble the value of the element in array. Hence in the end, it return the newArray with all the double values. 

### Question 18: 
- [part2-question18.js](/expose/javascript/part2-question18.js)

### Question 19:
- 1 4 3 2 
- Because 3 and 2 have Timeout, they will be printed later than 1 and 4. Because 3 is Timeout for 0 so it will be printed first, then 2 is printed last. 


