// 입찰 상품 박스 데이터를 저장하는 배열
const bidItems = [
    {
        rank: 1,
        name: '상품명 1',
        currentBid: 50000,
        minBid: 10000
    },
    {
        rank: 2,
        name: '상품명 2',
        currentBid: 60000,
        minBid: 12000
    },
    {
        rank: 3,
        name: '상품명 3',
        currentBid: 70000,
        minBid: 15000
    },
    {
        rank: 4,
        name: '상품명 4',
        currentBid: 80000,
        minBid: 20000
    },
    {
        rank: 5,
        name: '상품명 5',
        currentBid: 90000,
        minBid: 22000
    },
    {
        rank: 6,
        name: '상품명 6',
        currentBid: 100000,
        minBid: 25000
    },
    // 추가 상품들을 여기에 추가할 수 있습니다...
];

// 입찰 상품 박스를 동적으로 추가하는 함수
function loadBidItems() {
    const bidList = document.getElementById('bid-list');

    bidItems.forEach(item => {
        // 입찰 박스를 위한 div 요소 생성
        const bidItem = document.createElement('div');
        bidItem.className = 'col-6 col-md-4 col-lg-2 mb-4';

        // 입찰 카드의 HTML 내용 생성
        bidItem.innerHTML = `
            <div class="product-item border p-3">
                <div class="product-rank">순위 ${item.rank}</div>
                <h5 class="product-name">${item.name}</h5>
                <p class="product-bid">현재 입찰가: ${item.currentBid.toLocaleString('ko-KR')}원</p>
                <p class="product-min-bid">최소 입찰가: ${item.minBid.toLocaleString('ko-KR')}원</p>
                <button class="btn btn-primary btn-block mt-2">입찰하기</button>
            </div>
        `;

        // 입찰 박스를 목록에 추가
        bidList.appendChild(bidItem);
    });
}

// 페이지가 로드될 때 입찰 상품을 로드
document.addEventListener('DOMContentLoaded', loadBidItems);
