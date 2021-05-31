const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const timestampToDate = (timestamp: number) => {
    const timestampToDate = new Date(timestamp * 1000);
    const year = timestampToDate.getFullYear();
    const month = months[timestampToDate.getMonth()];
    const date = timestampToDate.getDate();
    const hour = timestampToDate.getHours();
    const min = timestampToDate.getMinutes();
    const sec = timestampToDate.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

export {
    timestampToDate,
}
