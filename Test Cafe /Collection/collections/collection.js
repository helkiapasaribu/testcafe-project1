import { Selector } from 'testcafe'

fixture `collection web automation testing using testcafe`
.page(`https://mvp.uangteman.com/`)

test ('click username field', async t => {
await t
.setTestSpeed(0.3)


})