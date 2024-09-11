// 상품 데이터를 저장하는 배열
const products = Array.from({ length: 100 }, (_, i) => ({
    rank: i + 1,
    imageSrc: `./images/${(i % 10) + 1}.jpg`, // 로드한 이미지들 순서대로 반복 사용
    name: `상품명 ${i + 1}`,
    brand: '브랜드명',
    originalPrice: (Math.floor(Math.random() * 100) + 1) * 10000, // 랜덤 원가 설정
    discountedPrice: (Math.floor(Math.random() * 100) + 1) * 10000 * 0.8, // 원가에서 20% 할인된 가격
    discount: '20%',
    reviews: `리뷰 ${Math.floor(Math.random() * 500)}개`
}));

let loadedProducts = 0;
const productsPerLoad = 10;

// 상품 목록을 동적으로 추가하는 함수
function loadProducts() {
    const productList = document.getElementById('product-list');

    // 5개씩 묶어서 row 생성
    let row;
    for (let i = loadedProducts; i < Math.min(loadedProducts + productsPerLoad, products.length); i++) {
        if (i % 5 === 0) {
            row = document.createElement('div');
            row.className = 'row justify-content-center mb-4';
            productList.appendChild(row);
        }

        const product = products[i];
        const productItem = document.createElement('div');
        productItem.className = 'col-6 col-md-4 col-lg-2 mb-4';

        productItem.innerHTML = `
            <div class="product-item border p-3">
                <div class="product-rank">${product.rank}</div>
                <img src="${product.imageSrc}" class="img-fluid mb-2" alt="상품 이미지">
                <h5 class="product-name">${product.name}</h5>
                <p class="product-brand">${product.brand}</p>
                <p class="product-price"><span class="original-price">${product.originalPrice.toLocaleString('ko-KR')}원</span> <span
                        class="discounted-price text-danger">${product.discountedPrice.toLocaleString('ko-KR')}원</span></p>
                <p class="product-discount">${product.discount}</p>
                <p class="product-reviews">${product.reviews}</p>
            </div>
        `;

        row.appendChild(productItem);
    }

    loadedProducts += productsPerLoad;
}

// 스크롤이 페이지 하단에 도달했을 때 더 많은 상품을 로드하는 함수
function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadProducts();
    }
}

// 페이지가 로드될 때 처음 10개의 상품을 로드
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    window.addEventListener('scroll', handleScroll);
});
