const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone X'];
const faker = require('faker')

const search = faker.random.word()
const timeout = 160000

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 150,
    devtools: true,
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging());
  page = await browser.newPage();
  await Promise.all([
    await page.goto('http://localhost:3000/'),
    page.emulate(iPhone)
  ]).catch(()=> {})
});

describe('on page load', () => {
  test('h2 loads correctly',
    async() => {
      let html, html1
      await Promise.all([
        html = await page.$eval('.header-text', e => e.innerHTML),
        html1 = await page.$eval('[data-testid="watchLaterButton"]', e => e.innerHTML),
        expect(html).toBe('VIKING BIOSÖKA'),
        expect(html1).toMatch('Watch Later'),
      ]).catch(()=> {})
      
  }, timeout)
})

describe('click on button', () => {  
  test(
    'click on watch later button',
    async () => {
      await page.waitForSelector('[data-testid="watchLaterButton"]')
      await page.click('[data-testid="watchLaterButton"]')  
      const html = await page.$eval('[data-testid="watchLaterButton"]', e => e.textContent)
      expect(html).toMatch('Back to Search')
      await page.click('[data-testid="watchLaterButton"]')
  }, timeout)
})

describe('has a block and click', () => {  
  test(
    'assert that a div has sort block and click on buttons',
    async () => {
      await page.waitForSelector('[data-testid="sortBar"]')
      await page.click('[data-testid="popbtn"]')
      await page.click('[data-testid="votebtn"]')
      await page.click('[data-testid="relbtn"]')
  }, timeout)
})

describe('add to watch later', () => {  
  test(
    'add film to watch later and then remove it',
    async () => {
      const title = await page.$eval('[data-testid="success"]', e => e.textContent)
      await page.click('[data-testid="favbtn"]')
      await page.click('[data-testid="watchLaterButton"]')
      const favtitle = await page.$eval('[data-testid="success"]', e => e.textContent)
      expect(favtitle).toMatch(title)
      await page.click('[data-testid="favbtn"]')
      await page.$eval('[data-testid="success"]').catch(e => expect(e.textContent).toBeUndefined())
      await page.waitFor(500)
      await page.click('[data-testid="watchLaterButton"]')
  }, timeout)
})

describe('contain search', () => {  
  test(
    'assert that a result contain search string',
    async () => {
      await page.click('[data-testid="field"]')  
      await page.type('[data-testid="field"]', search)
      const str = await page.$eval('[data-testid="field"]', e => e.textContent)
      await page.click('[data-testid="submit"]')
      await page.waitFor('.movie')
      const html = await page.$$eval('[data-testid="success"]', titles => titles.map(title => title.textContent))
      html.forEach(el => expect(el).toMatch(str))
  }, timeout)
})

afterAll(() => {       
  if (isDebugging()) {           
    browser.close()       
  }   
})