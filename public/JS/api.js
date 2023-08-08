//*STATUS

await fetch("https://slotplatform-c2s.dev.digicode.ua/api/v1/status", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json",
        "Authorization": "d0d238e2-dfb9-4262-b156-31c7f94a3a6c",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Sec-GPC": "1",
        "If-None-Match": "W/\"73-uuuV9fNUKKZIFohR6XIOfGY6kFc\""
    },
    "referrer": "https://gemsoft-games.dev.digicode.ua/",
    "method": "GET",
    "mode": "cors"
});
//*RULES
await fetch("https://slotplatform-c2s.dev.digicode.ua/api/v1/rules", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json",
        "Authorization": "1f163ef3-c196-4ab7-9692-ee4aad3eb26b",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Sec-GPC": "1",
        "If-None-Match": "W/\"6ae-bNYpuCr/Z+MRaXSQ0PEnuscPMfk\""
    },
    "referrer": "https://gemsoft-games.dev.digicode.ua/",
    "method": "GET",
    "mode": "cors"
});
//*SPIN
await fetch("https://slotplatform-c2s.dev.digicode.ua/api/v1/spin", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json",
        "Authorization": "1f163ef3-c196-4ab7-9692-ee4aad3eb26b",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Sec-GPC": "1"
    },
    "referrer": "https://gemsoft-games.dev.digicode.ua/",
    "body": "{\"betPerLine\":1,\"coinValue\":50}",
    "method": "POST",
    "mode": "cors"
});
const url = new URL(window.location.href);
const searchParams = url.searchParams;
console.log('✅ searchParams    ', searchParams)

// searchParams.get('q'); // 'node'