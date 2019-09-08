const puppeteer = require('puppeteer')

;(async () => {
    const browser = await puppeteer.launch({
        ignoreDefaultArgs: ['--disable-extensions'],
    })
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    await page.screenshot({ path: 'example.png' })

    await browser.close()
})()
