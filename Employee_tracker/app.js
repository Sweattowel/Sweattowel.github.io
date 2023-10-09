/*
old redundant code kept for archival and educational purposes concerning cleanup
function next() {
    const mondayEntry = document.createElement('div')
    mondayEntry.innerHTML = `<input type ="Number" id="mondayHour">Enter monday hours</input>`
    const tuesdayEntry = document.createElement('div')
    tuesdayEntry.innerHTML = `<input type ="Number" id="tuesdayHour">Enter tuesday hours</input>`
    const wednesdayEntry = document.createElement('div')
    wednesdayEntry.innerHTML = `<input type ="Number" id="wednesdayHour">Enter wednesday hours</input>`
    const thursdayEntry = document.createElement('div')
    thursdayEntry.innerHTML = `<input type ="Number" id="thursdayHour">Enter thursday hours</input>`
    const fridayEntry = document.createElement('div')
    fridayEntry.innerHTML = `<input type ="Number" id="fridayHour">Enter friday hours</input>`

        const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    
        for (const day of weekDays) {
            const entry = document.createElement('div');
            entry.innerHTML = `<input type="number" id="${day.toLowerCase()}Hour" placeholder="Enter ${day} hours">`;
            document.getElementById('enterForm').appendChild(entry);
        }
}
*/

