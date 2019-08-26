function func(github_id) {
    //1. 读入数据
    //var github_id='guofei9987';
    var url = "https://api.github.com/users/" + github_id + "/repos?page=";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var a = JSON.parse(this.responseText);
            onePage.push(a);
        }
    };

    var Pages = [];
    for (var i = 1; i < 8; i++) {
        var onePage = [];
        xmlhttp.open("GET", url + i, false);
        xmlhttp.send();
        Pages = Pages.concat(onePage[0]);
        if (onePage[0].length == 0) {
            break;
        }
    }


    //2. 提取信息
    repo_list = []
    for (var j = 0; j < Pages.length; j++) {
        if (!Pages[j]['fork']) {//排除fork别人的库
            repo_list.push({
                name: Pages[j]['name'],
                stargazers_count: Pages[j]['stargazers_count'],
                forks_count: Pages[j]['forks_count']
            });
        }
    }


    //排序
    repo_list.sort(function (a, b) {
        return a.stargazers_count - b.stargazers_count
    });
    repo_list.reverse();

    //展示:表头
    table_th = '<table border="1">' +
        '<caption> User:' + github_id + '</caption>' +
        '<tr>' +
        '<th>Repository Name</th>' +
        '<th>stars</th>' +
        '<th>forks</th>' +
        '</tr>'

    table_td = ''
    total_rep = [0, 0]
    for (i = 0; i < repo_list.length; i++) {
        table_td +=
            '<tr>' +
            '<td>' + repo_list[i].name + '</td>' +
            '<td>' + repo_list[i].stargazers_count + '</td>' +
            '<td>' + repo_list[i].forks_count + '</td>' +
            '</tr>';
        total_rep[0] += repo_list[i].stargazers_count;
        total_rep[1] += repo_list[i].forks_count;
    }



    output = table_th +
        '<tr>' +
        '<th>Totally</th>' +
        '<th>' + total_rep[0] + '</th>' +
        '<th>' + total_rep[1] + '</th>' +
        '</tr>' +
        table_td +
        '</table>';
    return output;
}