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
            category: '1546969049',
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

        return rndNumber > 5;
    };

    get(resource) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.canContinue()) {
                    resolve(data[resource]);
                } else {
                    reject('Cannot fetch' + resource);
                }
            }, 1000);
        });
    };
}

export default new FakeApi()