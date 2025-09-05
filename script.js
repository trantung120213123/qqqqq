document.getElementById('getKeyBtn').addEventListener('click', async function() {
    this.disabled = true;
    this.innerHTML = '<span class="btn-icon">⏳</span> Đang tạo key...';
    
    try {
        const response = await fetch('https://qqwq-4.onrender.com/get-key', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const data = await response.json();
        
        if (data.success) {
            document.getElementById('keyText').textContent = data.key;
            document.getElementById('keyContainer').style.display = 'block';
            
            document.getElementById('statusMessage').className = 'status success';
            document.getElementById('statusMessage').textContent = 
                `Key đã được tạo! Key có hiệu lực đến: ${new Date(data.expires).toLocaleString('vi-VI')}`;
        } else {
            document.getElementById('statusMessage').className = 'status error';
            document.getElementById('statusMessage').textContent = data.message || 'Có lỗi xảy ra khi tạo key';
        }
    } catch (error) {
        document.getElementById('statusMessage').className = 'status error';
        document.getElementById('statusMessage').textContent = 'Không thể kết nối đến server';
    } finally {
        this.disabled = false;
        this.innerHTML = '<span class="btn-icon">🎮</span> Lấy Key';
    }
});

document.getElementById('copyKeyBtn').addEventListener('click', function() {
    const keyText = document.getElementById('keyText').textContent;
    navigator.clipboard.writeText(keyText).then(() => {
        const statusMessage = document.getElementById('statusMessage');
        statusMessage.className = 'status success';
        statusMessage.textContent = 'Key đã được sao chép vào clipboard!';
    });
});
