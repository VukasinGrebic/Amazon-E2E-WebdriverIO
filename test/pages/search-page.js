class SearchPage {
    get searchBar () {
        return $('#twotabsearchtextbox')
    }

    get searchBtn () {
        return $('input[type="submit"]')
    }

    get searchRandom () {
        return $('span[class="s-heavy"]')
    }

    get searchResult () {
        return $('span[class="a-color-state a-text-bold"]')
    }

    get searchBarText () {
        return $('label[for="twotabsearchtextbox"]')
    }

    get logo () {
        return $('#nav-logo-sprites')
    }

    get deleteSuggestion () {
        return $('div[class="s-suggestion-deleteDistinct"]')
    }

    goDown () {
        return browser.keys('ArrowDown')
    }

    enter  () {
        return browser.keys('Enter')
    }

    pause () {
        return browser.pause(1000)
    }

}

export default new SearchPage()