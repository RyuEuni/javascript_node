module.exports = function(data){
  if(typeof(data) === "number"){
    return true;
  }
  else {
    console.error("숫자아님");
    return false;
  }
}