class CartPage {

    get productImg() {
        return $("//img[contains(@class,'s-image')]")
    }

    get price () {
        return $(".a-price-whole")
    }

    get addToCart () {
        return $("#add-to-cart-button")
    }

    get successMsg () {
        return $("//div[contains(@id,'NATC_SMART_WAGON_CONF_MSG_SUCCESS')]/span")
    }

    get cart () {
        return $("#nav-cart-count-container")
    }

    get qty () {
        return $("//span[contains(@class,'a-dropdown-prompt')]")
    }


    get cartCount () {
        return $("#nav-cart-count")
    }
}

export default new CartPage ()