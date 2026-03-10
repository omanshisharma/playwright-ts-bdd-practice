import {Page} from '@playwright/test'

export class dashboardPages {

    constructor(private page:Page) {} //injecting playwright instances 
    
    private balanceText = 'balance'; // locator for balance text
    private transferButton = 'transferbtn'; //locator for transfer navigation button
    
    async getBalance(): Promise<number> { //method to fetch current balance from UI
    
        const balance = await this.page.textContent(this.balanceText); //get text content of balance element
        return parseFloat(balance || '0');// Convert string to number and return
    }    
      // Method to navigate to transfer page
     async goTotransfer() {
    await this.page.click(this.transferButton);
  
}

    
}