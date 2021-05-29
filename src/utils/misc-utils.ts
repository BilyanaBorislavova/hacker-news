const getRandomItem = (arr: Array<any>) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}

export {
    getRandomItem,
}
