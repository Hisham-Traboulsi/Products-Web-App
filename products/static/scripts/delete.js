$(document).on('click', '.delete_function', function(e){
    e.preventDefault();
    console.log('In the method');
    //li_id = parseInt($('.products_list ul li:last-child a').attr('id'))+1;
    //add ajax to delete the data send the url and then add the view, brrrrrrrap
      product_id = $(this).attr('id')
      $.ajax({
        type: 'DELETE',
        url: '/products/product/delete/'+product_id,
        headers: {
            'X-CSRFTOKEN': $("[name=csrfmiddlewaretoken]").val(),
          },
        data: {
          id: product_id,
        },
        success:function(){
          console.log(product_id);
          $('#'+product_id).remove();


          if($('.products_list ul li').length == 0){
            $('.products_list').append("<p class='no_products'>No products available</p>");
          }
        },
        error : function(xhr,errmsg,err) {
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        },
      });
});
