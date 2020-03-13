function getRandom(max) {
	return Math.floor(Math.random() * max);
}
$("#but").on('click', function(){
	
	var text = $('.getting_text').val();
	$('#list').append('<li><div class="cl1"><input class="class_input_checkbox" type="checkbox"></div><span></span></li>');
	$('span').text(text);
});
let a = getRandom(4);

alert(a);
// $(function (){
  
// 		$('#but').click(function(){
	
// 		   var text = $('.getting_text').val();
// 		   $('#list').append('<li><div class="cl1"><input class="class_input_checkbox" type="checkbox"></div><span class="class_span"></span></li>');
// 		   $('span').text(text);
			
// 		});
	
// 	});
// $(function (){
	
// 		$('but').click(function(){
	
// 		   var text = $('getting_text').val();
	
// 		   $('dv').text(text);
	
// 		});
	
// 	});
	