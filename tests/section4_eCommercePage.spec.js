import {test} from '@playwright/test';

test('login to ecommerce page and checking the items', async({page})=>{
    const userName      = page.locator('input[id="userEmail"]');
    const password      = page.locator('#userPassword');
    const submitButton  = page.locator('#login');
    const products      = page.locator('.card-body b');

    await page.goto('https://rahulshettyacademy.com/client');

    await userName.fill('anshika@gamil.com');
    await password.fill('Iamking@000');
    await submitButton.click({force:true});

    await products.waitFor({timeout:10000});
    const productNamesList = await products.allTextContents();
    console.log(`The list of products : ${productNamesList}`);

});