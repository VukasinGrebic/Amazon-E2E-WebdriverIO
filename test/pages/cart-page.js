class CartPage {

    get productImg() {
        return $("//img[contains(@class,'s-image')]")
    }

}

export default new CartPage ()