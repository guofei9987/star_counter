<html>
<head>
    <script src="star_counter.js"></script> <!--引用js代码-->
    <script>
        function func_1(){
	document.getElementById("demo").innerHTML = 'Please wait for seconds';
	github_id =	document.getElementById("user").value;
	document.getElementById("demo").innerHTML = func(github_id);
}

    </script>
</head>

<body>

Input github id: <input name="user" value="guofei9987" type="text" id="user">
<input name="Button" type="button"  value="Calculate" onClick="func_1()">

<p id="demo"></p>

</body>
</html>