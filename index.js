// 상품 데이터를 저장하는 배열
const products = [
    {
        rank: 1,
        imageSrc: './images/rice.jpg',
        name: '상품명 1',
        brand: '브랜드명',
        originalPrice: 150000,
        discountedPrice: 120000,
        discount: '20%',
        reviews: '리뷰 50개'
    },
    {
        rank: 2,
        imageSrc: './images/1.jpg',
        name: '상품명 2',
        brand: '브랜드명',
        originalPrice: 280000,
        discountedPrice: 210000,
        discount: '25%',
        reviews: '리뷰 150개'
    },
    {
        rank: 3,
        imageSrc: './images/2.jpg',
        name: '상품명 3',
        brand: '브랜드명',
        originalPrice: 250000,
        discountedPrice: 200000,
        discount: '20%',
        reviews: '리뷰 75개'
    },
    {
        rank: 4,
        imageSrc: './images/3.jpg',
        name: '상품명 4',
        brand: '브랜드명',
        originalPrice: 800000,
        discountedPrice: 600000,
        discount: '25%',
        reviews: '리뷰 200개'
    },
    {
        rank: 5,
        imageSrc: './images/4.jpg',
        name: '상품명 5',
        brand: '브랜드명',
        originalPrice: 750000,
        discountedPrice: 525000,
        discount: '30%',
        reviews: '리뷰 120개'
    },
    {
        rank: 6,
        imageSrc: './images/5.jpg',
        name: '상품명 6',
        brand: '브랜드명',
        originalPrice: 650000,
        discountedPrice: 487500,
        discount: '25%',
        reviews: '리뷰 180개'
    },
    {
        rank: 7,
        imageSrc: './images/6.jpg',
        name: '상품명 7',
        brand: '브랜드명',
        originalPrice: 920000,
        discountedPrice: 690000,
        discount: '25%',
        reviews: '리뷰 300개'
    },
    {
        rank: 8,
        imageSrc: './images/7.jpg',
        name: '상품명 8',
        brand: '브랜드명',
        originalPrice: 1200000,
        discountedPrice: 960000,
        discount: '20%',
        reviews: '리뷰 50개'
    },
    {
        rank: 9,
        imageSrc: './images/8.jpg',
        name: '상품명 9',
        brand: '브랜드명',
        originalPrice: 1500000,
        discountedPrice: 1050000,
        discount: '30%',
        reviews: '리뷰 75개'
    },
    {
        rank: 10,
        imageSrc: './images/9.jpg',
        name: '상품명 10',
        brand: '브랜드명',
        originalPrice: 2000000,
        discountedPrice: 1400000,
        discount: '30%',
        reviews: '리뷰 100개'
    }
];

// 상품 목록을 동적으로 추가하는 함수
function loadProducts(filteredProducts = products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // 기존 상품 목록 초기화

    // 5개씩 묶어서 row 생성
    let row;
    filteredProducts.forEach((product, index) => {
        // 새로운 row를 시작할 때마다 생성
        if (index % 5 === 0) {
            row = document.createElement('div');
            row.className = 'row justify-content-center mb-4';
            productList.appendChild(row);
        }

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
    });
}

// 필터링된 상품 목록을 로드하는 함수
function filterProducts(maxPrice) {
    let filteredProducts;
    if (maxPrice === 300000) {
        filteredProducts = products.filter(product => product.originalPrice <= 300000);
    } else if (maxPrice === 1000000) {
        filteredProducts = products.filter(product => product.originalPrice > 300000 && product.originalPrice <= 1000000);
    } else {
        filteredProducts = products.filter(product => product.originalPrice > 1000000);
    }
    loadProducts(filteredProducts);
}

// 페이지를 초기화하는 함수
function resetPage() {
    loadProducts(products); // 전체 상품을 다시 로드
}

// 페이지가 로드될 때 전체 상품을 로드
document.addEventListener('DOMContentLoaded', () => loadProducts());
