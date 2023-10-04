const formsScreen = require("../screens/forms.screen");

describe('Access forms page', () => {
    it('should go to the forms page',  async () => {
        await formsScreen.goToForms()

        setTimeout(()=>{
            console.log('Abriu o Formulário')
        }, 10000)
    });
})
describe('Fill the forms page', () => {
    it('should write something in the first space',  async () => {
        await formsScreen.firstSpace()

        setTimeout(()=>{
            console.log('Preencheu o primeiro espaço')
        }, 10000)
    });
    it('should click on the switch button',  async () => {
        await formsScreen.clickSwitchSpace()

        setTimeout(()=>{
            console.log('Clicou no switch')
        }, 10000)
    });
    it('should click on the box button',  async () => {
        await formsScreen.clickBoxSpace()

        setTimeout(()=>{
            console.log('Clicou no box de opções')
        }, 10000)
    });
    it('should choose an option',  async () => {
        await formsScreen.clickBoxOption()

        setTimeout(()=>{
            console.log('Clicou na opção do box')
        }, 10000)
    });
    it('should click on the Active button',  async () => {
        await formsScreen.clickActiveButton()

        setTimeout(()=>{
            console.log('Clicou no botão Active')
        }, 10000)
    });
})