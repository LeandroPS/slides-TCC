function next(){
	var current = $("*.next:not('.current, [data-out-already='true']')").first();
	
	function moveOut(element){
		//element.removeClass(element.attr("data-add-class")!=undefined && element.attr("data-keep-class")!=undefined? element.attr("data-add-class"): "current");
		//se possui data-keep-classes mantem todas as classes e só adiciona a classe out
		//senão remove todas as classes do add-class e a classe current
		//adiciona a classe out
		//põe true no data-out-already
		if(element.attr("data-out-aready")==undefined){
			element.removeClass(element.attr("data-keep-class")!=undefined?"": element.attr("data-add-class")+" current").addClass("out").attr("data-out-already", "true");
			return true;
		}else{
			return false;
		}
	}

	function moveBack(element){
		//ainda n mostrado: possui classe next, não possui classe current e data-out-already=undefined
		//atualmente mostrado: possui classe next possui classe current e data-out-already = undefined
		//já fora: possui classe next, e data-out-already = "true"
		
		if(element.attr("data-out-aready")==undefined && element.hasClass("current")){
			
		}else if(true){
			
		}else{
			
		}
	}
	
	function moveOn(element){
		if(element.attr("data-add-class")!= undefined){
			element.addClass(element.attr("data-add-class"));
		}
		
		if(element.attr("data-too")!= undefined){
			moveOn($(element.attr("data-too")));
		}
		
		if(element.attr("data-end")!=undefined){
			
			
			$("*.next.current:not([data-out-already='true'])").each(function(index){
				if($(this).attr("data-out-class")!=undefined){
					$(this).addClass($(this).attr("data-out-class"));
				}
				if($(this).attr("data-keep-class")==undefined){
					$(this).removeClass($(this).attr("data-add-class")!=undefined? $(this).attr("data-add-class")+" current": "current");
				}
				
				$(this).attr("data-too")!=undefined? moveOut($($(this).attr("data-too"))): false;
				$(this).attr("data-out-already","true");
				
			});
		}
		
		if(element.attr("data-execute")!=undefined){
			window[element.attr("data-execute")]();
		}
		element.addClass("current");
	}
	
	moveOn(current);
}

var cores = ["#8e44ad", "#e67e22", "#2ecc71", "#e74c3c", "#3498db", "#F44336", "#E91E63", "#3F51B5", "#00BCD4", "#607D8B"];
var i = 0;
//var i = 8;

function changeColor(){
	$("body").css("background", cores[i]);
	i++;
}

$(function(){
	changeColor();
	
	$("body").keypress(function(e){
		next();
		if(e.which == 13){
			next();	
		}
	});
});