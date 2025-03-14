document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các liên kết trong banner
    const bannerLinks = document.querySelectorAll('.banner a');
    const sections = document.querySelectorAll('.section');
    const monHocLinks = document.querySelectorAll('.mon-hoc-menu > ul > li > a');
    const chuongLinks = document.querySelectorAll('.chuong-menu > li > a');
    const contentLinks = document.querySelectorAll('.noi-dung-menu a');

    const contentArea = document.getElementById('content-area');
    const contentTitle = document.getElementById('content-title');
    const contentBody = document.getElementById('content-body');


    // Ẩn tất cả các sections (trừ section đầu tiên)
    sections.forEach(section => {
        if (section.id !== 'mon-hoc') {
            section.style.display = 'none';
        }
    });

    // Xử lý sự kiện click trên các liên kết trong banner
    bannerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

            const sectionId = this.dataset.section; // Lấy ID của section từ thuộc tính data-section

            // Ẩn tất cả các sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Hiển thị section tương ứng
            const sectionToShow = document.querySelector(`#${sectionId}`);
            if (sectionToShow) {
                sectionToShow.style.display = 'block';
            }
            contentArea.style.display = 'none';
        });
    });

    // Xử lý sự kiện click trên các môn học, hiển thị chương
    monHocLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            monHocLinks.forEach(link => {
                link.classList.remove('active'); // Loại bỏ lớp 'active' từ tất cả các liên kết
            });
            this.classList.add('active'); // Thêm lớp 'active' cho liên kết được nhấp
            contentArea.style.display = 'none';
        });
    });

        // Xử lý sự kiện click trên các chương, hiển thị nội dung
    chuongLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            chuongLinks.forEach(link => {
                link.classList.remove('active'); // Loại bỏ lớp 'active' từ tất cả các liên kết
            });
            this.classList.add('active'); // Thêm lớp 'active' cho liên kết được nhấp
            contentArea.style.display = 'none';
        });
    });

    // Xử lý sự kiện click trên các nội dung chương
    contentLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

            const contentId = this.dataset.content; // Lấy ID nội dung từ thuộc tính data-content
            let title = '';
            let body = '';

            // Xác định nội dung dựa trên ID (bạn có thể thay đổi logic này)
            switch (contentId) {
                case 'chuong1-noi-dung':
                    title = 'Nội dung Chương 1';
                    body = '<p>Đây là nội dung chi tiết của chương 1.</p>';
                    break;
                case 'chuong1-bai-tap':
                    title = 'Bài tập Chương 1';
                    body = '<p>Danh sách các bài tập của chương 1.</p>';
                    break;
                case 'chuong1-luyen-tap':
                    title = 'Luyện tập Chương 1';
                    body = '<p>Các bài luyện tập để củng cố kiến thức chương 1.</p>';
                    break;
                case 'chuong2-noi-dung':
                    title = 'Nội dung Chương 2';
                    body = '<p>Đây là nội dung chi tiết của chương 2.</p>';
                    break;
                case 'chuong2-bai-tap':
                    title = 'Bài tập Chương 2';
                    body = '<p>Danh sách các bài tập của chương 2.</p>';
                    break;
                 // Thêm các case khác cho các nội dung khác

                default:
                    title = 'Nội dung không tìm thấy';
                    body = '<p>Nội dung không tìm thấy.</p>';
                    break;
            }
            contentTitle.textContent = title;
            contentBody.innerHTML = body;
            contentArea.style.display = 'block';
        });
    });
});
