
var authors = ["Thomas" ,"Yash" , "mayank" ,"rahul", "david"];


var years = [2014 ,2002 ,2004 , 2015 , 1998];

const filtered = (authors , years) =>{

    var newarr = [] ;

   years.filter( (value , index) =>{
    if (value>2010) {
      newarr.push(authors[index].toUpperCase());
    }
    return newarr ;
   })
   
   console.log(newarr);
}

filtered(authors ,years)