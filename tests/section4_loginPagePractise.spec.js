import {expect, test} from "@playwright/test";

test('login page functionality', async ({page})=>{
    const emailIdTextBox    =   page.locator('#username');
    const passwordTextBox   =   page.locator("input[type='password']");
    const submitButton      =   page.locator(".btn-md");
    const errorMsgElm       =   page.locator('div[style*="block"]');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await emailIdTextBox.fill('samiran');
    await passwordTextBox.fill('password');
    await submitButton.click();
    
    const errorText = await errorMsgElm.textContent();
    console.log(`Error message : ${errorText}`);
    await expect(errorMsgElm).toContainText('Incorrect username/password');
});