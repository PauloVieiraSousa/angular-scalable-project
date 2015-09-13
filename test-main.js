var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        } else {
        }
    }
}

requirejs.config({
    baseUrl: '/base/app/',
    paths: {
        angular: 'vendor/angular/angular',
        'angular-mocks': 'vendor/angular-mocks/angular-mocks',
        'angular-route': 'vendor/angular-route/angular-route',
        'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
        bootstrap: 'vendor/bootstrap/dist/js/bootstrap'
    },
    packages: [

    ],
    shim: {
        'angular-ui-router': {
            deps: [
                'angular',
                'angular-route'
            ]
        },
        'angular-route': {
            deps: [
                'angular'
            ]
        }
    },
    deps: tests,
    callback: window.__karma__.start
});