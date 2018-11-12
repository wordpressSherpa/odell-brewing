<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
<link href='http://fonts.googleapis.com/css?family=Raleway:700' rel='stylesheet' type='text/css'>
<style>
body{
	margin:0px;
	padding:20px;
	background-color:#f7ecde;	
	font-family: 'Raleway', sans-serif;
	color:#787878;
	font-size:14px;
	text-transform:uppercase;
}
</style>
</head>
<body>
<?php
$ready = true;
$to = '';
$from = '';
$subject = '';
$message = '';
if (isset($_GET['to'])){$to = $_GET['to'];};
if (isset($_GET['from'])){$from = $_GET['from'];};
if (isset($_GET['subject'])){$subject = $_GET['subject'];};
if (isset($_GET['message'])){$message = $_GET['message'];};

$html = '
<html>
<head>
  <title>'.$subject.'</title>
</head>
<body>
'.$message.'
</body>
</html>
';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'To: '.$to."\r\n";
$headers .= 'From: '.$from."\r\n";
if(($to != '')&&($from != '')){
	mail($to, $subject, $html, $headers);
	//echo $headers.'<br />';
	//echo $subject.'<br />';
	//echo $html.'<br />';
	echo 'thank you!';
}
?>
</body>
</html>