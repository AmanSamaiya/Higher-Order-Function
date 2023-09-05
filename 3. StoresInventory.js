

var items = {
    coffee : 20 ,
    bread : 10 ,
    butter : 25 
}

var temp = {} ;


var values  = Object.values(items);
var keys = Object.keys(items);



for (let i = 0; i < keys.length; i++) {
    temp[keys[i]] = values[i] * 80 ;
    
}

console.log(temp);

