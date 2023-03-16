CMSC 100  
Lab Exercise 3 - Importing and Exporting
Author: Baron Paulo D. Regoso
Date Finished: 03-17-2023 00:15 AM 

Program Specifications:
Create a JavaScript file called functions.js that exports the following 2 functions:
    1. generateUniqueID()
        Input parameters: first name (string), last name (string)
        Create and return a unique id by concatenating the first letter of the first name (converted to lowercase), 
        the last name (converted to lowercase), and a “unique” alphanumeric string of length 8
        Use the uuid package to get a unique alphanumeric string. Trim as needed. 

        e.g. generateUniqueID(“Alan”, “Turing”)

        returns: “aturing5133f34e”

    2. addAccount()
        Input parameter: An array with the following contents: first name (string), last name (string), 
        email (string), age (number)

        e.g addAccount([“Alan”, ”Turing”, “aturing@w3c.com”, 58]);

        If the following conditions are true:
        -   all fields are present
        -   the first name, last name, and email are non-empty strings
        -   the email is in a valid format (use the validator package)
        -   age is at least 18

        save the data into a new line of file called users.txt in the following format:

        first name,last name,email,age,uniqueID

        e.g.
        users.txt
        Tim,Berners-Lee,tim@w3c.com,25,aturing5133f34e
        Ted,Nelson,ted.n@w3c.com,43,tnelson0cfa6312

Use the function from Item #1 to generate the uniqueID for the user.
If the user was saved, return true. Else, return false

Test your files by calling them in a 2nd file called test.js

Call each function twice from test.js
