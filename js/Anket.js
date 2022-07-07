class Anket {
    constructor(anketData) {
        this.id = anketData.id;
        this.firstName = anketData.firstName;
        this.lastName = anketData.lastName;
        this.dateOfBirth = anketData.dateOfBirth;
        this.nickname = anketData.nickname;
        this.height = anketData.height;
        this.hairColor = anketData.hairColor;
        this.eyesColor = anketData.eyesColor;
        this.extraMarks = anketData.extraMarks;
        this.nationality = anketData.nationality;
        this.placeOfBirth = anketData.placeOfBirth;
        this.lastPlaceOfLiving = anketData.lastPlaceOfLiving;
        this.languages = anketData.languages;
        this.criminalJob = anketData.criminalJob;
        this.lastCrime = anketData.lastCrime;
        this.criminalBand = anketData.criminalBand;
    }

    deleteAnket() {
        let ankets = getAnketsData();
        ankets.criminals.splice(findAnketByHtmlID(this.id), 1);
        anketList = [];
        setAnketsData(ankets);
    }

    renderForAnketList() {
        $('.collection-content').append(
            `<div class="collection-item" data-anket-id="${this.id}">
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
                    <button class="btn collection__btn collection__btn-archive" data-anket-id="${this.id}">Архивировать</button>
                    <button class="btn collection__btn collection__btn-delete" data-anket-id="${this.id}">Удалить</button>
                </div>
            </div>`
        )
    }

    renderForAnketAbout() {
        $('.popup-anket__content').html(
            `<div class="anket__content">
                <img src="../img/avatar_default.jpg" alt="" class="anket__avatar">
                <div class="anket__about">
                    <div class="about-items">
                        <h5 class="about-items__title text_bold">Основные признаки:</h5>
                        <div class="about-items__wrap">
                            <div class="about__item">
                                <p class="about__label">Имя:</p>
                                <p class="about__info">${this.firstName}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Фамилия:</p>
                                <p class="about__info">${this.lastName}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Кличка:</p>
                                <p class="about__info">${this.nickname}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Дата рождения:</p>
                                <p class="about__info">${this.dateOfBirth}</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-items">
                        <h5 class="about-items__title text_bold">Физические признаки:</h5>
                        <div class="about-items__wrap">
                            <div class="about__item">
                                <p class="about__label">Рост:</p>
                                <p class="about__info">${this.height}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Цвет глаз:</p>
                                <p class="about__info">${this.eyesColor}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Цвет волос:</p>
                                <p class="about__info">${this.hairColor}</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-items">
                        <h5 class="about-items__title text_bold">Места пребывания:</h5>
                        <div class="about-items__wrap">
                            <div class="about__item">
                                <p class="about__label">Национальность:</p>
                                <p class="about__info">${this.nationality}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Город рождения:</p>
                                <p class="about__info">${this.placeOfBirth}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Последний город:</p>
                                <p class="about__info">${this.lastPlaceOfLiving}</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-items">
                        <h5 class="about-items__title text_bold">Криминал:</h5>
                        <div class="about-items__wrap">
                            <div class="about__item">
                                <p class="about__label">Должность:</p>
                                <p class="about__info">${this.criminalJob}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Преступление:</p>
                                <p class="about__info">${this.lastCrime}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Банда:</p>
                                <p class="about__info">${this.criminalBand}</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-items">
                        <h5 class="about-items__title text_bold">Другие признаки:</h5>
                        <div class="about-items__wrap">
                            <div class="about__item">
                                <p class="about__label">Языки:</p>
                                <p class="about__info">${this.languages}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Особые приметы:</p>
                                <p class="about__info">${this.extraMarks}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        )
    }
}