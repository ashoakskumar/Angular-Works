

export class PersonData {
    createDb() {
        const personDetails = {
            id:1,
            name: 'kumar',
            dob: '2022-03-14',
            gender: 'male',
            location: 'TN',
            address: [
                {
                    state: 'Tamil Nadu',
                    country: 'India'
                },
                {
                    state: 'Tamil Nadu',
                    country: 'India'
                }
            ]
        };
        return {person:personDetails};
    }
}