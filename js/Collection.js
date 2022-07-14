class Collection {
    constructor(collectionName, collectionNodeSelector) {
        this.ankets = null;
        this._collectionName = collectionName;
        this.collectionNodeSelector = collectionNodeSelector;
    }

    initAnkets() {
        const data = getStorageItem(this._collectionName);

        if(data !== null) {
            let criminalAnkets = [];

            for(let i = 0; i < data.length; i++) {
                criminalAnkets.push(new CatalogueAnket(data[i]));
            }

            this.ankets = criminalAnkets;
            this._renderAnkets();
        } else {
            $.getJSON('../data/ankets.json')
                .then((data) => {
                    const criminals = data.criminals;
                    let criminalAnkets = [];

                    for(let i = 0; i < criminals.length; i++) {
                        criminalAnkets.push(new CatalogueAnket(criminals[i]));
                    }
                    setStorageItem(this._collectionName, criminalAnkets);
                    this.ankets = criminalAnkets;
                    this._renderAnkets();
                })
        }
    }

    searchAnkets(searchQueries) {
        let searchResult = this.ankets;
        
        Object.keys(searchQueries).forEach(searchKey => {
            console.log(searchKey);
            searchResult = searchResult.filter(anket => {
                if(Array.isArray(anket[searchKey])) {
                    for(let i = 0; i < anket[searchKey].length; i++) {
                        if(this._compareForSearch(searchQueries[searchKey], anket[searchKey][i])) {
                            return true;
                        }
                    }
                    return false;
                }
                return this._compareForSearch(searchQueries[searchKey], anket[searchKey]);
            })
        })

        console.log(searchResult)

        this.ankets = searchResult;
        this._renderAnkets();
    }

    saveEditedAnket(anketID) {
        setStorageItem(this._collectionName, this.ankets);
        this.initAnkets();
        this._renderAnketAbout(anketID);
    }

    _compareForSearch(searchValue, anketValue) {
        return anketValue.toLowerCase().startsWith(searchValue.toLowerCase())
    }

    _renderAnkets() {
        let collectionNode = $(this.collectionNodeSelector);

        $(this.collectionNodeSelector).html('');
        if(this.ankets.length !== 0) {
            for(let i = 0; i < this.ankets.length; i++) {
                collectionNode.append(this.ankets[i].anketTemplate)
            }
            this._addEventListenersToControlBtns();
            initPopups();
        } else {
            this._renderAnketsNotFound();
        }
    }

    _renderAnketAbout(anketID) {
        const anketListID = this._findListIdByAnketId(anketID);

        $('.popup-anket__content').html(this.ankets[anketListID].anketAboutTemplate)
        this.ankets[anketListID].initEditBtn(this);
    }

    _renderAnketsNotFound() {
        $(this.collectionNodeSelector).html('К сожалению, анкеты не были найдены или все анкеты удалены');
    }

    _addEventListenersToControlBtns() {
        this._addOnClickToAboutBtns();
        this._addOnClickToDeleteBtns();
    }

    _addOnClickToAboutBtns() {
        $('.collection__btn-about').click(function(event) {
            const anketID = Number($(event.target).attr('data-anket-id'));

            this._renderAnketAbout(anketID);
        }.bind(this));
    }

    _addOnClickToDeleteBtns() {
        $('.collection__btn-delete').click(function (event) {
            const anketID = Number($(event.target).attr('data-anket-id'));

            this._deleteAnket(anketID);
        }.bind(this));
    }

    _deleteAnket(anketID) {
        this.ankets.splice(this._findListIdByAnketId(anketID), 1);
        this._removeAnket(anketID);
        setStorageItem(this._collectionName, this.ankets);

        if(this.ankets.length === 0) {
            this._renderAnketsNotFound();
        }
    }

    _removeAnket(anketID) {
        $(`.collection-item[data-anket-id="${anketID}"]`).fadeOut(350, function () {
            $(`.collection-item[data-anket-id="${anketID}"]`).remove();
        })
    }

    _findListIdByAnketId(anketID) {
        for(let i = 0; i < this.ankets.length; i++) {
            if(this.ankets[i].id === anketID) {
                return i;
            }
        }

        return null;
    }
}