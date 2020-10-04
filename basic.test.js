import { Selector } from 'testcafe'

fixture `automation dengan testcafe`
.page(`https://devexpress.github.io/testcafe/example/`)

//set speed (biar gak kecepatan)


test.skip('click populate button', async t => {
    await t
    .setTestSpeed(0.3)
    .setNativeDialogHandler(() => true) 
    .click(Selector('#populate'))
    .expect(Selector('#developer-name').value).contains('Peter Parker') //cari selector/field yaitu developer-name, dan akan diisi peter parker
})

test.skip('select radio button', async t =>{
    await t
    .click(Selector('#macos'))
    .expect(Selector('#macos').innerText).contains('macos')
    .expect(Selector('#windows').checked).notOk()
    .expect(Selector('#linux').checked).notOk()
   /* .click(Selector('#macos'))
    .expect(Selector('#macos').innerText).eql('macos')
    .expect(Selector('#windows').checked).notOk()
    .expect(Selector('#linux').checked).notOk()
    .click(Selector('#macos'))
    .expect(Selector('#macos').innerText).contains('macos')
    .expect(Selector('#windows').checked).notOk()
    .expect(Selector('#linux').checked).notOk()*/
})

test.skip('click multiple checkbox', async t =>{
    await t
    .setTestSpeed(0.5)
    .click(Selector('#remote-testing'))
    .expect(Selector('#remote-testing').checked).ok()
    .click(Selector('#reusing-js-code'))
    .expect(Selector('#reusing-js-code').checked).ok()
    .click(Selector('#tried-test-cafe'))
    .expect(Selector('#tried-test-cafe').checked).ok()
    
})
    
const slider = Selector('.ui-slider-handle')

test.skip('geser slider', async t => {
    await t
    .setTestSpeed(0.5)
    .click(Selector('#tried-test-cafe'))
    .drag(slider, 80, 0, {offsetX:10, offsetY:10})

})

const select = Selector('#preferred-interface')
const option = select.find('option')
test.skip('select dropdown', async t => {
    await t
    .setTestSpeed(0.5)
    .click(select)
    .click(option.withText('JavaScript API'))
    .expect(select.innerText).contains('Javascript API')
})

test('End to End', async t => {
    await t
    .setTestSpeed(0.3)
    //click button populate
    .setNativeDialogHandler(() => true) 
    .click(Selector('#populate'))
    .expect(Selector('#developer-name').value).contains('Peter Parker')

    //click radio button
    .click(Selector('#macos'))
    .expect(Selector('#macos').checked).ok()

    //click checkbox
    .click(Selector('#remote-testing'))
    .expect(Selector('#remote-testing').checked).ok()
    .click(Selector('#reusing-js-code'))
    .expect(Selector('#reusing-js-code').checked).ok()
    /*.click(Selector('#tried-test-cafe'))
    .expect(Selector('#tried-test-cafe').checked).ok()*/

    //slider 
    .click(Selector('#tried-test-cafe'))
    .drag(slider, 80, 0, {offsetX:10, offsetY:10})

    //dropdown 
    .click(select)
    .click(option.withText('JavaScript API'))
    .expect(select.innerText).contains('JavaScript API')

    //type test di comment
    .typeText(Selector('#comments'), 'ini di isi di comment section')

    //click submit button
    .click(Selector('#submit-button'))
    //expected halaman selanjutnya
    .expect(Selector('.result-content').innerText).contains('Peter Parker')

    .wait(3000)

})