const activities = {
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
};

const canContinue = () => {
    const rndNumber = Math.floor(Math.random() * 10);

    return rndNumber > 5;
};

export const fetchActivities = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (canContinue()) {
                resolve(activities);
            } else {
                reject('Cannot fetch activities');
            }
        }, 1000);
    });
};

const generateUid = () => Math.floor(new Date() * Math.random())

export const createActivityAPI = (activity) => {
    activity.id = generateUid();
    activity.progress = 0;
    activity.createdAt = new Date();
    activity.updatedAt = new Date();

    return new Promise((resolve, reject) => {
        resolve(activity);
    });
};

export const fetchCategories = () => {
    return {
        '1546969049': {text: 'books', id: '1'},
        '1546969225': {text: 'movies', id: '2'}
    }
};

export const fetchUser = () => {
    return {
        name: 'Tokuyaman',
        id: 'Aj34jknvncx98812'
    }
};
