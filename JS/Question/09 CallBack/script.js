function firstTask(callback) {
    setTimeout(() => {
      console.log("First Task");
      callback();
    }, 1000);
  }
  
  function secondTask(callback) {
    setTimeout(() => {
      console.log("Second Task");
      callback();
    }, 1000);
  }
  
  function thirdTask(callback) {
    setTimeout(() => {
      console.log("Third Task");
      callback();
    }, 1000);
  }
  
  function fourthTask() {
    setTimeout(() => {
      console.log("Fourth Task");
    }, 1000);
  }
  
  firstTask(() => {
    secondTask(() => {
      thirdTask(() => {
        fourthTask()
      });
    });
  });
  