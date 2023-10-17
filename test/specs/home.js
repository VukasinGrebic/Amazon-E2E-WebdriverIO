import HomePage from "../pages/home-page.js"

describe('Homepage flow', () => {
    it('Visiting home page and checking url', async () => {
        await HomePage.open()
        await expect(browser).toHaveUrlContaining("amazon")
    })
    it('Search product and verify', async () => {
        await HomePage.open()
        await HomePage.searchBar.addValue('Macbook')
        await HomePage.searchBtn.click()
        await expect(HomePage.searchResult).toHaveTextContaining('Macbook')
    })
    it('Search auto sugesstion and verify', async () => {
        await HomePage.open()
        await HomePage.searchBar.click()
        await HomePage.searchRandom.click()
        await expect(HomePage.searchResult).toHaveTextContaining(await HomePage.searchBarText.getText())
        await HomePage.logo.click()
        await HomePage.searchBar.click()
        await HomePage.deleteSuggestion.click()
    })
    it.only('Search auto sugesstion and verify', async () => {
        await HomePage.open()
        await HomePage.searchBar.click()
        await HomePage.pause()
        await HomePage.goDown()
        await HomePage.pause()
        await HomePage.enter()
        await HomePage.pause()
        await expect(HomePage.searchResult).toHaveTextContaining(await HomePage.searchBarText.getText())
        await HomePage.logo.click()
        await HomePage.searchBar.click()
        await HomePage.deleteSuggestion.click()
    })
})