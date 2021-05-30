const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://esprit-tn.com/esponline/online/default.aspx');
    await page.$eval('#ContentPlaceHolder1_TextBox3', el => el.value = '183JMT0435');
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'load' }),
        page.click('#ContentPlaceHolder1_Button3'),
      ]);


    await page.$eval('#ContentPlaceHolder1_TextBox7', el => el.value = '15005209');
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'load' }),
        page.click('#ContentPlaceHolder1_ButtonEtudiant'),
      ]);
    await page.goto('https://esprit-tn.com/ESPOnline/Etudiants/Resultat2021.aspx')
      
    const data = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('table tr td'))
        return tds.map(td => td.innerText)
      });
      console.log(data);
      await page.screenshot({ path: 'example.png' ,fullPage:true});
    
    await browser.close();
  })();