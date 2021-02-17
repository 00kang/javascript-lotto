import { $ } from '../utils/dom.js';

export default class LottoDisplay {
  constructor(props) {
    this.props = props;
    this.lottos = this.props.lottos;
    this.isToggled = false;

    this.selectDOM();
    this.bindEvent();
  }

  selectDOM() {
    this.$target = $('#lotto-display-container');
    this.$toggleButton = $('.lotto-numbers-toggle-button');
    this.$lottoCount = $('#total-lotto-count');
    this.$lottoDisplayArea = $('#lotto-display-area');
  }

  setState({ lottos, isToggled }) {
    this.lottos = lottos ?? this.lottos;
    this.isToggled = isToggled ?? this.isToggled;

    this.render();
  }

  bindEvent() {
    this.$toggleButton.addEventListener(
      'click',
      this.toggleButtonClickHandler.bind(this),
    );
  }

  toggleButtonClickHandler() {
    this.setState({ isToggled: !this.isToggled });
  }

  createLottoCountHTML() {
    return `
      <label data-test="total-lotto-count" class="flex-auto my-0">
        총 <b>${this.lottos.length}</b>개를 구매하였습니다.
      </label>`;
  }

  createLottoHtml() {
    return this.lottos
      .map(({ numbers }) => {
        return `<span data-test="lotto" class="mx-1 text-4xl d-flex items-center justify-center">🎟️ ${
          this.isToggled
            ? `<span data-test="lotto-numbers" class="text-2xl ml-4">${numbers.join(
                ', ',
              )}</span>`
            : ''
        }</span>`;
      })
      .join('');
  }

  render() {
    this.$target.classList.remove('hidden');
    this.$lottoCount.innerHTML = `총 ${this.lottos.length}개를 구매하였습니다.`;
    this.$lottoDisplayArea.innerHTML = this.createLottoHtml();
  }
}
