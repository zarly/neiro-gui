
Users = new Meteor.Collection('Users');
Projects = new Meteor.Collection('Projects');

if (Users.find().count() === 0) {
    Users.insert({
        name: 'Alex',
        activeProjectName: 'MyFirstProject'
    });
}

if (Projects.find().count() === 0) {
    Projects.insert({
        name: 'MyFirstProject',
        owner: 'Alex',
        neirons: [],
        links: []
    });
}
