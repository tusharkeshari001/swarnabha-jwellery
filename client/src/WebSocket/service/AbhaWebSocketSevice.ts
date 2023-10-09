export const getWSSubsctriptionURL = (userid:any) => {
    // return `/user/${userid}`;
    return `user/${userid}/queue`;
    // return `/user`;
}