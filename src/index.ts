// The things that are being exported here will be able
// to be imported in another package.
import { Helloworld } from './contracts/helloworld.js'
// run npm run compile to generate artifacts
import artifact from '../artifacts/contracts/helloworld.json'
;(() => {
    Helloworld.loadArtifact(artifact)
})()

export { Helloworld }
