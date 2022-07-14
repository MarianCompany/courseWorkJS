class ArchiveCollection extends Collection {
    constructor() {
        super('archiveCollection', '.collection-content');
    }

    initAnkets() {
        const data = getStorageItem(this._collectionName);

        if(data !== null) {
            let criminalArchiveAnkets = [];

            for(let i = 0; i < data.length; i++) {
                criminalArchiveAnkets.push(new ArchiveAnket(data[i]));
            }

            this.ankets = criminalArchiveAnkets;
            this._renderAnkets();
        } else {
            this._renderAnketsNotFound();
        }
    }

    _addEventListenersToControlBtns() {
        this._addOnClickToAboutBtns();
        this._addOnClickToDeleteBtns();
        this._addOnClickToDearchiveBtns();
    }

    _addOnClickToDearchiveBtns() {
        $('.collection__btn-dearchive').click(function (event) {
            const anketID = Number($(event.target).attr('data-anket-id'));

            this._dearchiveAnket(anketID);
        }.bind(this));
    }

    _dearchiveAnket(anketID) {
        if(getStorageItem('catalogueCollection') === null) {
            setStorageItem('catalogueCollection', []);
        }

        const anketListID = this._findListIdByAnketId(anketID);
        this._addAnketToCatalogueCollection(this.ankets[anketListID])
        this._deleteAnket(anketID);
    }

    _addAnketToCatalogueCollection(anket) {
        let archiveAnkets = getStorageItem('catalogueCollection');
        archiveAnkets.push(anket);
        setStorageItem('catalogueCollection', archiveAnkets);
    }
}