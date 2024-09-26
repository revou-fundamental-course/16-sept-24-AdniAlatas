//ini javascripts



function replaceName() {
    let name = prompt('Masukkan nama anda');
    console.log(name);
    document.getElementById('user-name').innerHTML = name;
}

function validateForm() {
    let inputName= document.getElementById('input-name').value;
    if (inputName == '') {
        alert('Inputan Kosong')
    } else {
        document.getElementById('result-form').innerHTML = inputName;
        alert('Sukses Submit Form');
    }
    console.log(inputName);
}

document.getElementById('submit-btn').addEventListener