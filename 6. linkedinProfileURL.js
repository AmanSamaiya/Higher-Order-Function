

let pattern = "http(s)?:[\/]{2}www.linkedin\/in\/[a-zA-Z0-9_\-]{5,30}" ;

let flag = "ig" ;

let regEx = new RegExp(pattern,flag);

let url = "http://www.linkedin/in/aman1_-" ;

const result = url.match(regEx);

if(result==null){
    console.log("not matched");

  }
  else{
      console.log("matched");
      console.log(result);
  }