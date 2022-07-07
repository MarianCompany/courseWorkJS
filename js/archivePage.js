let archiveAnketList = [];

$(document).ready(function () {
    let archiveAnkets = getAnketsArchiveData();
    if (archiveAnkets === null) {
        setAnketsArchiveData({criminalsArchive:[]})
        archiveAnkets = getAnketsArchiveData();
    }
    renderArchiveAnketList(archiveAnkets.criminalsArchive);

})

function renderArchiveAnketList(ankets) {
    if(ankets !== null) {
        if(ankets.length !== 0) {
            $('.collection-content').html('');
            for(let i = 0; i < ankets.length; i++) {
                const anket = new ArchiveAnket(ankets[i]);
                archiveAnketList.push(anket);
                anket.renderForAnketList();
            }
            addEventListenersToCollectionBtns();
        } else {
            $('.collection-content').css('display', 'block')
            $('.collection-content').html('К сожалению, анкеты не были найдены или все анкеты удалены');
        }
    } else {
        $('.collection-content').css('display', 'block')
        $('.collection-content').html('К сожалению, анкеты не были найдены или все анкеты удалены');
    }
}

function addEventListenersToCollectionBtns() {
    $('.collection__btn-about').click(function (event) {
        onPopupBtnCLick(event);
        const anketID = Number($(event.target).attr('data-anket-id'));
        archiveAnketList[findAnketByHtmlID(anketID)].renderForAnketAbout();
    })

    $('.collection__btn-delete').click(function (event) {
        deleteAnket(event);
    })
}

function deleteAnket(event) {
    const anketID = Number($(event.target).attr('data-anket-id'));

    archiveAnketList[findAnketByHtmlID(anketID)].deleteAnket();
    renderArchiveAnketList(getAnketsArchiveData().criminalsArchive);
}

function findAnketByHtmlID(id) {
    for(let i = 0; i < archiveAnketList.length; i++) {
        if(archiveAnketList[i].id === id) {
            console.log([i, id])
            return i;
        }
    }

    return undefined;
}



