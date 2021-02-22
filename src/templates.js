export const getResultItemCountTemplate = (lottoItemCount) => {
  return `
    총 <span id="lotto-count">${lottoItemCount}</span>개를 구매하였습니다.
  `;
};

export const getNumberListTemplate = (numberList) => {
  return numberList.join(', ');
};

export const getResultItemListTemplate = (lottoItemList) => {
  return lottoItemList
    .map((lottoItem) =>
      ` 
        <div class="mx-1 text-4xl lotto-item">
          <span class="lotto-icon">🎟️</span>
          <span class="lotto-numbers">${getNumberListTemplate(lottoItem)}</span>
        </div>
      `
    )
    .join('');
};
