<?php
include('conexao.php');
//error_reporting(0);
$ar=[];
$con= mysqli_query($conexao,"select *from clientes where LOCATE('$_POST[nome]',Nome)");
while($num=mysqli_fetch_assoc($con)){
    array_push($ar,"<li><h1>".$num['Nome']."</h1></li>");
}  
echo json_encode($ar);
/*for($v=0;$v<=sizeof($ar);$v++){ 
    $tes=(INT)$ar[$v]+rand(1,10);
    $con1= "UPDATE `testekaike` SET `valor` = '$tes' WHERE `testekaike`.`cliente` = $id[$v]";
    if($conexao->query($con1)===true){}    
}
echo json_encode("O valor do primeiro é :{$ar[0]} O valor do segunro é $ar[1] o terceiro $ar[2]");
*/

exit();
//


exit();

//$numero = (int)$_POST['numero']+1;
$enviarretorno = new \stdClass();
$enviarretorno->idativ = [];
$enviarretorno->mundo = [];
array_push($enviarretorno->idativ, '45');
array_push($enviarretorno->idativ, '48');
array_push($enviarretorno->mundo, '874');
//echo json_encode($enviarretorno);


exit();
gravar($enviarretorno);
function gravar($quantidade){
    $arquivo = "relatorio.txt";
    $fp = fopen($arquivo, "a+");
    fwrite($fp, $quantidade);
    fclose($fp);
    echo json_encode("{$quantidade}");
}
?>