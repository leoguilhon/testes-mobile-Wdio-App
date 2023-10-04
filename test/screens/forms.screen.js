class FormsScreen {
    get enterFormsPage(){
        return $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView[1]')
    }

    async goToForms(){
        this.enterFormsPage.click()
    }
    get writeFirstSpace(){
        return $('id:text-input')
    }
    async firstSpace(){
        this.writeFirstSpace.click()
        this.writeFirstSpace.type('#text-input', 'Testing 1 2 3')
    }
    get switchSpace(){
        return $('id:switch')
    }

    async clickSwitchSpace(){
        this.switchSpace.click()
    }
    get boxSpace(){
        return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView')
    }

    async clickBoxSpace(){
        this.boxSpace.click()
    }
    get boxOption(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]')
    }
    async clickBoxOption(){
        this.boxOption.click()
    }
    get activeButton(){
        return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup')
    }
    async clickActiveButton(){
        this.activeButton.click()
    }
}

module.exports = new FormsScreen()