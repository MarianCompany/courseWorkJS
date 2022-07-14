class ArchiveAnket extends Anket {

    constructor(anketData) {
        super(anketData);
        this.anketTemplate = `<div class="collection-item" data-anket-id="${this.id}">
                <img src="../img/avatar_default.jpg" alt="Фото" class="collection__avatar">
                <div class="collection__info">
                    <div class="info-item">
                        <p class="info__text info__characteristic-name">Имя:</p>
                        <p class="info__text info__characteristic">${this.firstName}</p>
                    </div>
                    <div class="info-item">
                        <p class="info__text info__characteristic-name">Фамилия:</p>
                        <p class="info__text info__characteristic">${this.lastName}</p>
                    </div>
                    <div class="info-item">
                        <p class="info__text info__characteristic-name">Дата рождения:</p>
                        <p class="info__text info__characteristic">${this.dateOfBirth}</p>
                    </div>
                    <div class="info-item">
                        <p class="info__text info__characteristic-name">Преступление:</p>
                        <p class="info__text info__characteristic">${this.lastCrime}</p>
                    </div>
                </div>
                <div class="collection__control">
                    <button class="btn collection__btn collection__btn-about popup-btn" data-popupID="#anket-popup-about" data-anket-id="${this.id}">Детальнее</button>
                    <button class="btn collection__btn collection__btn-dearchive" data-anket-id="${this.id}">Разархивировать</button>
                    <button class="btn collection__btn collection__btn-delete" data-anket-id="${this.id}">Удалить</button>
                </div>
            </div>`
    }
}