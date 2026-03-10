import {Page} from '@playwright/test'

export class banktransferPage {
    constructor (private page : Page ) {}

    private inputmoney = 'amount';
    private submitbutton = 'submit';
    // method to perform fund transfer 
    async transfer(amount:number) {
    
     // Convert number to string before filling
    await this.page.fill(this.inputmoney, amount.toString());
    // click submit transfer money
    await this.page.click(this.submitbutton);
    }

}