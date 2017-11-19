$(document).on('click', '.fetch_function', function(e){
    e.preventDefault();
    console.log('In the method');
    product_id = $(this).attr('id')
    $.ajax({
      type: 'GET',
      url: '/products/product/fetch/'+product_id,
      dataType: 'json',
      headers: {
          'X-CSRFTOKEN': $("[name=csrfmiddlewaretoken]").val(),
        },
      success:function(data){
        console.log(product_id);
        $('.update_form #product_id').val(product_id);
        $('.update_form #update_name').val(data[0].fields.name);
        $('.update_form #update_description').val(data[0].fields.description);
        $('.update_form #update_price').val(data[0].fields.price);
      },
      error : function(xhr,errmsg,err) {
          console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
      },
    });
});
