class HomeScreen {
    get enterAppHome(){
        return $('//android.widget.Button[@content-desc="Home"]/android.widget.TextView[1]')
    }

    async goToHome(){
        this.enterAppHome.click()
    }
}

module.exports = new HomeScreen()