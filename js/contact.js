// 联系表单提交处理
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止默认提交行为

    // 获取表单数据
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    // 表单验证
    if (!name.trim()) {
        alert('请输入您的姓名！');
        return;
    }

    if (!email.trim()) {
        alert('请输入您的邮箱！');
        return;
    }

    // 简单邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('请输入有效的邮箱地址！');
        return;
    }

    if (!subject) {
        alert('请选择留言主题！');
        return;
    }

    if (!message.trim()) {
        alert('请输入留言内容！');
        return;
    }

    // 模拟提交成功
    alert(`感谢 ${name} 的留言！\n主题：${getSubjectText(subject)}\n我会尽快通过邮箱 ${email} 回复您~`);
    
    // 重置表单
    contactForm.reset();
});

// 获取主题文本
function getSubjectText(value) {
    const subjectSelect = document.getElementById('contactSubject');
    for (let i = 0; i < subjectSelect.options.length; i++) {
        if (subjectSelect.options[i].value === value) {
            return subjectSelect.options[i].text;
        }
    }
    return value;
}

// 输入框实时验证
const formInputs = contactForm.querySelectorAll('input, select, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.required && !this.value.trim()) {
            this.style.borderColor = '#e74c3c';
            setTimeout(() => {
                this.style.borderColor = '#e0e6ed';
            }, 2000);
        } else if (this.type === 'email' && this.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
            this.style.borderColor = '#e74c3c';
            setTimeout(() => {
                this.style.borderColor = '#e0e6ed';
            }, 2000);
        } else {
            this.style.borderColor = '#3498db';
            setTimeout(() => {
                this.style.borderColor = '#e0e6ed';
            }, 1000);
        }
    });
});