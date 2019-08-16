function myFunction() {
    //holds the time of the first train from form input  
    var trainname = document.getElementById("tname").value;
    //holds the destination title from the form input
    var destination = document.getElementById("dest").value;
    //holds the frequency time of the train in mins
    var frequency = document.getElementById("freq").value;
    // Time is what is inputed
    var firstTime = document.getElementById("first").value;
    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    // Current Time
    var currentTime = moment();
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    // Minute Until Train
    var tMinutesTillTrain = frequency - tRemainder;
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  
      console.log(trainname);
      console.log(destination);
      console.log(frequency);
      console.log(moment(nextTrain).format("hh:mm"));
      console.log(tMinutesTillTrain);
  
  var tableRef = document.getElementById('traintable').getElementsByTagName('tbody')[0];
  
  // Insert a row in the table at the last row
  var newRow   = tableRef.insertRow();
  
  // Insert a cell in the row at index 0
  var newCell1  = newRow.insertCell(0);
  var newCell2  = newRow.insertCell(1);
  var newCell3  = newRow.insertCell(2);
  var newCell4  = newRow.insertCell(3);
  var newCell5  = newRow.insertCell(4);
  
  // Append a text node to the cell
  var newText  = document.createTextNode(trainname);
  newCell1.appendChild(newText);
  
  var newText  = document.createTextNode(destination);
  newCell2.appendChild(newText);
  
  var newText  = document.createTextNode(frequency);
  newCell3.appendChild(newText);
  
  var newText  = document.createTextNode(moment(nextTrain).format("hh:mm"));
  newCell4.appendChild(newText);
  
  var newText  = document.createTextNode(tMinutesTillTrain);
  newCell5.appendChild(newText);
  
  //LocalForage
  let data = {
         trainname: trainname,
         destination: destination,
         firstTime: firstTime,
         frequency: frequency,
     }
     console.log(data);
     localforage.getItem("saved").then(function(result){
       if(!result){
         result = [];
         result.push(data);
       }
       localforage.setItem("saved", result).then(function(){
           console.log("saved")
           console.log(result);
          })}); 
  }