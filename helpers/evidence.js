const {container } = require('codeceptjs');

var getEvidence = () => {
    var request = container.helpers().JSONResponse.response.config;
    var response = container.helpers().JSONResponse.response.data;
    var evidence = `
    ---------------------Request--------------------
    ${JSON.stringify(request, null, 2)}
    ---------------------Response-------------------
    ${JSON.stringify(response, null, 2)}
    --------------------Error cause-----------------`
    return (evidence)
};
exports.getEvidence = getEvidence;