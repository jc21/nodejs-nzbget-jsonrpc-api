# NzbGet JSONRPC API Client

[![npm (scoped)](https://img.shields.io/npm/v/@jc21/nzbget-jsonrpc-api.svg?style=for-the-badge)](https://www.npmjs.com/package/@jc21/nzbget-jsonrpc-api)
[![npm (types)](https://img.shields.io/npm/types/@jc21/nzbget-jsonrpc-api.svg?style=for-the-badge)](https://www.npmjs.com/package/@jc21/nzbget-jsonrpc-api)
[![npm (licence)](https://img.shields.io/npm/l/@jc21/nzbget-jsonrpc-api.svg?style=for-the-badge)](https://www.npmjs.com/package/@jc21/nzbget-jsonrpc-api)

See: https://nzbget.net/api/

This client is designed for NZBGet v18+


### Usage

```javascript
const NzbGet = require('@jc21/nzbget-jsonrpc-api').Client;

let ng = new NzbGet('http://username:password@localhost:6789/jsonrpc');

// Using the helper method:
ng.listgroups()
    .then(groups => {
        console.log(groups);
    })
    .catch(err => {
        console.error('ERR:', err);
    });

// Or using the custom call method:
ng.call('listgroups')
    .then(groups => {
        console.log(result);
    })
    .catch(err => {
        console.error('ERR:', err);
    });
```


#### Helper Methods

These methods have the same method signature as the [API Documentation](https://nzbget.net/api/)

- `ng.version()`
- `ng.shutdown()`
- `ng.reload()`
- `ng.listgroups()`
- `ng.listfiles()`
- `ng.history()`
- `ng.append()`
- `ng.editqueue()`
- `ng.scan()`
- `ng.status()`
- `ng.getlog()`
- `ng.writelog()`
- `ng.loadlog()`
- `ng.servervolumes()`
- `ng.resetservervolume()`
- `ng.rate()`
- `ng.pausedownload()`
- `ng.resumedownload()`
- `ng.pausepost()`
- `ng.resumepost()`
- `ng.pausescan()`
- `ng.resumescan()`
- `ng.scheduleresume()`
- `ng.config()`
- `ng.loadconfig()`
- `ng.saveconfig()`
- `ng.configtemplates()`


### Compiling

```bash
npm install
tsc --project tsconfig.build.json
```
