import {test} from '@playwright/test';

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

});

/* 
    If our main goal is page and not controlling whole browser context then we can directly use the
    'page' parameter of the 'test' function.
*/
test('Optimized First Playwright test',async ({page})=>{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});