window.onload = function() {
    startUp();
};
function ask() {
        peopleCount()
        let dataCount = parseInt(sessionStorage.getItem('dataCount')) || 0;
        let askedCount = parseInt(sessionStorage.getItem('askedCount')) || 0;
        let employeeCount = parseInt(localStorage.getItem('employeeCount')) || 0;
        let complaint = document.createElement('div')
        let less30 = parseInt(localStorage.getItem('less30')) || 0;
        let more40 = parseInt(localStorage.getItem('more40')) || 0;
        let goodhour = parseInt(localStorage.getItem('goodhour')) || 0;

    
    if (employeeCount !== 8){
    switch (askedCount) {
        case 0:
            complaint.innerHTML = 'creating report please enter data'
            document.getElementById('complaintBox').appendChild(complaint)
            let weekInput;
            do {
                weekInput = window.prompt(`What week please`);
            } while (weekInput === null || isNaN(weekInput) || weekInput == '');
            sessionStorage.setItem('week', weekInput);
            /////////////////
            let idInput;
            do {
                idInput = window.prompt(`ID please`);
            } while (idInput === null || isNaN(idInput) || idInput == '');
            
            if (idInput == null) {
                // If the user cancels, reset the askedCount to 0
                sessionStorage.setItem('askedCount', 0);
            } else {
                sessionStorage.setItem('id', idInput);
                sessionStorage.setItem('askedCount', 1);
            }
            complaint.innerHTML = `creating report for ${idInput} during week ${weekInput} please enter data`
            document.getElementById('complaintBox').appendChild(complaint)
            document.getElementById('nextASK').innerText = 'Enter id'

            break;
        case 1:
            if (sessionStorage.getItem('id') == null || sessionStorage.getItem('id') == '') {
                let idInput;
            do {
                idInput = window.prompt(`ID please`);
            } while (isNaN(idInput) || idInput == '');
            sessionStorage.setItem('id', idInput);
            sessionStorage.setItem('askedCount', 1);
            
            }
            let nameInput;
            do {
                nameInput = window.prompt(`Name please`);
            } while (!isNaN(nameInput) || nameInput == '');
            sessionStorage.setItem('name', nameInput);
            sessionStorage.setItem('askedCount', 2);
            document.getElementById('nextASK').innerText = 'Enter Monday hours'
            break;
        case 2:
            let mondayInput;
            do {
                mondayInput = window.prompt(`Monday hours please`);
            } while (isNaN(mondayInput) || mondayInput == '');
            sessionStorage.setItem('mondayHours', mondayInput);
            sessionStorage.setItem('askedCount', 3);
            
            if (mondayInput < 4){
                complaint.innerHTML = 'insufficient hours worked on Monday'
            } else if (mondayInput > 10){
                complaint.innerHTML = 'Too many hours worked on Monday'
            } else {
                complaint.innerHTML = 'Good work!'
            }
                document.getElementById('complaintBox').appendChild(complaint)
                document.getElementById('nextASK').innerText = 'Enter Tuesday hours'
            break;
        case 3:
            let tuesdayInput;
            do {
                tuesdayInput = window.prompt(`Tuesday hours`);
            } while (isNaN(tuesdayInput) || tuesdayInput == '');
            sessionStorage.setItem('tuesdayHours', tuesdayInput);
            sessionStorage.setItem('askedCount', 4);
            
            if (tuesdayInput < 4){
                complaint.innerHTML = 'insufficient hours worked on Tuesday'
            } else if (tuesdayInput > 10){
                complaint.innerHTML = 'Too many hours worked on Tuesday'
            } else {
                complaint.innerHTML = 'Good work!'
            }
                document.getElementById('complaintBox').appendChild(complaint)
                document.getElementById('nextASK').innerText = 'Enter Wednesday hours'
            break;
        case 4:
            let wednesdayInput;
            do {
                wednesdayInput = window.prompt(`Wednesday hours please`);
            } while (isNaN(wednesdayInput) || wednesdayInput == '');
            sessionStorage.setItem('wednesdayHours', wednesdayInput);
            sessionStorage.setItem('askedCount', 5);
            if (wednesdayInput < 4){
                complaint.innerHTML = 'insufficient hours worked on Wednesday'
            } else if (wednesdayInput > 10){
                complaint.innerHTML = 'Too many hours worked on Wednesday'
            } else {
                complaint.innerHTML = 'Good work!'
            }
                document.getElementById('complaintBox').appendChild(complaint)
                document.getElementById('nextASK').innerText = 'Enter Thursday hours'
            break;
        case 5:
            let thursdayInput;
            do {
                thursdayInput = window.prompt(`Thursday hours please`);
            } while (isNaN(thursdayInput) || thursdayInput == '');
            sessionStorage.setItem('thursdayHours', thursdayInput);
            sessionStorage.setItem('askedCount', 6);
            if (thursdayInput < 4){
                complaint.innerHTML = 'insufficient hours worked on Thursday'
            } else if (thursdayInput > 10){
                complaint.innerHTML = 'Too many hours worked on Thursday'
            } else {
                complaint.innerHTML = 'Good work!'
            }
                document.getElementById('complaintBox').appendChild(complaint)
                document.getElementById('nextASK').innerText = 'Enter Friday hours'
            break;
        case 6:
            let fridayInput;
            do {
                fridayInput = window.prompt(`Friday hours please`);
            } while (isNaN(fridayInput) || fridayInput == '');
            sessionStorage.setItem('fridayHours', fridayInput);
            sessionStorage.setItem('askedCount', 7);
            if (fridayInput < 4){
                complaint.innerHTML = 'insufficient hours worked on Friday'
            } else if (fridayInput > 10){
                complaint.innerHTML = 'Too many hours worked on Friday'
            } else {
                complaint.innerHTML = 'Good work!'
            }
                document.getElementById('complaintBox').appendChild(complaint)
            // Retrieve all the information from local storage and create an array
            const week = sessionStorage.getItem('week')
            const id = sessionStorage.getItem('id');
            const name = sessionStorage.getItem('name');
            const mondayHours = sessionStorage.getItem('mondayHours');
            const tuesdayHours = sessionStorage.getItem('tuesdayHours');
            const wednesdayHours = sessionStorage.getItem('wednesdayHours');
            const thursdayHours = sessionStorage.getItem('thursdayHours');
            const fridayHours = sessionStorage.getItem('fridayHours');
            const totalHours = parseInt(mondayHours) + parseInt(tuesdayHours) + parseInt(wednesdayHours) + parseInt(thursdayHours) + parseInt(fridayHours) 
            let hourCounting = ''
            if (totalHours >= 40){
                hourCounting = 'You are working too hard!!'
                more40++
                let more40Count = localStorage.getItem('more40Count')

                if(more40Count){
                    more40Count = parseInt(more40Count, 10) + 1
                } else {
                    more40Count = more40
                }
                localStorage.setItem('more40Count', more40Count)
            } else if (totalHours <= 30){
                hourCounting = 'You didn’t do enough work this week'
                less30++
                let less30Count = localStorage.getItem('less30Count')

                if(less30Count){
                    less30Count = parseInt(less30Count, 10) + 1
                } else {
                    less30Count = less30
                }
                localStorage.setItem('less30Count', less30Count)
            } else if (totalHours >= 31 && totalHours <= 39){
                hourCounting = 'Good work!!'
                goodhour++
                let goodhourCount = localStorage.getItem('goodhourCount')

                if(goodhourCount){
                    goodhourCount = parseInt(goodhourCount, 10) + 1
                } else {
                    goodhourCount = goodhour
                }
                localStorage.setItem('goodhourCount', goodhourCount)
            }

            sessionStorage.setItem('askedCount', 0);
            const currentIndiv = document.createElement('div')
            currentIndiv.innerHTML = 
            `<div class="indiv"><p>${name} Week ${week} TOTAL:${totalHours}</p> 
            <p> Week: ${week} ID: ${id} Name: ${name} M: ${mondayHours} T: ${tuesdayHours} W: ${wednesdayHours} T: ${thursdayHours} F: ${fridayHours} Total hours: ${totalHours}, ${hourCounting}</p></div>`;
            document.getElementById('completerowHolder').appendChild(currentIndiv)
            // Update dataCount and store it in local storage
            
            localStorage.setItem(`${week.toString()},${id.toString()}`, JSON.stringify([week, id, name, mondayHours, tuesdayHours, wednesdayHours, thursdayHours, fridayHours]));
            dataCount++;
            localStorage.setItem('dataCount', dataCount.toString());
            document.getElementById('nextASK').innerText = 'Enter week'
            sessionStorage.setItem('askedCount', 0);
            if (document.getElementById('complaintBox').innerHTML != '') {
                document.getElementById('complaintBox').innerHTML = ''
            }
            peopleCount()
            countData()
            updateCount()
            break;
    }
} else {
     let a = window.prompt('Too many employees, wipe them from reality? Y/N')
     if (a == 'y'){
        localStorage.clear()
        document.getElementById('completerowHolder').innerHTML = ''
        dataCount = 0
     } else {
        let b = window.prompt('employees will remain... cry? Y/N')
        while (b == 'y') { 
            b = window.prompt('boo Y/N')
            b = window.prompt('hoo Y/N')
        } 
     }
}
}

