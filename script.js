
$(window).ready(function () {
	let i = 0;
	let j = 0;
	let arr = ['red', 'pink', 'purple', 'light_blue', 'light_aqua', 'navy_yellow'];
	$("#but").on('click', function () {

		let rand = Math.floor(Math.random() * arr.length);
		let text = $('.getting_text').val();

	
		$('#list').append('<li class="' + arr[rand] + '">' + '<div class="cl1"><input class="class_input_checkbox" type="checkbox"></div>' + '<span class="sp">' + text + '</span>' + '</li>');

		
		$('.getting_text').val('');
	
	});
	$('.button').on('click', function () {

		// const color =  $(this).attr('id')
		const color = $(this).css("background-color");
		const col = $(this).attr('class')
		
		console.log(color);
		console.log(col);
		$('input[type=checkbox]:checked').each(function (index, value) {
			$(this).parent().parent().css('background-color', color);
			// $(this).parent().parent().css('background-color', color);
			
		});
	})




})
