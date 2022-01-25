<?php 
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
	
	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'stepuramasha1234@gmail.com';                 // Наш логин
	$mail->Password = 'cojmexvkguhqytip';                           // Наш пароль от ящика
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;            

	//От кого письмо
	$mail->setFrom('stepuramasha1234@gmail.com', 'Me');
	//Кому отправить
	$mail->addAddress('stepuramasha1234@outlook.com'); 
	//Тема письма
	$mail->Subject = 'Данные';

	//Тело письма
	$body = '<h1>Новый заказ</h1>';

	if(trim(!empty($_POST['name']))) {
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))) {
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['textmessage']))) {
		$body.='<p><strong>Сообщение:</strong> '.$_POST['textmessage'].'</p>';
	}

	$mail->Body = $body;

//Отправляем
	if(!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode( $response );
?>
