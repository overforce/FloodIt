$(document).ready(function() {

	var grid = $('.grid')
	var cell
	var side = 16

	var row
	var col

	var topRow, bottomRow
	var topEl, rightEl, bottomEl, leftEl

	var act

	var clr

	var rnd

	var cellsArr = []




	for(var i = 1; i < side; i++){

		cellsArr.push([])

		grid.append('<tr class="row"></tr>')

		for(var k = 1; k < side; k++){

			rnd = Math.floor(Math.random()*4)

			rnd == 0 ? $(`tr:nth-child(${i})`).append('<td style="background-color:rgb(238, 66, 62)" class="cell"></td>') :
			rnd == 1 ? $(`tr:nth-child(${i})`).append('<td style="background-color:rgb(131, 110, 179)" class="cell"></td>') :
			rnd == 2 ? $(`tr:nth-child(${i})`).append('<td style="background-color:rgb(0, 173, 174)" class="cell"></td>') :
			rnd == 3 ? $(`tr:nth-child(${i})`).append('<td style="background-color:rgb(115, 191, 69)" class="cell"></td>') : false


			cellsArr[i-1].push($(`tr:nth-child(${i}) .cell:nth-child(${k})`))




		}
	}

	cell = $('.cell')


	cellsArr[0][0].addClass('active')

	$('body').css({'background-color' : `${cellsArr[0][0].css('background-color')}`})

	function find(elem){

		elem.each(function(){



			row = $(this).parent('.row').index()
			col = $(this).index()

			thisEl = cellsArr[row][col]

			thisRow = cellsArr[row]
			topRow = cellsArr[row-1]
			bottomRow = cellsArr[row+1]

			if(topRow != undefined) topEl = topRow[col]
			if(bottomRow != undefined) bottomEl = bottomRow[col]
			rightEl = thisRow[col+1]
			leftEl = thisRow[col-1]


			function check(el1,sideEl){
				if(el1 != undefined && sideEl.css('background-color') == thisEl.css('background-color')){
					sideEl.addClass('active')
				}
			}

			check(topRow,topEl)
			check(bottomRow,bottomEl)
			check(leftEl,leftEl)
			check(rightEl,rightEl)


		})

	}


	function change(){

		for(var i = 0; i < $('.active').length; i++){

			act = $('.active').length

			find($('.active'))

			if(act == $('.active').length){
				break
			}
		}
	}

	cell.click(function(){

		change()

		clr = $(this).css('background-color')
		$('.active').css({'background-color' : clr})

		$('body').css({'background-color' : `${clr}`})

	})


	$('.reset').click(function(){



		$('.active').removeClass('active')
		cellsArr[0][0].addClass('active')


		for(var i = 1; i < side; i++){

			for(var k = 1; k < side; k++){

				rnd = Math.floor(Math.random()*4)

				rnd == 0 ? cellsArr[i-1][k-1].css({'background-color' : 'rgb(238, 66, 62)'}) :
				rnd == 1 ? cellsArr[i-1][k-1].css({'background-color' : 'rgb(131, 110, 179)'}) :
				rnd == 2 ? cellsArr[i-1][k-1].css({'background-color' : 'rgb(0, 173, 174)'}) :
				rnd == 3 ? cellsArr[i-1][k-1].css({'background-color' : 'rgb(115, 191, 69)'}) : false

			}
		}

		setTimeout(() => {
			$('body').css({'background-color' : `${$('tr:nth-child(1) .cell:nth-child(1)').css('background-color')}`})
		}, 150);



	})

});
