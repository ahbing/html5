
// demo1.html

//self.postMessage('在主角本發送message之前發送');
self.addEventListener('message',function(e){
	//打印 發送過來的message
	console.log(e.data);  // hello worker
	self.postMessage(e.data);

},false);


