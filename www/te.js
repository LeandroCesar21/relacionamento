const bot = document.querySelector("button");
const imp = document.querySelector("input");
bot.addEventListener('click', pesquisar)
   console.log("tes")
/* adicionar intervalo setInterval(() => {
    alter()
}, 1000);*/
function pesquisar() {   
  
    var i=10   
    const add = document.querySelectorAll("li"); 
    const di = document.querySelector("ul"); 
    alert(imp.value.replace(" ",""))
 if(imp.value.length==0)
 return;
    var h1=[]
    var te = 0
   while (te < add.length) {
        add[te].remove()
        te++ 
   }
   $.ajax({
    url: 'teste.php',
    type: 'POST',
    data: {
        /* adiciona a variavel com o número a requisicao*/
         'nome': imp.value
    },
    dataType: 'json',
    success: function (data) {
         h1=data
         if(h1.length==0){
            alert("nao existe")
         }
         di.innerHTML += "<h1>teste</h1>"
         for (var x = 0; x < h1.length; x++) {
            di.innerHTML += ""+h1[x]+""

         }

    },
    error: function (request, error) {
        //   alert("Resultado: " + JSON.stringify(request));
    }
});
  
}
function alter() {
    const bod = document.querySelector("body")
    var idativ = [];
    $.ajax({
        url: 'teste.php',
        type: 'POST',
        data: {
            /* adiciona a variavel com o número a requisicao*/
            //  'numero': 4
        },
        dataType: 'json',
        success: function (data) {
            /* idativ = data['idativ']
             for (var x = 0; x < idativ.length; x++) {
                 bod.innerHTML += '<h1>O valor é ' + idativ[x] + ' </h1>'
             }
 */
            //    tex.innerText = data

        },
        error: function (request, error) {
            //   alert("Resultado: " + JSON.stringify(request));
        }
    });
}