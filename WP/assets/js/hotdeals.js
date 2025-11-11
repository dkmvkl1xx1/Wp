// Khởi tạo hiệu ứng AOS
AOS.init({
    duration: 1000,
    once: true
});

// Bộ lọc danh mục
$('.filter-btn').on('click', function() {
    const category = $(this).data('category');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if (category === 'all') {
        $('.deal-card').fadeIn(400);
    } else {
        $('.deal-card').fadeOut(400);
        $(`.deal-card[data-category="${category}"]`).fadeIn(400);
    }
});
