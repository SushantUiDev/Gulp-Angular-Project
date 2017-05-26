(function(){
	function headerCtrlFn(){
		var vm=this;
		vm.navBar=["Home","Login","Register","Products","Profile"]
		vm.loginTemplate="app/login/login.tpl.html";
		vm.registerTemplate="app/register/register.tpl.html";
		vm.productsTemplate="app/products/products.tpl.html";
		vm.profileTemplate="app/profile/profile.tpl.html";
		
		vm.loadView=function(param){
			console.log(param)
			if(param == "Login"){
				vm.loadTemplate=vm.loginTemplate;
			}else if(param == "Register"){
				vm.loadTemplate=vm.registerTemplate;
			}else if(param == "Products"){
				vm.loadTemplate=vm.productsTemplate;
			}else if(param == "Profile"){
				vm.loadTemplate=vm.profileTemplate;
			}
		}
	}
	angular.module("header")
	.controller("headerCtrl",[headerCtrlFn])
})();