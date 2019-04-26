const data = {
    activities: {
        '1546968934': {
            id: '1546968934',
            title: 'Learn Vue.js',
            note: 'I have started since last week and it has good ',
            progress: 30,
            category: '1546969049',
            createdAt: 1546969144391,
            updatedAt: 1546969144391,
        },
        '1546969212': {
            id: '1546969212',
            title: 'Cooking Dinner',
            note: 'I have to buy eggs',
            progress: 60,
            category: '1546969225',
            createdAt: 1546969144391,
            updatedAt: 1546969144391,
        }
    },
    categories: {
        '1546969049': {text: 'books', id: '1'},
        '1546969225': {text: 'movies', id: '2'}
    }

};

class FakeApi {
    canContinue() {
        const rndNumber = Math.floor(Math.random() * 10);

        if (rndNumber > 5) {
            return true
        }
        return false
    };

    get(resource, {force = 0}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (force || this.canContinue()) {
                    resolve({...data[resource]});
                } else {
                    reject('Cannot fetch' + resource);
                }
            }, 1000);
        });
    };

    post(resource, item) {
        return new Promise((resolve, reject) => {
            data[resource][item.id] = item;
            resolve(item);
        });
    };
}

export default new FakeApi()