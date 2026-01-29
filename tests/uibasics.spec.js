import {expect, test} from '@playwright/test';
import console from 'node:console';

// 'browser' parameter is part of 'test' function. This parameter controls browser context
test('First Playwright test',async ({browser})=>{
    
    /* 
        newContext Creates a new browser context. It won't share cookies/cache 
        with other browser contexts.
        we can control the cookies/cache of one browser context by this function
    */
    const context = await browser.newContext();

    // newPage creates a new page inside of the browser context
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const headerText = await page.title();
    console.log(`Page title is ${headerText}`);


});

/* 
    If our main goal is page and not controlling whole browser context then we can directly use the
    'page' parameter of the 'test' function.
*/
test('Optimized First Playwright test',async ({page})=>{
    
    await page.goto("https://www.google.com/");
    const headerText = await page.title();
    console.log(`Page title is ${headerText}`);
    await expect(page).toHaveTitle(headerText);

});