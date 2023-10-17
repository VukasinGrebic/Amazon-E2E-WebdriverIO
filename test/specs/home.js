import HomePage from "../pages/home-page.js"

describe('Homepage flow', () => {
    beforeEach(async () => {
        await HomePage.open()
    })
    
    it('Visiting home page and checking url', async () => {
        await HomePage.open()
        await expect(browser).toHaveUrlContaining("amazon")
    })
    
})