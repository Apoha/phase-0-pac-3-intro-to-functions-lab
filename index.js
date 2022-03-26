function shout(string) {
    return string.toUpperCase();
  }
  
  function whisper(string) {
    return string.toLowerCase();
  }
  
  function logShout(string) {
    console.log('HELLO')
    return string.toUpperCase();
    
  }


  function logWhisper(string) {
    console.log('hello')
    console.log(string.toLowerCase())
}

// function sayHiToHeadphonedRoommate(string) {

//   if (string === "hello")
//   {return "I can't hear you!"}
//   else if (string === "HELLO")
//   {return "YES INDEED!"}
//   else if (string === "Let's have dinner together!"){
//     return "I would love to!"} }



    function sayHiToHeadphonedRoommate(string) {
      if (string === string.toLowerCase())
      {return "I can't hear you!"}
      else if (string === string.toUpperCase())
      {return "YES INDEED!"}
      else if (string === "Let's have dinner together!"){
        return "I would love to!"} }
    
    
    
    console.log(sayHiToHeadphonedRoommate("hello"))
    
    console.log(sayHiToHeadphonedRoommate("HELLO"))
    
    console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))
