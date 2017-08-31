document.addEventListener("DOMContentLoaded", function () {
    formObject = document.getElementById('myForm');
    submitButton = document.getElementById('submitButton');
    resultContainer = document.getElementById('resultContainer');
    submitButton.addEventListener("click", myForm.submit);
});

var formObject = '';
var submitButton = '';
var resultContainer = '';

var myForm = {
    validate: function() {
        var validatedForm = {
            isValid: false,
            errorFields: []
        };
        var fioField = formObject['fio'];
        var emailField = formObject['email'];
        var phoneField = formObject['phone'];

        var fioValue = formObject['fio'].value;
        var emailValue = formObject['email'].value;
        var phoneValue = formObject['phone'].value;

        function validateFio() {
            if ( /^[A-z\u0400-\u04FF]{1,30}\s+[A-z\u0400-\u04FF]{1,30}\s+[A-z\u0400-\u04FF]{1,30}\s*$/.test(fioValue)) {
                if(validatedForm.errorFields.indexOf('fio') !== -1) {
                    validatedForm.errorFields.splice(validatedForm.errorFields.indexOf('fio'), 1 )
                }
                fioField.classList.remove('error')
            }
            else {
                validatedForm.errorFields.push('fio');
                fioField.classList.add('error')
            }
        };

        function validateEmail() {
            if (emailValue.trim().length) {
                if ( (/@ya.ru{1}/.test(emailValue) || /@yandex.(ru|ua|by|kz|com){1}/.test(emailValue)) && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue)) {

                    if(validatedForm.errorFields.indexOf('email') !== -1) {
                        validatedForm.errorFields.splice(validatedForm.errorFields.indexOf('email'), 1 );
                    }
                    emailField.classList.remove('error');
                }
                else {
                    emailField.classList.add('error');
                    validatedForm.errorFields.push('email');
                }
            }
            else {
                emailField.classList.add('error');
                validatedForm.errorFields.push('email');
            }
        };

        function validatePhone() {
            var regExpMail = /^\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/;
            if (regExpMail.test(phoneValue)) {
                var sum = 0;
                var nums = phoneValue.match(/\d+/g).join('');
                for (var i = 0; i < nums.length; i++) {
                    sum += +nums[i];
                }
                if (sum > 30) {
                    validatedForm.errorFields.push('phone');
                    phoneField.classList.add('error')
                }
                else {
                    if(validatedForm.errorFields.indexOf('phone') !== -1) {
                        validatedForm.errorFields.splice(validatedForm.errorFields.indexOf('phone'), 1 )
                    }
                    phoneField.classList.remove('error')
                }
            }
            else {
                validatedForm.errorFields.push('phone');
                phoneField.classList.add('error')
            }
        };
        validateFio();
        validateEmail();
        validatePhone();
        validatedForm.isValid = validatedForm.errorFields.length > 0 ? false : true;
        return validatedForm;
    },
    submit: function(e) {
        e.preventDefault();
        if (myForm.validate().isValid) {
            makeRequest();
        }
        function makeRequest() {
            var filesArray = [
                'success',
                'error',
                'progress'
            ];
            function getRandom(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }
            var addresName = filesArray[getRandom(0, 3)];
            var xmlHttp= new XMLHttpRequest();

            // POST Request with form params

            // var params = JSON.stringify(myForm.getData());
            // xmlHttp.open("POST", addresName+'.json', true);
            // xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            // xmlHttp.send(params)

            xmlHttp.open('GET', addresName+'.json', true);
            xmlHttp.send();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState != 4) return;
                submitButton.disabled = true;
                if (xmlHttp.status != 200) {
                    alert(xmlHttp.status + ': ' + xmlHttp.statusText);
                }
                else {
                    submitButton.disabled = false;
                    var response = JSON.parse(xmlHttp.response);
                    if (response.status === 'success') {
                        resultContainer.className = 'success';
                        resultContainer.innerHTML = response.status
                    }
                    else if (response.status === 'error') {
                        resultContainer.className = 'error';
                        resultContainer.innerHTML = response.status
                    }
                    else {
                        resultContainer.className = 'loading';
                        submitButton.disabled = true;
                        resultContainer.innerHTML = 'Loading...';
                        setTimeout(makeRequest, response.timeout)
                    }
                }
            }
        }
    },
    getData: function () {
        var inputs = formObject.getElementsByTagName("input");
        var resObject  = {};
        for (var i = 0; i < inputs.length; i++) {
            resObject[inputs[i].name] = inputs[i].value;
        }
        return resObject;
    },
    setData: function (object) {
        formObject['fio'].value = object.fio;
        formObject['email'].value = object.email;
        formObject['phone'].value = object.phone;
    }
};





