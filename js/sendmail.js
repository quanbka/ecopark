let mailService = 'http://localhost:81';
let mailTo = 'nambcvt275@gmail.com';
let ignoreNames = [null, '_wpcf7', '_wpcf7_container_post', '_wpcf7_locale', '_wpcf7_unit_tag', '_wpcf7_version'];

function submitForm(element, event) {
    event.preventDefault();
    event.stopPropagation();
    let inputs = element.getElementsByTagName('input');
    let data = {};
    for (input of inputs) {
        let key = input.getAttribute('name');
        if (!ignoreNames.includes(key)) {
            data[key] = input.value;
        }
    }
    data.mailTo = mailTo;
    fetch(mailService + '/send-email', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(function (response) {
        return response.json();
    }).then(function (result) {
        if (result.status == 'successful') {
            alert('Gửi mail thành công');
        } else {
            alert('Gửi mail thất bại');
        }
    });
    return false;
}
