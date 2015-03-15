
//demo2.html
//self  指代全局作用域
self.addEventListener('message',function(e){
	var data = e.data;
	console.log(data);
	switch(data.cmd){
		case 'start':
		self.postMessage(data.msg);
		break;

		case 'stop':
		self.postMessage(data.msg);
		//關閉worker進程
		self.close();
		break;

		default:
		self.postMessage(data.msg);
	}
},false);