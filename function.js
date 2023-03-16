import { appendFileSync } from 'node:fs'; // import from modules
import { v4 as uuid } from 'uuid'; // do not forget to install the said modules first
import validator from 'validator'; // some modules are able to import default packages while some are not capable

function generateUniqueID(fname, lname){
    var uniqueID = uuid().substring(0,8); 

    return (fname[0].toLowerCase()+lname.toLowerCase()+uniqueID); 

}

function addAccount(arr){
    if(arr.length == 4){ // arr must have complete and appropriate no. of elements
        if(arr[0] != "" && arr[1] != "" && arr[2] != ""){ // array str contents must not be empty
            if(validator.isEmail(arr[2])){ // validate email input
                if(arr[arr.length-1] >= 18){ // age must pass restriction
                    // save into new line of file
                    let str = arr.join(",") + "," + generateUniqueID(arr[0], arr[1]) // join array contents and add generated id
                    appendFileSync("users.txt", str+"\n"); // use module for writing
                    return true;
                } 
            }
        }
    }
    return false;
}

export default { addAccount } // ES Module was used