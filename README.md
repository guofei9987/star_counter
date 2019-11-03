# star_counter
Count a GitHub user's total stars and forks  

<a href="http://guofei9987.github.io/star_counter/main.html" target="demo2">demo</a>  

input the github id you want to count, and click the `Calculate` button

## Use on your website
paste this on your website
```html
<script>
    function func_1() {
        document.getElementById("star_counter").innerHTML = 'If not print for seconds, please refresh';
        github_id = document.getElementById("user").value;
        document.getElementById("star_counter").innerHTML = cal_github_star(github_id);
    }
</script>


Input github id: <input name="user" value="guofei9987" type="text" id="user">
<input name="Button" type="button" value="Calculate" onClick="func_1()">

<p id="star_counter"></p>
```
