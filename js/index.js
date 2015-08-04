var str = '<a href="%url%" class="tree_flexContainer">' +
    '<img class="tree_flexItem" src="%imgUrl%" alt="%name%">' +
    '<div class="tree_flexItem">' +
    '<div class="tree_projectInfoBox">' +
    '<h3>%name%</h3>' +
    '<h4>%author%</h4>' +
    '</div>' +
    '<h5 class="tree_projectInfo">%des%</h5>' +
    '</div>' +
    '</a>';

var evenStr = '<a href="%url%" class="tree_flexContainer">' +
    '<div class="tree_flexItem">' +
    '<div class="tree_projectInfoBox">' +
    '<h3>%name%</h3>' +
    '<h4>%author%</h4>' +
    '</div>' +
    '<h5 class="tree_projectInfo">%des%</h5>' +
    '</div>' +
    '<img class="tree_flexItem" src="%imgUrl%" alt="%name%">' +
    '</a>';

var projectBox = document.getElementById('J_project');

var projectList = [
    {
        name: 'MXC 博客',
        author: 'MXC',
        imgUrl: 'img/project/blog.jpg',
        des: '1号店用户体验中心(MXC)的博客，这里将汇集所有MXC成员的研究以及创新成果。',
        url: 'http://mxc.yhd.com/blog'
    },
    {
        name: 'bird 模板',
        author: '刘兵 吴頔 张晶晶 周仙保 王贝贝',
        imgUrl: 'img/project/bird.jpg',
        des: 'bird是一个小而美的H5创意平台。通过简单可视化操作即可进行HTML5宣传页面制作,通过bird的模板,轻松制作场景应用,开启营销之门。',
        url: 'http://120.132.50.71/wxms/'
    },
    {
        name: '竞品分析',
        author: '王镭 许传颖  刘茵竺 赵芝晴',
        imgUrl: 'img/project/jp.jpg',
        des: '你想快速的看到1号店和淘宝，天猫，京东的界面差异么？你想快速知道主流电商在功能页面的细节差异么？竞品分析网站帮你抓获最新的App界面，让你一览全局。',
        url: 'http://192.168.8.166/ca/'
    }, {
        name: 'Straw 字体抽取',
        author: '吴迪 成克彬 刘兵',
        imgUrl: 'img/project/straw.jpg',
        des: 'Straw是一款字体抽取工具，能按需压缩数MB的字体可被压成几十KB的字体文件，简单可靠 完全基于 CSS 规则，无需 js 与服务端辅助，自动转码：支持 IE 与标准化的浏览器 良好体验摆脱图片文本，支持选中、搜索、翻译、朗读、缩放。',
        url: 'http://192.168.8.166:8989/'
    }
];

drawList(projectList);


function drawList(data) {
    var html = '';
    if (data.length > 0) {
        data.forEach(function (o, i) {
            if (i % 2 == 0) {
                html += str.replace(/(%(\w+)%)/g, function ($1, $2, $3) {
                    return o[$3] ? o[$3] : '';
                });
            } else {
                html += evenStr.replace(/(%(\w+)%)/g, function ($1, $2, $3) {
                    return o[$3] ? o[$3] : '';
                });
            }

        });
    }
    projectBox.innerHTML = '';
    projectBox.innerHTML = html;

}

new Vivus('tree_bg', {
    type: 'async',
    duration: 50,
    start:'autostart',
    file: './img/tree_bg.svg'
}, function (svg) {
    var el = svg.el;
    var paths = el.getElementsByClassName('cls-4');
    paths = [].slice.call(paths);
    paths.forEach(function (path) {
        path.setAttribute('class', 'cls-4 cls-4-hover animated fadeIn');
    });
});
