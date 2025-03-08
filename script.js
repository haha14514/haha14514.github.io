function updateTime() {
    const now = new Date();
    const utcYear = now.getUTCFullYear();
    const utcMonth = String(now.getUTCMonth() + 1).padStart(2, '0');
    const utcDay = String(now.getUTCDate()).padStart(2, '0');
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSeconds = String(now.getUTCSeconds()).padStart(2, '0');

    // 转换为北京时间 (UTC+8)
    const beijingTime = new Date(Date.UTC(utcYear, parseInt(utcMonth) - 1, utcDay, parseInt(utcHours) + 8, utcMinutes, utcSeconds));
    const year = beijingTime.getFullYear();
    const month = String(beijingTime.getMonth() + 1).padStart(2, '0');
    const day = String(beijingTime.getDate()).padStart(2, '0');
    const hours = String(beijingTime.getHours()).padStart(2, '0');
    const minutes = String(beijingTime.getMinutes()).padStart(2, '0');
    const seconds = String(beijingTime.getSeconds()).padStart(2, '0');

    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = formattedTime;
}

// 每秒更新时间
setInterval(updateTime, 1000);

// 页面加载时立即更新一次
updateTime();
