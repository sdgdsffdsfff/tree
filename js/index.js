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

var projectList = [
    {
        name:'MXC 博客',
        author:'MXC',
        imgUrl:'img/project/blog.jpg',
        des:'1号店用户体验中心(MXC)的博客，这里将汇集所有MXC成员的研究以及创新成果。',
        url:'http://mxc.yhd.com/blog'
    },
    {
        name: 'bird 微信模板',
        author: '刘兵 吴頔 张晶晶 周仙保 王贝贝',
        imgUrl: 'img/project/bird.jpg',
        des: 'bird是一个小而美的H5创意平台。通过简单可视化操作即可进行HTML5宣传页面制作,通过bird的模板,轻松制作场景应用,开启微信营销之门。'
    },
    {
        name: '竞品分析',
        author: '王镭 许传颖  刘茵竺 赵芝晴',
        imgUrl: 'img/project/jp.jpg',
        des: '电商APP竞品分析系统',
        url: 'http://192.168.8.166/ca/'
    }, {
        name: 'Straw 字体抽取',
        author: '吴迪 成克彬 刘兵',
        imgUrl: 'img/project/straw.jpg',
        des: 'Straw是一款字体抽取工具，能按需压缩数MB的字体可被压成几十KB的字体文件，简单可靠 完全基于 CSS 规则，无需 js 与服务端辅助，自动转码：支持 IE 与标准化的浏览器 良好体验摆脱图片文本，支持选中、搜索、翻译、朗读、缩放',
        url: 'http://192.168.8.166:8989/'
    }
];

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