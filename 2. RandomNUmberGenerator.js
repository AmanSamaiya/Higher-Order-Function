setTimeout(function () {
  console.log(" 2 seconds remaining");

  setTimeout(function () {
    console.log("1 second remaining");

    setTimeout(function () {
      console.log("0 seconds remaining");
      console.log(Math.random());
    }, 1000);
  }, 1000);
}, 1000);
