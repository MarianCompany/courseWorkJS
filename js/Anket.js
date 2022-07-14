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
                    <button class="btn collection__btn collection__btn-archive" data-anket-id="${this.id}">Архивировать</button>
                    <button class="btn collection__btn collection__btn-delete" data-anket-id="${this.id}">Удалить</button>
                </div>
            </div>`

        this.anketAboutTemplate = `<div class="anket__content">
                <img src="../img/avatar_default.jpg" alt="" class="anket__avatar">
                <div class="anket__about">
                    <div class="about-items">
                        <h5 class="about-items__title text_bold">Основные признаки:</h5>
                        <div class="about-items__wrap">
                            <div class="about__item">
                                <p class="about__label">Имя:</p>
                                <input class="about__info-input form-item__input" id="firstNameEdit" value="${this.firstName}" placeholder="Имя">
                                <p class="about__info">${this.firstName}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Фамилия:</p>
                                <input class="about__info-input form-item__input" id="lastNameEdit" value="${this.lastName}" placeholder="Фамилия">
                                <p class="about__info">${this.lastName}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Кличка:</p>
                                <input class="about__info-input form-item__input" id="nicknameEdit" value="${this.nickname}" placeholder="Кличка">
                                <p class="about__info">${this.nickname}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Дата рождения:</p>
                                <input class="about__info-input form-item__input" id="dateOfBirthEdit" value="${this.dateOfBirth}" placeholder="Дата рождения">
                                <p class="about__info">${this.dateOfBirth}</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-items">
                        <h5 class="about-items__title text_bold">Физические признаки:</h5>
                        <div class="about-items__wrap">
                            <div class="about__item">
                                <p class="about__label">Рост:</p>
                                <input class="about__info-input form-item__input" id="heightEdit" value="${this.height}" placeholder="Рост">
                                <p class="about__info">${this.height}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Цвет глаз:</p>
                                <input class="about__info-input form-item__input" id="eyesColorEdit" value="${this.eyesColor}" placeholder="Цвет глаз">
                                <p class="about__info">${this.eyesColor}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Цвет волос:</p>
                                <input class="about__info-input form-item__input" id="hairColorEdit" value="${this.hairColor}" placeholder="Цвет волос">
                                <p class="about__info">${this.hairColor}</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-items">
                        <h5 class="about-items__title text_bold">Места пребывания:</h5>
                        <div class="about-items__wrap">
                            <div class="about__item">
                                <p class="about__label">Национальность:</p>
                                <input class="about__info-input form-item__input" id="nationalityEdit" value="${this.nationality}" placeholder="Национальность">
                                <p class="about__info">${this.nationality}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Город рождения:</p>
                                <input class="about__info-input form-item__input" id="placeOfBirthEdit" value="${this.placeOfBirth}" placeholder="Город рождения">
                                <p class="about__info">${this.placeOfBirth}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Последний город:</p>
                                <input class="about__info-input form-item__input" id="lastPlaceOfLivingEdit" value="${this.lastPlaceOfLiving}" placeholder="Последний город">
                                <p class="about__info">${this.lastPlaceOfLiving}</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-items">
                        <h5 class="about-items__title text_bold">Криминал:</h5>
                        <div class="about-items__wrap">
                            <div class="about__item">
                                <p class="about__label">Должность:</p>
                                <input class="about__info-input form-item__input" id="criminalJobEdit" value="${this.criminalJob}" placeholder="Должность">
                                <p class="about__info">${this.criminalJob}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Преступление:</p>
                                <input class="about__info-input form-item__input" id="lastCrimeEdit" value="${this.lastCrime}" placeholder="Преступление">
                                <p class="about__info">${this.lastCrime}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Банда:</p>
                                <input class="about__info-input form-item__input" id="criminalBandEdit" value="${this.criminalBand}" placeholder="Банда">
                                <p class="about__info">${this.criminalBand}</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-items">
                        <h5 class="about-items__title text_bold">Другие признаки:</h5>
                        <div class="about-items__wrap">
                            <div class="about__item">
                                <p class="about__label">Языки:</p>
                                <input class="about__info-input form-item__input" id="languagesEdit" value="${this.languages}" placeholder="Языки">
                                <p class="about__info">${this.languages}</p>
                            </div>
                            <div class="about__item">
                                <p class="about__label">Особые приметы:</p>
                                <input class="about__info-input form-item__input" id="extraMarksEdit" value="${this.extraMarks}" placeholder="Особые приметы">
                                <p class="about__info">${this.extraMarks}</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-edit">
                        <button class="btn about-edit__btn">Редактировать</button>
                        <button class="btn about-save__btn">Сохранить</button>
                    </div>
                </div>
            </div>`
    }

    initEditBtn(anketCollection) {
        $('.about-edit__btn').click(function () {
            $('.about__info').css('display', 'none');
            $('.about__info-input').css('display', 'block');
            $(this).css('display', 'none');
            $('.about-save__btn').css('display', 'inline-block');
        })

        $('.about-save__btn').click(function (event) {
            $('.about__info').css('display', 'block');
            $('.about__info-input').css('display', 'none');
            $(event.target).css('display', 'none');
            $('.about-edit__btn').css('display', 'inline-block');

            this._saveEditedInfo(anketCollection);
        }.bind(this))
    }

    _saveEditedInfo(anketCollection) {
        const anketKeys = Object.keys(this);

        for(let i = 0; i < anketKeys.length; i++) {
            if(anketKeys[i].indexOf('Template') === -1 && anketKeys[i] !== 'id') {
                const inputID = '#' + anketKeys[i] + 'Edit';

                if(Array.isArray(this[anketKeys[i]])) {
                    this[anketKeys[i]] = $(inputID).val().split(',').map(field => field.trim());
                }
                this[anketKeys[i]] = $(inputID).val();
            }
        }

        anketCollection.saveEditedAnket(this.id);
    }
}