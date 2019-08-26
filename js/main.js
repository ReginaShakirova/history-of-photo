function sendform() {

if (document.forms[0].name.value == "") {
alert('Пожалуйста, заполните все поля');
document.mailform.name.focus();
return false
}

if (document.forms[0].email.value == "") {
alert('Пожалуйста, введите электронный адрес');
document.mailform.email.focus();
return false
}

return true;
}

function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (!valid) {
    	alert('Некорректно введен email');
    	return false;
    }
    	/*output = 'Адрес эл. почты введен правильно!';
    }
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message').innerHTML = output;*/
    return true;
}
function message() {
	alert("Данный сайт работает без серверной части, поэтому отправка формы не будет осуществлена.");
}
/*<form action="/cgi-bin/formmail.cgi" onsubmit="return sendform();">

Ваше имя: *<input type="text" name="name"><br>
Электронный адрес: *<input type="text" name="email"><br>
Тема сообщения: <input type="text" name="subject"><br>
Сообщение: <textarea name="message"></textarea><br><br>

<input type="submit" value="Отправить">
<input type="reset" value="Очистить">

</form>
function sendform() {

if (document.forms[0].name.value == "") {
alert('Пожалуйста, введите Ваше имя');
document.mailform.name.focus();
return false
}

if (document.forms[0].email.value == "") {
alert('Пожалуйста, введите электронный адрес');
document.mailform.email.focus();
return false
}

return true;
}

*/