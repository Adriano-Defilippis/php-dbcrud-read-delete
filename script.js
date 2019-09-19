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
                
                var target = $('#' + el.status +'');
           
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

    /* Richieseta inserimento dati */
    var new_price = prompt("Inserisci l'importo del pagamento");
    
    while (!new_price || isNaN(new_price)) {
        
        alert("E' richiesto un importo");
        new_price = prompt("Inserisci l'importo del pagamento");
    }


    /* Risalita per trovare il valore della categoria di 
    pagamento(rejected, pending, accepted) */
    var parent = $(this).parent();
    var gran_parent = parent.parent();
    var get_status = gran_parent.attr('id');

    /* CRUD di INSERT */
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

function setItem(){

    /* Estrapolazione valore attributo data id, che
    viene inviato come parametro della query attraverso 
    la chiamata ajax su php */
    var parent = $(this).parent();
    var id_ref = parent.data('id');

    /* Richiesta dati per modifica ad utente */
    var new_status = prompt('Nuovo stato pagamento: rejected, accepted, pending');

    while (!new_status) {
        
        alert("E' richiesto uno status, premi annulla per impostarlo");
        new_status = prompt('Nuovo stato pagamento: rejected, accepted, pending');
    }
    $.ajax({

        url: 'update_payment.php',
        method: "GET",
        data: {
            id: id_ref,
            status: new_status
        },

        success: function(data){

            getPagamenti();
        },

        error: function(){
            console.log("errore CRUD SET");
            
        }
    });


    
    
}

function init() {
    getPagamenti();

    $(document).on('click', '.pagamento #delete_btn', deleteItem);
    $(document).on('click', '.add_payment', addItem);
    $(document).on('click', '.set_btn', setItem);
   
}

$(document).ready(init);
