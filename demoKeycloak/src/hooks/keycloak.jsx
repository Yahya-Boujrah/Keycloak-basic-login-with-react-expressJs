import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: 'http://127.0.0.1:4000/',
    realm: 'My-realm',
    clientId: 'my-client'
});

export default keycloak
