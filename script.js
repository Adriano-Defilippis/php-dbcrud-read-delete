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
            console.log(data);

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




function init() {
    getPagamenti()

   
}

$(document).ready(init);
