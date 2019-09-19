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

            

            $('.pagamento').remove();

            for (let i = 0; i < data.length; i++) {
                const el = data[i];
                
                var target = $('.' + el.status +'');
           
                printData(el, target); 
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

function addItem(){

    var new_price = prompt("Inserisci l'importo del pagamento");

    var parent = $(this).parent();
    var gran_parent = parent.parent();

    var get_status = gran_parent.attr('class');

    $.ajax({

        url: 'add_payment.php',
        method: "GET",
        data: { status: get_status,
                price:  new_price       
        },

        success: function(data){

            getPagamenti();
        },

        error: function(err){
            console.log("Errore api addItems in database");
            
        }
    });
    
}

function init() {
    getPagamenti();

    $(document).on('click', '.pagamento #delete_btn', deleteItem);
    $(document).on('click', '.add_payment', addItem);
   
}

$(document).ready(init);
