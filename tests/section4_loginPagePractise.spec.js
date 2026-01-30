import {test} from "@playwright/test";

test('login page functionality', async ({page})=>{
    const emailIdTextBox = page.locator('#username');
    const passwordTextBox = page.locator("input[type='password']");
    const submitButton = page.locator(".btn-md");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await emailIdTextBox.fill('samiran');
    await passwordTextBox.fill('password');
    await submitButton.click();
});