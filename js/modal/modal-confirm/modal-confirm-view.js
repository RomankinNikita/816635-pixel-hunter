import AbstractView from '../../abstract-view.js';

export default class ModalConfirmView extends AbstractView {
  get template() {
    return `<section class="modal">
    <form class="modal__inner">
      <button class="modal__close" type="button">
        <span class="visually-hidden">Закрыть</span>
      </button>
      <h2 class="modal__title">Подтверждение</h2>
      <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
      <div class="modal__button-wrapper">
        <button class="modal__btn" id="btn-accept">Ок</button>
        <button class="modal__btn" id="btn-refuse">Отмена</button>
      </div>
    </form>
  </section>`;
  }

  bind() {
    const modalClose = this.element.querySelector(`.modal__close`);
    const btnAccept = this.element.querySelector(`#btn-accept`);
    const btnRefuse = this.element.querySelector(`#btn-refuse`);

    btnAccept.addEventListener(`click`, this.onBack);
    modalClose.addEventListener(`click`, this.onClose);
    btnRefuse.addEventListener(`click`, this.onClose);
  }

  onBack() {

  }

  onClose(evt) {
    evt.preventDefault();
    const mainElement = document.querySelector(`#main`);
    mainElement.removeChild(mainElement.lastChild);
  }
}
