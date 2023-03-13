const mainPage = require("./module/html");
console.log(mainPage);

const http = require('http');

const server = http.createServer(function(request, response){
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html'); 
  response.end(mainPage);

  /*const mainPage = require("./module/html");
  response.write(mainPage);
  response.end(); 로도 써줄 수 있음*/

  //!위 과정은 서버와 관련된 문법으로 그냥 외워야 함.
})

server.listen(2080, function(error){
  if(error){
    console.error("서버 안돌아감");
  }
  else{
    console.log('서버 돌아감');
  }
});
//! 이후 인터넷에서 localhost:2080(server.listen에 지정한 번호)를 입력해주면 확인가능. 먼저 터미널에서 server.js를 실행해주고 웹에서 확인해야 함.(이후 나가려면 ctrl+c)