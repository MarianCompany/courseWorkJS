class CatalogueCollection extends Collection {
    constructor() {
        super('catalogueCollection', '.collection-content');
        setTimeout(() => {
            this.initAddBtnEventListener();
        }, 500)
    }

    initAddBtnEventListener() {
        const uniqueID = this.ankets[this.ankets.length - 1].id + 1;
        let anketData = {
            id: uniqueID,
        };

        $('.form__btn-add-anket').click(function () {
            let addAnketMessageNode = $('.add-anket__message');

            for(let i = 0; i < fields.length; i++) {
                const inputID = '#' + fields[i] + 'Add';

                if($(inputID).val() !== '') {
                    if(fields[i] === 'extraMarks' || fields[i] === 'languages') {
                        anketData[fields[i]] = $(inputID).val().split(',').map(field => field.trim());
                    }
                    anketData[fields[i]] = $(inputID).val();
                } else {
                    addAnketMessageNode.html('Одно или более полей не были заполнены');
                    return;
                }
            }
            addAnketMessageNode.html('');
            closeActivePopup();

            this.ankets.push(new Anket(anketData));
            setStorageItem('catalogueCollection', this.ankets);
            this.initAnkets();
        }.bind(this))
    }

    _addEventListenersToControlBtns() {
        this._addOnClickToAboutBtns();
        this._addOnClickToDeleteBtns();
        this._addOnClickToArchiveBtns();
    }

    _addOnClickToArchiveBtns() {
        $('.collection__btn-archive').click(function (event) {
            const anketID = Number($(event.target).attr('data-anket-id'));

            this._archiveAnket(anketID);
        }.bind(this));
    }

    _archiveAnket(anketID) {
        if(getStorageItem('archiveCollection') === null) {
            setStorageItem('archiveCollection', []);
        }

        const anketListID = this._findListIdByAnketId(anketID);
        this._addAnketToArchiveCollection(this.ankets[anketListID])
        this._deleteAnket(anketID);
    }

    _addAnketToArchiveCollection(anket) {
        let archiveAnkets = getStorageItem('archiveCollection');
        archiveAnkets.push(new ArchiveAnket(anket));
        setStorageItem('archiveCollection', archiveAnkets);
    }
}