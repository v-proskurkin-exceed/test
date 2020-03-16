
// $(window).ready(function() {
// 	let i = 0;
// 	let j = 0;
// 	$("#but").on('click', function(){
// 		let arr = ['red','pink','purple','light_blue','light_aqua','navy_yellow'];
// 		let rand = Math.floor(Math.random() * arr.length);
// 		let text = $('.getting_text').val();
		
		
// 		$('#list').append('<li><div class="cl1"><input class="class_input_checkbox" type="checkbox"></div>'+'<span class="sp">'+ text + '</span>'+'</li>');
// 		$('div.cl1:last').addClass('cdiv'+j);
// 		$('span:last').addClass('cspan'+ i);
		
		
// 		$('.cspan'+ i).addClass(arr[rand]);
// 		$('.cdiv'+ j).addClass(arr[rand]);
// 		$('.getting_text').val('');
		
		
// 		i++;
// 		j++;
// 	});
// 	$('.class_input_checkbox').on('change', function() {
// 		if($('.class_input_checkbox').prop('checked')) {
// 			$('div.cl1').addClass(' color_red');
// 		}
// 		else {
// 				$('div.cl1').removeClass('color_red');	
// 		}
// 	})	
// })
	


let i = 0;
let j = 0;
let arr = [];
$("#but").on('click', function(){

let text = $('.getting_text').val();

$('#list').append('<div>'+ text);
$('div').addClass('n'+j);
arr.push('n'+j);
j++;
// for(let i = 0; i < arr.length; i++) {
// 	if()
// }
});

$('#adCol').on('click',function() {
	$('.n0').css('color','black');
})



