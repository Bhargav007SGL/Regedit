const regedit = require('./index').promisified

async function main() {
	var valuesToPut = {
    'HKCU\\Software\\lalaMySoftware': {
        'myValue1': {
            value: [1,2,3],
            type: 'REG_BINARY'
        },
        'myValue2': {
            value: undefined,
            type: 'REG_SZ'
        }
    }
	}
  const res = await regedit.putValue(valuesToPut)

  console.log(JSON.stringify(res, null, '\t'))
}

main()