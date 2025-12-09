// 导航栏汉堡菜单
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// 导航链接点击关闭菜单（移动端）
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// 技能分类切换
const categoryLinks = document.querySelectorAll('.category-list a');
const skillItems = document.querySelectorAll('.skill-item');

categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 移除所有分类的active状态
        categoryLinks.forEach(l => l.parentElement.classList.remove('active'));
        // 给当前点击的分类添加active状态
        this.parentElement.classList.add('active');
        
        // 滚动到对应的技能项
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 返回顶部按钮
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTop.style.display = 'inline-flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 技能进度条动画
const skillProgress = document.querySelectorAll('.skill-progress');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// 初始化进度条宽度为0
skillProgress.forEach(progress => {
    progress.style.width = '0';
});

function animateSkills() {
    skillProgress.forEach(progress => {
        if (isInViewport(progress.parentElement.parentElement)) {
            const targetWidth = progress.style.width;
            const originalWidth = progress.getAttribute('style').split('width: ')[1].split(';')[0];
            if (targetWidth !== originalWidth) {
                progress.style.width = originalWidth;
            }
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);