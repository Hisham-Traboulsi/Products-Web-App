$(document).on('submit', '#update-product-form', function(e){
    e.preventDefault();
    product_id = $('#product_id').val();
    update_name = $('.update_form #update_name').val(),
    console.log(product_id);
    console.log('In the method');
    $.ajax({
      type: 'PUT',
      url: '/products/product/update/'+product_id,
      dataType: 'json',
      headers:{
          'X-CSRFTOKEN': $("[name=csrfmiddlewaretoken]").val(),
      },
      data:{
        product_name: update_name,
        product_description: $('.update_form #update_description').val(),
        product_price: $('.update_form #update_price').val(),
      },
      success: function(){
        console.log("Success");
        $('.products_list ul #'+product_id+ ' a').text(update_name);
      },
      error : function(xhr,errmsg,err) {
          console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
      },
    });
  });
