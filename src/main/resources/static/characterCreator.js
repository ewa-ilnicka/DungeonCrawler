var globalHeroClass = '';

function sendAjaxRequest(heroClass) {
    sendAjaxArmorRequest(heroClass);
    sendAjaxWeaponRequest(heroClass);
    globalHeroClass = heroClass;
}

function sendAjaxArmorRequest(heroClass) {
    let outerSelection;
    fetch(`http://localhost:8080/charClassToArmor/` + heroClass, {
            method: 'get'
        })
        .then(function (response) {
            return response.json();
        }).then(async function (data) {
            outerSelection = data;
            data.forEach(e => {
                let selection = document.getElementById('selectArmor' + e);
                selection.disabled = false;
                selection.className = 'selection selection-primary armorImg';
            });
            const response = await fetch(`http://localhost:8080/charClassToArmor/`);
            const result = await response.json();
            result.forEach(elem => {
                let chainedSelect = document.getElementById('selectArmor' + elem.name);
                if (chainedSelect.className !== 'disabled' && !outerSelection.includes(elem.name)) {
                    chainedSelect.className = 'disabled';
                }
            });
        });
}

function sendAjaxWeaponRequest(heroClass) {
    let outerSelection;
    fetch(`http://localhost:8080/charClassToWeapon/` + heroClass, {
            method: 'get'
        })
        .then(function (response) {
            return response.json();
        }).then(async function (data) {
            outerSelection = data;
            data.forEach(e => {
                let selection = document.getElementById('selectWeapon' + e);
                selection.disabled = false;
                selection.className = 'selection selection-primary weaponImg';
            });
            const response = await fetch(`http://localhost:8080/charClassToWeapon/`);
            const result = await response.json();
            result.forEach(elem => {
                let chainedSelect = document.getElementById('selectWeapon' + elem.name);
                if (chainedSelect.className !== 'disabled' && !outerSelection.includes(elem.name)) {
                    chainedSelect.className = 'disabled';
                }
            });
        });
}

function selectArmor(armorName) {
    fetch(`http://localhost:8080/charClassToArmor`, {
            method: 'get'
        })
        .then(function (response) {
            return response.json();
        }).then(async function (data) {
            data.forEach(e => {
                let firstSelect = document.getElementById('selectArmor' + e.name);
                firstSelect.className = 'disabled';
            });
            let firstSelect = document.getElementById('selectArmor' + armorName);
            firstSelect.className = 'selection selection-success armorImg';
        });
}

function selectWeapon(weaponName) {
    fetch(`http://localhost:8080/charClassToWeapon`, {
            method: 'get'
        })
        .then(function (response) {
            return response.json();
        }).then(async function (data) {
            data.forEach(e => {
                let firstSelect = document.getElementById('selectWeapon' + e.name);
                firstSelect.className = 'disabled';
            });
            let firstSelect = document.getElementById('selectWeapon' + weaponName);
            firstSelect.className = 'selection selection-success weaponImg';
        });
}

function saveCharacter() {
    let request = new XMLHttpRequest();
    const url = `http://localhost:8080/saveCharacter`
    request.open("POST", url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    const name = document.getElementById('heroName').value;
    const surname = document.getElementById('heroSurname').value;
    const weaponName = document.getElementsByClassName('selection selection-success weaponImg')[0].innerText;
    const armorName = document.getElementsByClassName('selection selection-success armorImg')[0].innerText;
    const heroClass = globalHeroClass;
    const hero = {
        name: name,
        surname: surname,
        weaponName: weaponName,
        armorName: armorName,
        className: heroClass
    }
    const heroJSON = JSON.stringify(hero);
    request.send(heroJSON);
}