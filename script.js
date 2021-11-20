function getTemplatesNumbers(name, id) {
    const https = require('https');
    https.get(`https://wax.api.atomicassets.io/atomicassets/v1/accounts/${name}/alien.worlds`, res => {
        let data = [];
        res.on('data', chunk => {
            data.push(chunk);
        });
        res.on('end', () => {
            const users = JSON.parse(Buffer.concat(data).toString());
            users.data["templates"].forEach(element => {
                if (element["template_id"] == id) {
                    // console.log(element["assets"])
                    return element["assets"]
                }
            })
        });
    }).on('error', err => {
        console.log('Error: ', err.message);
    });
}
getTemplatesNumbers("snld.wam", "19552")