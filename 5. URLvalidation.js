
let pattern = "http(s)?:[\/]{2}[a-zA-Z0-9@:%._\+~#=]{2,256}.[a-z]{2,6}"

let flag = "ig" ;

let regEx = new RegExp(pattern,flag);

let url = "https://ama1@.co"

const result = url.match(regEx);

if(result==null){
  console.log("not matched");
}
else{
    console.log("matched");
    console.log(result);
}
