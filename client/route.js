Router.configure({
    // the default layout
    layoutTemplate: 'main'
});

Router.route('/', function () {
    this.render('firstPage');
    this.layout('mainNav');
});


Router.route('/second', function () {
    this.render('secondPage');
    this.layout('mainSide');
});