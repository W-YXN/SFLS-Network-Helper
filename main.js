nw.Window.open('www/index.html', {}, function (win) { });
function addlog(log) {
    new window.Notification('提示', {
        body: log
    });
}//通知系统
addlog('苏外网络助手正在运行中！\nby WilliamYan, with ❤.');