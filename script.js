function updateTime() {
    const now = new Date();

    // 转换为北京时间 (Asia/Shanghai)
    const beijingTime = now.toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // 使用 24 小时制
    });

    // 格式化时间
    const formattedTime = beijingTime.replace(/\//g, '-').replace(/\s+/g, ' ');

    document.getElementById('time').textContent = formattedTime;
}

// 每秒更新时间
setInterval(updateTime, 1000);

// 页面加载时立即更新一次
updateTime();
