$(document).ready(function() {
	$('#button_submit').click(function() {
		
		var input = $('#input').val();
		token = 'trnsl.1.1.20190320T221215Z.3718b65ee72f6b66.ff9557612518fd15c5e6afafa6727817219645bd';
		api = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
		
		var sym = /[А-Яа-яёЁ]/;
		var language = (sym.test(input))? 'ru-en' : 'en-ru';
		
		var text = document.getElementById('input').value;
		
		if (sym.test(input)){
			document.getElementById('result').innerHTML = "Подождите..."
		}else{
			document.getElementById('result').innerHTML = "Wait..."
		}
		
		var url = api + '?key=' + token + '&text=' + text + '&lang=' + language
		
		var ajax = new XMLHttpRequest();
		ajax.open('GET', url, true);
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 4){
				if (ajax.status == 200){
					text = ajax.responseText;
					text = JSON.parse(text);
					text = text.text;
					document.getElementById('result').innerHTML = text;
						document.getElementById('P').innerHTML = 'Введите новый текст для перевода ниже:';
				}
			}
		};
		ajax.send(null);
	});
});
