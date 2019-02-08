console.log("SONG CONTROLLER IS ON!");
// [START datastore_build_service]
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/google-cloud-node/#/docs/datastore/latest/guides/authentication
const { Datastore } = require('@google-cloud/datastore');
// Creates a client
const datastore = new Datastore();

// [START datastore_retrieve_entities]
async function listSongs() {
    const query = datastore.createQuery("Song");

    const [songs] = await datastore.runQuery(query);
    console.log('Songs:');
    songs.forEach(song => {
        // const songKey = song[datastore.KEY];
        console.log(song);
    });
}

require(`yargs`) // eslint-disable-line
  .command(`list`, `Lists all songs ordered by name.`, {}, listSongs)