export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};

export const isNullOrUndefined = (data) => {
	if (data !== null && typeof data !== 'undefined') {
		return false
	}

	return true
}

export const searchSite = (sources = [], query) => {
    return Array.from(sources).filter((site) => {
        var regex = new RegExp(query, 'i');

        return site.url.match(regex);
    })
}