// displays on load and fixes issues regarding maxed askedCount 
function startUp() {
    if (sessionStorage.getItem('askedCount') == 7 || sessionStorage.getItem('askedCount') == '7') {
        sessionStorage.setItem('askedCount', 0);
    }
    document.getElementById('employeeCount').innerText = `You have ${localStorage.getItem('employeeCount')} employees`
    checkForid()
    countData()
}
function updateCount() {
    document.getElementById('employeeCount').innerText = `You have ${localStorage.getItem('employeeCount')} employees`
}
function checkForid() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key !== 'less30Count' && key !== 'more40Count' && key !== 'goodhourCount' && key !== 'dataCount' && key !== 'employeeCount') {
            const value = JSON.parse(localStorage.getItem(key));
            console.log(key)
            // Construct the HTML structure based on the data
            const itemElement = document.createElement('div');
            let storeHtotal = (parseInt(value[3]) + parseInt(value[4]) + parseInt(value[5]) + parseInt(value[6]) + parseInt(value[7]));
            let storeCompaint = ''
            
            if (storeHtotal >= 40){
                storeCompaint = 'You are working too hard!!'
            } else if (storeHtotal <= 30){
                storeCompaint = 'You didn’t do enough work this week'
            } else if (storeHtotal >= 31 && storeHtotal <= 39){
                storeCompaint = 'Good work!!'
                
            }

            itemElement.innerHTML = `<div class="indiv"> <p>${value[2]} Week ${value[0]} TOTAL:${storeHtotal}</p>
                <p>Week: ${value[0]} ID: ${value[1]} Name: ${value[2]} M: ${value[3]} T: ${value[4]} W: ${value[5]} T: ${value[6]} F: ${value[7]} Total hours: ${storeHtotal}, ${storeCompaint}</p>
                </div>`;
            let rowHolder = document.getElementById('completerowHolder')
            if (rowHolder){
                document.getElementById('completerowHolder').appendChild(itemElement);
            }
            
        }
    }
}

function clearButton() {
    const userConfirmation = window.prompt('Delete all data? Enter Y/N');

    if (userConfirmation && userConfirmation.toUpperCase() === 'Y') {
        localStorage.clear();
        countData(); // Update the displayed data after clearing local storage
    }
    document.getElementById('completerowHolder').innerHTML = ''
}
function countData() {
    let aValue = localStorage.getItem('less30Count') || 0;
    let bValue = localStorage.getItem('more40Count') || 0;
    let cValue = localStorage.getItem('goodhourCount') || 0;
    if (document.getElementById('less30')){
        document.getElementById('less30').innerText = `${aValue}`;
    }
    if (document.getElementById('more40')){
        document.getElementById('more40').innerText = `${bValue}`;
    }
    if (document.getElementById('goodhour')){
        document.getElementById('goodhour').innerText = `${cValue}`;
    }
}

