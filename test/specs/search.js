import SearchPage from "../pages/search-page.js"
import HomePage from "../pages/home-page.js"

describe('Search flow', () => {

    beforeEach(async () => {
        await HomePage.open()
    })

    it('Search product and verify', async () => {
        await SearchPage.pause()
        await SearchPage.searchBar.addValue('Macbook')
        await SearchPage.searchBtn.click()
        await expect(SearchPage.searchResult).toHaveTextContaining('Macbook')
    })
    
    it('Search auto sugesstion and verify', async () => {
        await SearchPage.searchBar.click()
        await SearchPage.searchRandom.click()
        await expect(SearchPage.searchResult).toHaveTextContaining(await SearchPage.searchBarText.getText())
        await SearchPage.logo.click()
        await SearchPage.searchBar.click()
        await SearchPage.deleteSuggestion.click()
    })

    it('Search auto sugesstion and verify', async () => {
        await SearchPage.searchBar.click()
        await SearchPage.pause()
        await SearchPage.goDown()
        await SearchPage.pause()
        await SearchPage.enter()
        await SearchPage.pause()
        await expect(SearchPage.searchResult).toHaveTextContaining(await SearchPage.searchBarText.getText())
        await SearchPage.logo.click()
        await SearchPage.searchBar.click()
        await SearchPage.deleteSuggestion.click()
    })
    
})