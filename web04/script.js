let bg = document.getElementById('bg');            
let moon = document.getElementById('moon');
let words = document.getElementById('words');        
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');        
let text = document.getElementById('text');        
// 抓取HTML的元素


const sections = document.querySelectorAll('section');
// 抓取所有區塊
const desktopLinks = document.querySelectorAll('#desktop-nav .nav-link');
// 抓取「桌面版」導覽列裡面的連結



// 監聽滾動事件
window.addEventListener('scroll', function () {
    let value = window.scrollY; // 取得目前往下滾動多少像素
    let screenHeight = window.innerHeight; // 抓取目前螢幕的高度

    // 滾動距離 (value) 乘以不同的小數點
    bg.style.top = value * 0.5 + 'px';           
    moon.style.left = -value * 1 + 'px';      
    words.style.top = value * 0.3 + 'px'; 
    mountain.style.top = -value * 0.15 + 'px';   
    road.style.top = value * 0.15 + 'px';        
    text.style.top = value * 1 + 'px';        
    //目前嘗試在螢幕變窄時把月亮往中間移 尚找不到解決方法


    // 檢查每個區塊位置
    sections.forEach(section => {
        const sectionTop = section.offsetTop; // 區塊距離頂部的高度
        const sectionHeight = section.clientHeight; // 區塊本身的高度
        
        // 如果目前滾動的位置進入了這個區塊的範圍
        if (window.scrollY >= sectionTop - 150) {
            currentSectionId = section.getAttribute('id'); // 取得 ID，例如 "About"
        }
    });

    //active 樣式
    desktopLinks.forEach(link => {
        link.classList.remove('active'); // 先把區塊高亮取消
        // 檢查目前連結的 href (例如 #About) 是否對應目前的區塊 ID
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active'); // 對應到則加上高亮
        }
    });
});


// 抓取手機版選單內容的容器
const mobileMenuContent = document.getElementById('mobileMenuContent');
// 抓取手機版選單裡面的所有連結
const mobileLinks = document.querySelectorAll('#mobileMenuContent .nav-link');

// 如果手機選單存在 (避免報錯)，設定點擊事件
if (mobileMenuContent) {
    // 建立一個 Bootstrap 的折疊控制器
    const bsCollapse = new bootstrap.Collapse(mobileMenuContent, {toggle: false});

    // 對每一個手機連結設定「點擊」監聽
    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            bsCollapse.hide(); // 只要點了連結，就命令選單「收起來」
        });
    });
}