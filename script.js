function printData(data, target){

    var source = $('#pagamenti_template').html();
    var template= Handlebars.compile(source);

    var context = data;

    var html = template(context);
    target.append(html);
    
}

function getPagamenti() {
    
    $.ajax({

        url: 'pagamenti_api.php',
        method: "GET",

        success: function(data){

            var target;

            $('.pagamento').remove();

            for (let i = 0; i < data.length; i++) {
                const el = data[i];
                
                switch (el.status) {
                    case "rejected":
                        
                        target = $('.rejected');
                        break;

                    case "pending":

                        target = $('.pending');
                        break;    
            
                    case "accepted":

                        target = $('.accepted');
                        break;
                        
                    default:
                        break;
                }

                printData(el, target) 
            }
            
        },
        error: function(err){
            console.log("errore chiamata api Pagamenti");
            
        }
    });
}

function deleteItem(){

    var btn = $(this).parent();
    var id_item = btn.data('id');

    console.log(id_item);

    $.ajax({
        
        url: 'pagamenti_api_delete.php',
        method: "GET",
        data: {id: id_item},

        success: function(data){
            console.log(data);
            getPagamenti();
        },
        error: function(err){
            console.log("errore delete items");
            
        }

    });
    
}


function init() {
    getPagamenti()

    $(document).on('click', '.pagamento #delete_btn', deleteItem)
   
}

$(document).ready(init);
