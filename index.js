// document.addEventListener("DOMContentLoaded", ready);
//
//
// var resultContainer;
// function ready() {
//
// }
//
// function submit(e) {
//
//     // myForm.validate();
//     // e.preventDefault();
//
//     // validateFio(dataFio.value);
//     // validateEmail(dataEmail.value);
//     // validatePhone(dataPhone.value);
//
//     // makeRequest ()
//     // function makeRequest() {
//     //     if (true) {
//     //         console.log('dataFioValidated && dataEmailValidated && dataEmailValidated')
//     //
//     //         var filesArray = [
//     //             'success',
//     //             'error',
//     //             'progress'
//     //         ];
//     //         function getRandom(min, max) {
//     //             return Math.floor(Math.random() * (max - min) + min);
//     //         }
//     //         var addresName = filesArray[getRandom(0, 3)]
//     //
//     //         var xmlHttp= new XMLHttpRequest();
//     //
//     //         xmlHttp.open('GET', addresName+'.json', true);
//     //
//     //         xmlHttp.send();
//     //
//     //         xmlHttp.onreadystatechange = function() {
//     //             if (xmlHttp.readyState != 4) return;
//     //
//     //              submitButton.disabled = true;
//     //
//     //             if (xmlHttp.status != 200) {
//     //                 // обработать ошибку
//     //                 alert(xmlHttp.status + ': ' + xmlHttp.statusText);
//     //             }
//     //             else {
//     //                 submitButton.disabled = false;
//     //                 var response = JSON.parse(xmlHttp.response);
//     //                 console.log(JSON.parse(xmlHttp.response));
//     //                 if (response.status === 'success') {
//     //                     resultContainer.classList.remove('error');
//     //                     resultContainer.classList.add('success');
//     //                     resultContainer.innerHTML = 'success'
//     //                 }
//     //                 else if (response.status === 'error') {
//     //                     resultContainer.classList.remove('success');
//     //                     resultContainer.classList.add('error');
//     //                     resultContainer.innerHTML = response.reason
//     //                 }
//     //                 else {
//     //                     resultContainer.removeAttribute('class')
//     //                     submitButton.disabled = true;
//     //                     setTimeout(makeRequest, response.timeout)
//     //
//     //                 }
//     //
//     //             }
//     //         }
//     //     }
//     // }
//
//
//
// }
//
// // console.log(dataFio.classList.add('error'))
// var validFioValid  = true;
// var dataEmailValid = true;
// var dataPhoneValid = true;
//
//
//
//
// // function validateFio(argFio) {
// //     if ( /^[A-z\u0400-\u04FF]{1,30}\s+[A-z\u0400-\u04FF]{1,30}\s+[A-z\u0400-\u04FF]{1,30}\s*$/.test(argFio)) {
// //         dataFioValidated = true;
// //     }
// //     else {
// //         dataFioValidated = false;
// //
// //         dataFio.classList.add('error')
// //     }
// // }
//
//
// // function validateEmail(email) {
// //     var validDomens = [
// //         '@ya.ru',
// //         '@yandex.ru',
// //         '@yandex.ua',
// //         '@yandex.by',
// //         '@yandex.kz',
// //         '@yandex.com'
// //     ];
// //     for (var i = 0; i < validDomens.length; i++) {
// //         var pattern ='[A-z]{3,30}';
// //         var reg = new RegExp(pattern+validDomens[i]);
// //
// //         if(reg.test(email)) {
// //             //    stop ex and errer
// //             dataEmailValidated = true;
// //             console.log('A')
// //             break;
// //         }
// //         else {
// //             dataEmailValidated = false
// //             dataEmail.classList.add('error')
// //         }
// //     }
// // }
// //
// // function validatePhone(em) {
// //     var regExpMail = /^\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/;
// //     if (regExpMail.test(em)) {
// //         var sum = 0;
// //         var nums = em.match(/\d+/g).join('')
// //         for (var i = 0; i < nums.length; i++) {
// //             sum += +nums[i];
// //
// //         }
// //         if (sum > 30) {
// //             dataPhoneValidated = false;
// //             dataPhone.classList.add('error')
// //         }
// //         else {
// //             dataPhoneValidated = true;
// //             dataPhone.classList.remove('error')
// //         }
// //     }
// //     else {
// //         dataPhoneValidated = false;
// //         dataPhone.classList.add('error')
// //     }
// // }
//
//
// var myForm = {
//    // form:  document.getElementById('myForm'),
//    //  formaa: document.getElementById('myForm'),
// // var form ;
// //
// // form = document.getElementById('myForm');
// // resultContainer = document.getElementById('resultContainer');
// // //submitButton
// // var submitButton = document.getElementById('submitButton');
// // submitButton.addEventListener('click', submit);
// //
// // var dataFio ;
// // var dataEmail;
// // var dataPhone;
// // dataFio   = form['fio'];
// // dataEmail = form['email'];
// // dataPhone = form['phone'];
// // dataFioValue   = dataFio.value;
// // dataEmailValue = dataEmail.value;
// // dataPhoneValue = dataPhone.value;
//
//
//     validate: function () {
//         var validatedForm = {
//             isValid: Boolean,
//             errorFields: []
//         };
//
//         console.log(this.formaa);
//
//         function validateFio(argFio) {
//             console.log(form['fio'].value)
//             if ( /^[A-z\u0400-\u04FF]{1,30}\s+[A-z\u0400-\u04FF]{1,30}\s+[A-z\u0400-\u04FF]{1,30}\s*$/.test(argFio)) {
//                 // dataFioValidated = true;
//
//                 if(validForm.indexOf('fio') !== -1) {
//                     validForm.errorFields.splice(validForm.indexOf('fio'), 1 )
//                 }
//             }
//             else {
//                 // dataFioValidated = false;
//                 validForm.errorFields.push('fio');
//                 dataFio.classList.add('error')
//             }
//         };
//
//         function validateEmail(email) {
//             var validDomens = [
//                 '@ya.ru',
//                 '@yandex.ru',
//                 '@yandex.ua',
//                 '@yandex.by',
//                 '@yandex.kz',
//                 '@yandex.com'
//             ];
//             for (var i = 0; i < validDomens.length; i++) {
//                 var pattern ='[A-z]{3,30}';
//                 var reg = new RegExp(pattern+validDomens[i]);
//
//                 if(reg.test(email)) {
//                     //    stop ex and errer
//                     // dataEmailValidated = true;
//
//                     if(validForm.indexOf('email') !== -1) {
//                         validForm.errorFields.splice(validForm.indexOf('email'), 1 )
//                     }
//
//                     dataEmail.classList.remove('error')
//                     break;
//                 }
//                 else {
//                     validForm.errorFields.push('email');
//                     dataEmail.classList.add('error')
//                 }
//             }
//         };
//
//         function validatePhone(em) {
//             var regExpMail = /^\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/;
//             if (regExpMail.test(em)) {
//                 var sum = 0;
//                 var nums = em.match(/\d+/g).join('')
//                 for (var i = 0; i < nums.length; i++) {
//                     sum += +nums[i];
//
//                 }
//                 if (sum > 30) {
//                     dataPhoneValidated = false;
//                     validForm.errorFields.push('phone');
//                     dataPhone.classList.add('error')
//                 }
//                 else {
//                     dataPhoneValidated = true;
//
//                     if(validForm.indexOf('phone') !== -1) {
//                         validForm.errorFields.splice(validForm.indexOf('phone'), 1 )
//                     }
//
//                     dataPhone.classList.remove('error')
//                 }
//             }
//             else {
//                 dataPhoneValidated = false;
//                 validForm.errorFields.push('phone');
//                 dataPhone.classList.add('error')
//             }
//         };
//         // dataFioValue   = dataFio.value;
//         // dataEmailValue = dataEmail.value;
//         // dataPhoneValue)
//         validatePhone(dataPhoneValue);
//         // coonsole.log(dataFio);
//         validateFio(dataFioValue);
//         validateEmail(dataEmailValue);
//         if (validForm.errorFields.length !== 0) {
//             validForm.isValid = false;
//         }
//         else {
//             validForm.isValid = true;
//         }
//         console.log(validForm);
//
//     },
//     getData: function () {
//         return obj;
//     },
//     setData: function (obj) {
//
//     },
//     submit: function () {
//         // this.myForm.validate();
//         // e.preventDefault();
//     }
// };





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
                testedEmailValue = emailValue.split(' ').join('');
                var testedEmailValue;
                console.log(emailValue);
                if (/([\w\d]{3,30}[@]{1}[ya]{2}[.]{1}[ru]{2})|([\w\d]{3,30}[@]{1}[yandex]{6}[.]{1}[ru|ua|by|kz|com]{2})/.test(testedEmailValue)) {
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
        console.log(validatedForm);
        return validatedForm;
    },
    submit: function(e) {
        e.preventDefault();
        if (myForm.validate().isValid) {
            console.log(JSON.stringify(myForm.getData()));
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
                    console.log(JSON.parse(xmlHttp.response));
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





