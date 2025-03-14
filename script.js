document.addEventListener('DOMContentLoaded', function() {
    // Lắng nghe sự kiện click trên các liên kết trong menu nội dung
    const contentLinks = document.querySelectorAll('.noi-dung-menu a');
    const contentArea = document.getElementById('content-area');

    contentLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

            const contentId = this.dataset.content; // Lấy ID nội dung từ thuộc tính data-content
            let content = '';

            // Xác định nội dung dựa trên ID (bạn có thể thay đổi logic này)
            switch (contentId) {
                case 'chuong1-noi-dung':
                    content = '<h2>Nội dung Chương 1</h2><p>Đây là nội dung chi tiết của chương 1.</p>';
                    break;
                case 'chuong1-bai-tap':
                    content = '<h2>Bài tập Chương 1</h2><p>Danh sách các bài tập của chương 1.</p>';
                    break;
                case 'chuong1-luyen-tap':
                    content = '<h2>Luyện tập Chương 1</h2><p>Các bài luyện tập để củng cố kiến thức chương 1.</p>';
                    break;
                case 'chuong2-noi-dung':
                    content = '<h2>Nội dung Chương 2</h2><p>Đây là nội dung chi tiết của chương 2.</p>';
                    break;
                case 'chuong2-bai-tap':
                    content = '<h2>Bài tập Chương 2</h2><p>Danh sách các bài tập của chương 2.</p>';
                    break;
                    case 'chuong3-noi-dung':
                    content = '<h2>Nội dung Chương 3</h2><p>Đây là nội dung chi tiết của chương 3.</p>';
                    break;
                case 'chuong3-bai-tap':
                    content = '<h2>Bài tập Chương 3</h2><p>Danh sách các bài tập của chương 3.</p>';
                    break;
                    case 'chuong4-noi-dung':
                    content = '<h2>Nội dung Chương 4</h2><p>Đây là nội dung chi tiết của chương 4.</p>';
                    break;
                case 'chuong4-bai-tap':
                    content = '<h2>Bài tập Chương 4</h2><p>Danh sách các bài tập của chương 4.</p>';
                    break;
                    case 'chuong5-noi-dung':
                    content = '<h2>Nội dung Chương 5</h2><p>Đây là nội dung chi tiết của chương 5.</p>';
                    break;
                case 'chuong5-bai-tap':
                    content = '<h2>Bài tập Chương 5</h2><p>Danh sách các bài tập của chương 5.</p>';
                    break;
                    case 'chuong6-noi-dung':
                    content = '<h2>Nội dung Chương 6</h2><p>Đây là nội dung chi tiết của chương 6.</p>';
                    break;
                case 'chuong6-bai-tap':
                    content = '<h2>Bài tập Chương 6</h2><p>Danh sách các bài tập của chương 6.</p>';
                    break;
                    case 'chuong7-noi-dung':
                    content = '<h2>Nội dung Chương 7</h2><p>Đây là nội dung chi tiết của chương 7.</p>';
                    break;
                case 'chuong7-bai-tap':
                    content = '<h2>Bài tập Chương 7</h2><p>Danh sách các bài tập của chương 7.</p>';
                    break;

                // Thêm các case khác cho các nội dung khác

                default:
                    content = '<p>Nội dung không tìm thấy.</p>';
                    break;
            }

            // Hiển thị nội dung trong khu vực nội dung
            contentArea.innerHTML = content;
        });
    });
});
