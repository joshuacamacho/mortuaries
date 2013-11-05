angular.module('mckays',[]).
	config(function($routeProvider){
		$routeProvider.
			when('/', {controller:indexCtrl, templateUrl:'views/landing.html'}).
			when('/about', {controller:aboutCtrl, templateUrl:'views/about.html'}).
			when('/services', {controller:servicesCtrl, templateUrl:'views/services.html'}).
			when('/obituaries', {controller:servicesCtrl, templateUrl:'views/obituaries.html'}).
			when('/locations', {controller:servicesCtrl, templateUrl:'views/locations.html'}).
			when('/contact', {controller:servicesCtrl, templateUrl:'views/contact.php'}).
			otherwise({redirectTo:'/'});
	});
function indexCtrl($scope){
	$scope.recent=[
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'12122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'12252013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
		{name:'Placeholder',imgUrl:'http://placehold.it/80x80',date:'11122013'},
	];


	
	
}
function aboutCtrl($scope){
	
}
function servicesCtrl($scope){
	
}





  $(document).ready(function(){


  	$(window).scroll(function(){
  		if( $(window).scrollTop() > 0 ){
  			$('header').removeClass("animateTransparent").addClass("animateBlack");
  			
  		}else{
  			$('header').removeClass("animateBlack").addClass("animateTransparent");
  		}
  	});

  	



  	//nav bar responsiveness
  	function changeMenu(blockVal){
    
    if(blockVal =="block"){
     $('ul.slicknav_nav li a span').removeClass('hide-nav-item');
      $('ul.slicknav_nav li div a.dropdown-toggle span').addClass('hide-nav-item');
	    }else{
	      //alert('hide menu');
	    }
	  }
	// need widow load

	$( window ).load(function() {
	   $('#main-menu').slicknav(); 
	   blockVal = $(".slicknav_menu").css("display");
	   changeMenu(blockVal);
	});
	  	
  })


