let anketList = [];

$(document).ready(function () {

    $.getJSON('../data/ankets.json', function (data) {
        if(getAnketsData() === null) {
            setAnketsData(data);
        }
    }).then(() => {
        const ankets = getAnketsData().criminals;
        renderAnketList(ankets);
    });


})

function renderAnketList(ankets) {
    if(ankets.length !== 0) {
        $('.collection-content').html('');
        for(let i = 0; i < ankets.length; i++) {
            const anket = new Anket(ankets[i]);
            anketList.push(anket);
            $('.collection-content').append()
            anket.renderForAnketList();
        }
        addEventListenersToCollectionBtns();
    } else {
        $('.collection-content').css('display', 'block')
        $('.collection-content').html('К сожалению, анкеты не были найдены или все анкеты удалены');
    }
}

function addEventListenersToCollectionBtns() {
    $('.collection__btn-about').click(function (event) {
        onPopupBtnCLick(event);
        const anketID = Number($(event.target).attr('data-anket-id'));
        anketList[findAnketByHtmlID(anketID)].renderForAnketAbout();
    })

    $('.collection__btn-delete').click(function (event) {
        const anketID = Number($(event.target).attr('data-anket-id'));

        anketList[findAnketByHtmlID(anketID)].deleteAnket();
        renderAnketList(getAnketsData().criminals);
    })
}

function findAnketByHtmlID(id) {
    for(let i = 0; i < anketList.length; i++) {
        if(anketList[i].id === id) {
            console.log([i, id])
            return i;
        }
    }

    return undefined;
}

