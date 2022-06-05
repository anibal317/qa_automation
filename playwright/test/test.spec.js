const { test, expect } = require('@playwright/test');

// test.beforeEach(async ({ page }) => {
//     await page.goto('https://demoqa.com/checkbox');
//     console.log('Se ejecutó el BeforeEach')

// });

// test.afterEach(async ({ page }) => {
//     console.log('Se ejecutó el afterEach')
// })


test.describe('Trabajando con forms', () => {
    test('TEST-01 Completar el formulario', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox');
        await expect(page.locator('div.main-header')).toHaveText('Check Box')
        
        
        await page.goto('https://demoqa.com/textbox');
        await delay(7000);
        await expect(page.locator('div.main-header')).toHaveText('Text Box')
        // Create 1st todo.
        // await page.locator('#userName').fill('Usuario');
        // await page.locator('#userEmail').fill('email@mail.net');
        // await page.locator('#currentAddress').fill('Dirección Actual');
        // await page.locator('#permanentAddress').fill('Dirección Permanente');
        // await page.locator('#submit').press('Enter');
        // await expect(page.locator('#output')).toBeVisible()
        // await page.waitForTimeout(4000)
    })
});



function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}