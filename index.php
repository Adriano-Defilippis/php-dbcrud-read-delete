<!DOCTYPE html>
<html lang="" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">

    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>
    <!-- TEMPLATE: MESSAGE MENU -->
    <script id="pagamenti_template" type="text/x-handlebars-template">
      <ul class="pagamento" data-id="{{id}}">
        <li class="set_btn"><i>Modifica Scheda</i></li>
        <li>identificativo Pagamento: {{id}}</li>
        <li>Prezzo: {{price}}</li>
        <li>Status: {{status}}</li>
        <a id="delete_btn" type="button">DELETE</a>
      </ul>
      
    </script>

    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="style.css">
    <!-- JS: MY SCRIPT -->
    <script src="script.js" charset="utf-8"></script>
    <!-- IMG: ICON -->
    <link rel="shortcut icon" href="img/me_icon.gif">
    <title>CRUD</title>

    
  </head>


  <!-- BODY -->
  <body>

  <div class="container">

    <h1 class="title">Status Pagamenti</h1>
    <div class="wrapper">
      <div id="rejected">
        <h2>Status: RIGETTATO<span class="add_payment"> +</span></h2>
      </div>
      <div id="pending">
        <h2>Status: IN ATTESA<span class="add_payment"> +</span></h2>
      </div>
      <div id="accepted">
        <h2>Status: ACCETTATO<span class="add_payment"> +</span></h2>
      </div>
    </div>

  </div>
    
  
  </body>
</html>