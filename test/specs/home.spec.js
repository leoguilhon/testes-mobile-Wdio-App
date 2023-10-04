const homeScreen = require("../screens/home.screen");

describe('Access Home Page', () => {
    it('should open the home page',  async () => {
        await homeScreen.goToHome()

        setTimeout(()=>{
            console.log('Abriu a Home')
        }, 10000)
    });
})