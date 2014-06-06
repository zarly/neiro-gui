
Template.ProjectsView.helpers({
    activeProject: function () {
        var user = Users.findOne({name: 'Alex'});
        return Projects.findOne({name: user.activeProjectName});
    },
    projects: function () {
        return Projects.find().fetch();
    }
});
