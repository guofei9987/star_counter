# star_counter
Count a GitHub user's total stars and forks  

# Click here
[star_counter](http://www.guofei.site/star_counter/main.html)  

input the github id you want to count, and click the `Calculate` button

## put the js on your website 
[demo](http://www.guofei.site/2019/08/31/github_star_counter.html)

paste this
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