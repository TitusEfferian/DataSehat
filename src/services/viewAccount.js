

import { xhr, GET } from "./api";

export function viewAccount() {
    return xhr('https://horizon-testnet.stellar.org/accounts/GDM757VR5IQ5K3ZZW4VL5ONK2S4ISIFR7UU22CDRKZC34MKECRU7KFXV', GET, null, null);
}