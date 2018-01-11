const { Chromeless } = require('chromeless')

async function run() {
  const chromeless = new Chromeless({
    remote: {
      endpointUrl: 'https://pgioxk7do7.execute-api.us-east-1.amazonaws.com/dev',
      apiKey: 'E66P5cMqUI2IHTylQ5Ks33rgFVmxqovX5k91AdXZ'
    },
  })

  const screenshot = await chromeless
  .goto('http://dev.henry.tax/signin')
  .type('andyliang987@hotmail.com', 'input[type="email"]')
  .type('Makemoney88', 'input[type="password"]')
  .click('#signin')
  .wait('div#sidebar-nav', 20000)
  .screenshot()

  console.log(screenshot) // prints local file path or S3 url

  await chromeless.end()
}

for(i = 0; i < 30; i++){
    run().catch(console.error.bind(console))
}
