const fields = ['firstName', 'lastName', 'dateOfBirth', 'nickname', 'height', 'hairColor', 'eyesColor', 'extraMarks',
    'nationality', 'placeOfBirth', 'lastPlaceOfLiving', 'languages', 'criminalJob', 'lastCrime', 'criminalBand'];

//TODO: попробовать убрать хардкод названий полей класса

function initSearch(anketCollection) {
    $('.form__btn-search').click(function () {
        anketCollection.searchAnkets(getSearchQueries());
        closeActivePopup();
    })

    $('.collection-header__clear-search').click(function () {
        anketCollection.initAnkets();
    })
}

function getSearchQueries() {
    let searchQueries = {};

    for(let i = 0; i < fields.length; i++) {
        const inputID = '#' + fields[i] + 'Input';

        if($(inputID).val() !== '') {
            searchQueries[fields[i]] = $(inputID).val();
        }
    }

    return searchQueries;
}