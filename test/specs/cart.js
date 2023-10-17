import HomePage from "../pages/home-page.js"
import CartPage from "../pages/cart-page.js"
import SearchPage from "../pages/search-page.js"

describe('Cart flow', () => {
    it('Add to cart and verify', async () => {
        await SearchPage.pause()
        await SearchPage.searchBar.addValue('Macbook')
        await SearchPage.searchBtn.click()
    })
})