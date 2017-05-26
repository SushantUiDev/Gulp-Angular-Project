(function(){
	angular.module("myApp",["header","register","products","footer","login","profile"])
	
	angular.module("myApp")
	.config(function(){
		console.log("i am myApp Module config()..");
	})
	.run(function(){
		console.log("i am myApp module run()...")
	})
})();