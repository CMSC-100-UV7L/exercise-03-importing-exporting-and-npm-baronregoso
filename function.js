import { appendFileSync } from 'node:fs'; // import from modules
import { v4 as uuid } from 'uuid'; // do not forget to install the said modules first
import validator from 'validator'; // some modules are able to import default packages while some are not capable

function generateUniqueID(fname, lname){
    var uniqueID = uuid().substring(0,8); 

    return (fname[0].toLowerCase()+lname.toLowerCase()+uniqueID); 

}

function addAccount(arr){
    if(arr.length == 4){ 
        if(arr[0] != "" && arr[1] != "" && arr[2] != ""){ 
            if(validator.isEmail(arr[2])){ 
                if(arr[arr.length-1] >= 18){ 
                    
                    let str = arr.join(",") + "," + generateUniqueID(arr[0], arr[1])
                    appendFileSync("users.txt", str+"\n"); 
                    return true;
                } 
            }
        }
    }
    return false;
}

addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);