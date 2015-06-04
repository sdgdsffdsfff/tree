var str = '<div class="tree_project">' +
    '<a href="%url%" class="tree_projectBox">' +
    '<img class="tree_projectImg" src="%imgUrl%" alt="%name%" />' +
    '<div class="tree_projectSynopsis">' +
    '<h3>%name%</h3>' +
    '<h5>%author%</h5>' +
    '<h4>%des%</h4>' +
    '</div>' +
    '</a>' +
    '</div>';

var projectBox = document.getElementById('J_project');

var projectList = [{
    name: '叶子',
    author: '刘兵 施峰峰 董亦颂',
    imgUrl: '/img/project/leaf.jpg',
    des: '超好用的工作流平台',
    url: 'http://192.168.112.94:9001/'
}];

drawList(projectList);

var fuse = new Fuse(projectList, {
    keys: ['name']
});

var treeSearch = document.getElementById('J_search');



treeSearch.addEventListener('input', function (e) {
    var q = treeSearch.value;
    if (q == '') {
        drawList(projectList);
    } else {
        var data = fuse.search(q);
        drawList(data);
    }
}, false);

function drawList(data) {
    var html = '';
    if (data.length > 0) {
        data.forEach(function (o, i) {
            html += str.replace(/(%(\w+)%)/g, function ($1, $2, $3) {
                return o[$3] ? o[$3] : '';
            });
        });
    }
    projectBox.innerHTML = '';
    projectBox.innerHTML = html;

}