function collectReports(a) {
    document.getElementById('reportCollector').innerHTML = ''
    if (localStorage.length == 0 || a == 0 || a == '' || a < 0){
        const noData = document.createElement('div')
        noData.innerHTML = '<h1 class="button"> NO DATA </h1>'
        document.getElementById('reportCollector').appendChild(noData);
    }
    let idcount = 1
    




let orderedReports = [];
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key !== 'less30Count' && key !== 'more40Count' && key !== 'goodhourCount' && key !== 'dataCount' && idcount <= a && key !== 'employeeCount') {
    orderedReports.push(localStorage.key(i));
    }
}


orderedReports.sort((a, b) => {
    const aFirstChar = a.charAt(0);
    const bFirstChar = b.charAt(0);

    if (aFirstChar < bFirstChar) {
        return -1;
    } else if (aFirstChar > bFirstChar) {
        return 1;
    } else {
        return 0;
    }
});

    for (let i = 0; i < orderedReports.length; i++) {
        const key = orderedReports[i];

        if (key !== 'less30Count' && key !== 'more40Count' && key !== 'goodhourCount' && key !== 'dataCount' && idcount <= a && key !== 'employeeCount') {
            const value = JSON.parse(localStorage.getItem(key));
            
            // Construct the HTML structure based on the data
            const itemElement = document.createElement('div');
            let storeHtotal = (parseInt(value[3]) + parseInt(value[4]) + parseInt(value[5]) + parseInt(value[6]) + parseInt(value[7]));
            let storeCompaint = ''
            
            if (storeHtotal >= 40){
                storeCompaint = 'You are working too hard!!'
            } else if (storeHtotal <= 30){
                storeCompaint = 'You didn’t do enough work this week'
            } else if (storeHtotal >= 31 && storeHtotal <= 39){
                storeCompaint = 'Good work!!'
                
            }
            itemElement.innerHTML = `<div class="indiv"> <p>${value[2]} Week ${value[0]} TOTAL:${storeHtotal}</p>
                <p>Week: ${value[0]} ID: ${value[1]} Name: ${value[2]} M: ${value[3]} T: ${value[4]} W: ${value[5]} T: ${value[6]} F: ${value[7]} Total hours: ${storeHtotal}, ${storeCompaint}</p>
                </div>`;

            document.getElementById('reportCollector').appendChild(itemElement);
            idcount++
        }
    }
}
// function for counting the amount of employees regardless of the amount of week entries
function peopleCount(){
    let count = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key !== 'less30Count' && key !== 'more40Count' && key !== 'goodhourCount' && key !== 'dataCount' && key !== 'peopleCount') {            
            if (count.includes(key.split(',')[1])){
                continue;
            } else {
                count.push(key.split(',')[1])
            }
        }
    }
    localStorage.setItem('employeeCount', (count.length - 1))
}


function specificWeek(weekWanted) {
    let Lcount = 0
    let Mcount = 0
    let Gcount = 0
    let weekWantedStr = typeof weekWanted === 'string' ? weekWanted : JSON.stringify(weekWanted);
    document.getElementById('employee1').innerText = '0'
    document.getElementById('employee2').innerText = '0'
    document.getElementById('employee3').innerText = '0'
    document.getElementById('employee4').innerText = '0'
    document.getElementById('employee5').innerText = '0'
    document.getElementById('employee6').innerText = '0'
    document.getElementById('employee7').innerText = '0'
    let orderedReports = [];
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (
            key !== 'less30Count' &&
            key !== 'more40Count' &&
            key !== 'goodhourCount' &&
            key !== 'dataCount' &&
            key !== 'employeeCount'
        ) {
            orderedReports.push(localStorage.getItem(key));
        }
    }
    
    orderedReports = orderedReports.filter(report => JSON.parse(report)[0] === weekWantedStr);
    for (let i = 0; i < orderedReports.length; i++) {
        let keyValues = JSON.parse(orderedReports[i]);
        let m = parseInt(keyValues[3]);
        let t = parseInt(keyValues[4]);
        let w = parseInt(keyValues[5]);
        let th = parseInt(keyValues[6]);
        let f = parseInt(keyValues[7]);
        let total = m += t += w += th += f;
        if (total <= 30 ){
            Lcount++;
        } else if ( total >= 40){
            Mcount++
        } else if (total > 30 && total < 40){
            Gcount++
        }
    
        document.getElementById(`employee${i + 1}`).innerText = total;
    }

    document.getElementById('less30R').innerText = Lcount
    document.getElementById('more40R').innerText = Mcount
    document.getElementById('goodHourR').innerText = Gcount

}