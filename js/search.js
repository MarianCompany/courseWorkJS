const fields = ['firstName', 'lastName', 'dateOfBirth', 'nickname', 'height', 'hairColor', 'eyesColor', 'extraMarks',
    'nationality', 'placeOfBirth', 'lastPlaceOfLiving', 'languages', 'criminalJob', 'lastCrime', 'criminalBand'];



$(document).ready(function () {
    $('.form__btn-search').click(function () {
        setAnketsBeforeSearchData(getAnketsData());
        let currentAnkets = getAnketsData();
        let searchInputValues = {};
        for(let i = 0; i < fields.length; i++) {
            const inputID = '#' + fields[i] + 'Input';

            if($(inputID).val() !== '') {
                searchInputValues[fields[i]] = $(inputID).val();
            }
        }
        closeActivePopup();
        const keysForSearch = Object.keys(searchInputValues);

        for(let i = 0; i < keysForSearch.length; i++) {
            const currentKey = keysForSearch[i]

            currentAnkets.criminals = currentAnkets.criminals.filter(criminal => {
                if(Array.isArray(criminal[currentKey])) {
                    for(let i = 0; i < criminal[currentKey].length; i++) {
                        if(criminal[currentKey][i].toLowerCase().startsWith(searchInputValues[currentKey].toLowerCase())) {
                            return true;
                        }
                    }
                    return false;
                }
                return criminal[currentKey].toLowerCase().startsWith(searchInputValues[currentKey].toLowerCase());
            })
        }
        setAnketsData(currentAnkets);
        renderAnketList(getAnketsData().criminals);
    });

    $('.collection-header__clear-search').click(function () {
        setAnketsData(getAnketsBeforeSearchData());
        renderAnketList(getAnketsData().criminals);
    })
})