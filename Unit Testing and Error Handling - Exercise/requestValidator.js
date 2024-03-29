function requestValidator(obj) {
    const { method, uri, version, message } = obj;
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!validMethods.includes(method) || method === undefined) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    const uriPattern = /^([\w.])+$|^\*$/;

    if (!uriPattern.exec(uri) || uri === undefined) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!validVersions.includes(version) || version === undefined) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    const messagePattern = /^[^<>\\&\'\"]+$/;

    if ((!messagePattern.exec(message) && message !== '') || message === undefined) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return obj;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});
