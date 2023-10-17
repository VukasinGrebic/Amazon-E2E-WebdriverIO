import HomePage from "../pages/home-page.js"

describe('Homepage flow', () => {
    

    it('Visiting home page and checking url', async () => {
        await HomePage.open()
        await expect(browser).toHaveUrlContaining("amazon")
    })
    
})