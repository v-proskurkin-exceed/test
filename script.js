
$(window).ready(function() {
	
	$("#but").on('click', function(){
		let arr = ['red','pink','purple','light_blue','light_aqua','navy_yellow'];
		let rand = Math.floor(Math.random() * arr.length);
		let text = $('.getting_text').val();
		
		$('#list').append('<li><div class="cl1"><input class="class_input_checkbox" type="checkbox"></div>'+'<span>'+ text + '</span>'+'</li>');
		$('span:last').addClass(arr[rand]);
		$('.cl1:last').addClass(arr[rand]);
		$('.getting_text').val('');
	});


})
// let arr = ['red','pink','purple','light_blue','light_aqua','navy_yellow'];
// 	let rand = Math.floor(Math.random() * arr.length);
// $('sp').addClass('sp '+arr[rand])




