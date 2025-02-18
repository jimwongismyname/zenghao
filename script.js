document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 已加载'); // 确认 DOMContentLoaded 事件触发
    const button = document.querySelector('.custom-button');
    const menu = document.querySelector('.menu');
    const closeButton = document.querySelector('.close-button');
    const loading = document.querySelector('.loading');
    const secondaryPage = document.querySelector('.secondary-page');
    const secondaryPageClose = document.querySelector('.secondary-page-close');

    
    if (button) {
        console.log('按钮元素已找到'); // 确认按钮元素存在
        button.addEventListener('click', function() {
            // 显示加载效果
            loading.style.display = 'block';
            // 模拟加载两秒
            setTimeout(function () {
                 // 隐藏加载效果
                 loading.style.display = 'none';
                // 显示菜单
                menu.classList.add('show');
            }, 2000);
        });
    } else {
        console.error('错误：未找到 .custom-button 元素！');
    }

    button.addEventListener('click', function () {
        // 模拟加载两秒
        setTimeout(function () {
            // 显示菜单
            menu.classList.add('show');
        }, 2000);
    });

    // 为关闭按钮添加点击事件
    closeButton.addEventListener('click', function () {
        menu.classList.remove('show');
    });

    const newButtons = document.querySelectorAll('.new-button');
    const faqPage = document.querySelector('.faq-page');
    const gotItBtn = document.querySelector('.got-it-btn');

    newButtons.forEach((newButton, index) => {
        newButton.addEventListener('click', function() {
            switch (index) {
                case 0:
                    {
                        // 显示购买记录页面
                        secondaryPage.classList.add('show');
                    }
                    break;
                case 1:
                    {
                        // 显示常见问题页面
                        faqPage.classList.add('show');
                    }
                    break;
            }
        });
    });

    // 为"我知道了"按钮添加点击事件
    gotItBtn.addEventListener('click', function() {
        faqPage.classList.remove('show');
    });

    // 为常见问题页面的关闭按钮添加点击事件
    const faqPageClose = faqPage.querySelector('.secondary-page-close');
    faqPageClose.addEventListener('click', function() {
        faqPage.classList.remove('show');
    });

    // 获取退款规则按钮和三级页面元素
    const refundRulesBtn = document.querySelector('.refund-rules-btn');
    const tertiaryPage = document.querySelector('.tertiary-page');
    const tertiaryPageClose = document.querySelector('.tertiary-page-close');

    // 点击退款规则按钮显示三级页面
    refundRulesBtn.addEventListener('click', () => {
        tertiaryPage.classList.add('show');
    });

    // 点击关闭按钮隐藏三级页面
    tertiaryPageClose.addEventListener('click', () => {
        tertiaryPage.classList.remove('show');
    });
});
