 <?php
$name_in_form = $_POST['first_name'];
$auto_name = $_POST['auto_name'];
$size = $_POST['size_in_auto'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$images = $_POST['files'];
$imagename = $_FILES['files']['name'];
$imagetype = $_FILES['files']['type'];
$imageerror = $_FILES['files']['error'];
$imagetemp = $_FILES['files']['tmp_name'];
$imagesize = $_FILES['files']['size'];

if($_FILES["files"]["size"] > 1024*3*1024)
   {
    echo ("Размер файла превышает три мегабайта");
    exit;
   }

   if(is_uploaded_file($_FILES["files"]["tmp_name"]))
   {
   	$imagename = $_FILES['files']['name'] = "$name_in_form "."$auto_name";
    move_uploaded_file($_FILES["files"]["tmp_name"], "images/".$_FILES["files"]["name"]);
    echo("Файл загружен! ");
   } else {
      echo("Ошибка загрузки фотографии! ");
   }

$text_file = fopen("form.txt", "at");
fwrite($text_file, 
	"\n'Имя пользователя: $name_in_form', 
'Автомобиль пользователя: $auto_name', 
'Диаметр руля: $size', 
'Почта пользователя: $email, 
'Номер пользователя: $phone'\n");
fclose($text_file);
echo " Сообщение успешно отправлено на сервер!";
?>
<script language="JavaScript" type="text/javascript">
	function changeurl(){eval(self.location="http://46.146.1.213/");}
	window.setTimeout("changeurl();",4000);
</script>
