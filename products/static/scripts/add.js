  $(document).on('submit', '#add-product-form', function(e){
      e.preventDefault();
			if($('.products_list ul li').length == 0){
				var id = 1;
			}
			else{
				var id = parseInt($('.products_list ul li:last-child a').attr('id'))+1;
			}
      console.log('In the method');
      $.ajax({
        type: 'POST',
        url: '/products/product/add/',
				dataType: 'json',
		  headers: {
          'X-CSRFTOKEN': $("[name=csrfmiddlewaretoken]").val()
        },
        data:{
					product_id: id,
          product_name:$('#insert_name').val(),
          product_description:$('#insert_description').val(),
          product_price:$('#insert_price').val(),
        },
        success:function(data){
					console.log("Success");

					if($('.products_list ul li').length == 0){
							$('.products_list .no_products').remove();
							var result ="<li id = "+id+"> <a id ="+id+" class = 'fetch_function'>"+$('#insert_name').val()+"</a> <button class ='delete_function' type = 'button' name='Delete' id="+id+">Delete </button></li>";
						 	$('.products_list ul').append(result);
					}
					else {
							var result ="<li id = "+id+"> <a id ="+id+" class = 'fetch_function'>"+$('#insert_name').val()+"</a> <button class ='delete_function' type = 'button' name='Delete' id="+id+">Delete </button></li>";
							$('.products_list ul').append(result);
					}

				},
        error : function(xhr,errmsg,err) {
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        },
      });
    });
