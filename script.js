
$(window).ready(function () {
	let i = 0;
	let j = 0;
	let arr = ['red', 'pink', 'purple', 'light_blue', 'light_aqua', 'navy_yellow'];
	$("#but").on('click', function () {

		let rand = Math.floor(Math.random() * arr.length);
		let text = $('.getting_text').val();

    // $('#list').append(`<li class=${arr[rand]}><div><input  class="class_input_checkbox" type="checkbox"></div><div>${text}</div></li>`)
		$('#list').append('<li class="' + arr[rand] + '">' + '<div class="cl1"><input class="class_input_checkbox" type="checkbox"></div>' + '<span class="sp">' + text + '</span>' + '</li>');
		// $('div.cl1:last').addClass('cdiv' + j);
		// $('span:last').addClass('cspan' + i);


		$('.cspan' + i).addClass(arr[rand]);
		$('.cdiv' + j).addClass(arr[rand]);
		$('.getting_text').val('');
		i++;
		j++;
	});
	$('body').on('click', '.class_input_checkbox', function () {
		if ($('.class_input_checkbox').is(':checked')) {
			ColorEdit();
		}

	})
	function ColorEdit() {


		$('.ccr').on('click', function () {
			$('input[type=checkbox]:checked').each(function (index, value) {
				$(this).parent().parent().css('background-color', '#fc6262');
				
			});
		})

		$('.ccb').on('click', function () {
			$('input[type=checkbox]:checked').each(function (index, value) {
				$(this).parent().parent().css('background-color', '#ff80d7');
			})

		})

		$('.ccp').on('click', function () {
			$('input[type=checkbox]:checked').each(function (index, value) {
				$(this).parent().parent().css('background-color', '#8d55a3');
				
			});
		})

		$('.ccl_b').on('click', function () {
			$('input[type=checkbox]:checked').each(function (index, value) {
				$(this).parent().parent().css('background-color', '#4d7ee8');
			})

		})

		$('.ccl_a').on('click', function () {
			$('input[type=checkbox]:checked').each(function (index, value) {
				$(this).parent().parent().css('background-color', '#4ebdd9');
				
			});
		})

		$('.ccn_y').on('click', function () {
			$('input[type=checkbox]:checked').each(function (index, value) {
				$(this).parent().parent().css('background-color', '#cfca3c');
			})

		})
	
	}





})





//TEST TEST TEST

// $("#but").on('click', function(){

// let text = $('.getting_text').val();

// $('#list').append('<div> <input class="class_input_checkbox" type="checkbox"></input>' +text+ '</div>');

// });

// // function abc(){     
// //     if($("div .class_input_checkbox").prop("checked")) { 

// //         $("div").css('border', '1px solid red');

// // 	}
// // else {
// // 	$("div").css('border', '1px solid black');
// // }

// // }
// // $("div .class_input_checkbox").on('click', function() {
// // 	abc();
// // })

// $('.ch').on('click', function() {

// 	if($('.class_input_checkbox').prop('checked')) {
// 		alert(123)
// 	}
// })
// $('.unch').on('click', function() {
// 	$('.class_input_checkbox').prop('checked', false)
// })





