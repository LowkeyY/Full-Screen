(function ($) {
    var result = {

        attendance: '<h3><strong><span style="font-size:24px">我的考勤</span></strong><br/></h3><p><span style="font-size:20px">1进入“我的考勤”模块。</span></p><p><span style="font-size:20px">2点击想要查看的课程列表</span></p><p></p><div class="media-wrap image-wrap"><img src="./images/page/attendanceList.png"/></div><p><span style="font-size:20px">3在考勤详情界面查看考勤情况</span></p><p></p><div class="media-wrap image-wrap"><img src="./images/page/attendanceDeatils.png"/></div><p></p>',

        achievement: '<h3><strong>我的成绩</strong></h3><p>1进入“我的考勤”模块</p><p></p><p></p><div class="media-wrap image-wrap"><img src="./images/page/achievementList.png"/></div><p></p><p>2点击想要查看的课程列表查看成各个资源的成绩</p><p></p><div class="media-wrap image-wrap"><img src="./images/page/attendanceDeatils.png"/>',

        consultation: '<h3><strong>我的老师</strong></h3><p>1进入“我的老师”模块</p><p></p><p></p><div class="media-wrap image-wrap"><img src="./images/page/teachers.png"/></div><p></p><p>2点击想要联系的老师列表上的“发消息”按钮进入聊天界面</p><p></p><p></p>',

        set: '<h3><strong>编辑个人信息</strong></h3><p>1点击“首页”右上角头像进入个性信息界面。</p><p></p><div class="media-wrap image-wrap"><img src="./images/page/set.png"/></div><p></p><p>2点击“铅笔”图标按钮进入编辑界面。</p><p>3点击头像选择一张图片后完成修改头像。</p><p></p><p></p>',

        clean: '<h3><strong>清理缓存</strong></h3><p>1点击“设置”进入设置界面</p><p></p><p></p><div class="media-wrap image-wrap"><img src="./images/page/clean.png"/></div><p></p><p>2点击“清理缓存”，清除使用过程中产生的缓存文件。</p><p></p><p></p><p></p>',

        update: '<h3><strong>版本信息</strong></h3><p>1点击“设置”进入设置界面</p><p></p><p></p><div class="media-wrap image-wrap"><img src="./images/page/clean.png"/></div><p></p><p>2点击“版本信息，查看app是否需要升级。</p><p></p><p></p><p></p>',

        opinion: '<h3><strong>意见反馈</strong></h3><p>1在“设置”界面点击“意见反馈”进入反馈界面</p><p></p><p></p><div class="media-wrap image-wrap"><img src="./images/page/opinion.png"/></div><p></p><p>2按要求填写表单后，点击提交按钮提交反馈。</p><p></p><p>3点击右上角“我的反馈”查看自己提交的反馈及平台的回复情况</p></p>\'',
        gkAchievement:'<h3><strong>我的成绩</strong></h3><p>1进入“我的考勤”模块</p><p></p><p></p><div class="media-wrap image-wrap"><img src="./images/page/achievementList.png"/></div><p></p><p>2点击想要查看的课程列表查看成各个资源的成绩</p><p></p><div class="media-wrap image-wrap"><img src="./images/page/attendanceDeatils.png"/>',

    };

    $.getUrlParam = function (name) { //扩展JQuery获取参数
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    };
    var goBack = $('#goBack');

    goBack.on('click', function () {
        window.location.href = '/cnvhelp/bk/index.html?index=3';
    });
    var Page = function (type) {
        this.type = type;

    };
    Page.prototype.render = function () {
        var content = $('.content');
        content.html(result[this.type]);
    };

    var renderPage = new Page($.getUrlParam('type'));
    renderPage.render();
})(jQuery);

