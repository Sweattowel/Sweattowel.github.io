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

function ask() {
        let askedCount = parseInt(localStorage.getItem('askedCount')) || 0;
        let dataCount = parseInt(localStorage.getItem('dataCount')) || 0;
        let complaint = document.createElement('div')
        let less30 = parseInt(localStorage.getItem('less30')) || 0;
        let more40 = parseInt(localStorage.getItem('more40')) || 0;
        let goodhour = parseInt(localStorage.getItem('goodhour')) || 0;


    if (dataCount < 8){
    switch (askedCount) {
        case 0:
            complaint.innerHTML = 'creating report please enter data'
            document.getElementById('complaintBox').appendChild(complaint)
            let weekInput;
            do {
                weekInput = window.prompt(`What week please`);
            } while (weekInput === null || isNaN(weekInput) || weekInput == '');
            localStorage.setItem('week', weekInput);
            /////////////////
            let idInput;
            do {
                idInput = window.prompt(`ID please`);
            } while (idInput === null || isNaN(idInput) || idInput == '');
            
            if (idInput == null) {
                // If the user cancels, reset the askedCount to 0
                localStorage.setItem('askedCount', 0);
            } else {
                localStorage.setItem('id', idInput);
                localStorage.setItem('askedCount', 1);
            }
            complaint.innerHTML = `creating report for ${idInput} during week ${weekInput} please enter data`
            document.getElementById('complaintBox').appendChild(complaint)
            break;
        case 1:
            if (localStorage.getItem('id') == null || localStorage.getItem('id') == '') {
                let idInput;
            do {
                idInput = window.prompt(`ID please`);
            } while (isNaN(idInput) || idInput == '');
            localStorage.setItem('id', idInput);
            localStorage.setItem('askedCount', 1);
            }
            let nameInput;
            do {
                nameInput = window.prompt(`Name please`);
            } while (!isNaN(nameInput) || nameInput == '');
            localStorage.setItem('name', nameInput);
            localStorage.setItem('askedCount', 2);
            break;
        case 2:
            let mondayInput;
            do {
                mondayInput = window.prompt(`Monday hours please`);
            } while (isNaN(mondayInput) || mondayInput == '');
            localStorage.setItem('mondayHours', mondayInput);
            localStorage.setItem('askedCount', 3);
            
            if (mondayInput < 4){
                complaint.innerHTML = 'insufficient hours worked on Monday'
            } else if (mondayInput > 10){
                complaint.innerHTML = 'Too many hours worked on Monday'
            } else {
                complaint.innerHTML = 'Good work!'
            }
                document.getElementById('complaintBox').appendChild(complaint)
            break;
        case 3:
            let tuesdayInput;
            do {
                tuesdayInput = window.prompt(`Tuesday hours`);
            } while (isNaN(tuesdayInput) || tuesdayInput == '');
            localStorage.setItem('tuesdayHours', tuesdayInput);
            localStorage.setItem('askedCount', 4);
            
            if (tuesdayInput < 4){
                complaint.innerHTML = 'insufficient hours worked on Tuesday'
            } else if (tuesdayInput > 10){
                complaint.innerHTML = 'Too many hours worked on Tuesday'
            } else {
                complaint.innerHTML = 'Good work!'
            }
                document.getElementById('complaintBox').appendChild(complaint)
            break;
        case 4:
            let wednesdayInput;
            do {
                wednesdayInput = window.prompt(`Wednesday hours please`);
            } while (isNaN(wednesdayInput) || wednesdayInput == '');
            localStorage.setItem('wednesdayHours', wednesdayInput);
            localStorage.setItem('askedCount', 5);
            if (wednesdayInput < 4){
                complaint.innerHTML = 'insufficient hours worked on Wednesday'
            } else if (wednesdayInput > 10){
                complaint.innerHTML = 'Too many hours worked on Wednesday'
            } else {
                complaint.innerHTML = 'Good work!'
            }
                document.getElementById('complaintBox').appendChild(complaint)
            break;
        case 5:
            let thursdayInput;
            do {
                thursdayInput = window.prompt(`Thursday hours please`);
            } while (isNaN(thursdayInput) || thursdayInput == '');
            localStorage.setItem('thursdayHours', thursdayInput);
            localStorage.setItem('askedCount', 6);
            if (thursdayInput < 4){
                complaint.innerHTML = 'insufficient hours worked on Thursday'
            } else if (thursdayInput > 10){
                complaint.innerHTML = 'Too many hours worked on Thursday'
            } else {
                complaint.innerHTML = 'Good work!'
            }
                document.getElementById('complaintBox').appendChild(complaint)
            break;
        case 6:
            let fridayInput;
            do {
                fridayInput = window.prompt(`Friday hours please`);
            } while (isNaN(fridayInput) || fridayInput == '');
            localStorage.setItem('fridayHours', fridayInput);
            localStorage.setItem('askedCount', 7);
            if (fridayInput < 4){
                complaint.innerHTML = 'insufficient hours worked on Friday'
            } else if (fridayInput > 10){
                complaint.innerHTML = 'Too many hours worked on Friday'
            } else {
                complaint.innerHTML = 'Good work!'
            }
                document.getElementById('complaintBox').appendChild(complaint)
            // Retrieve all the information from local storage and create an array
            const week = localStorage.getItem('week')
            const id = localStorage.getItem('id');
            const name = localStorage.getItem('name');
            const mondayHours = localStorage.getItem('mondayHours');
            const tuesdayHours = localStorage.getItem('tuesdayHours');
            const wednesdayHours = localStorage.getItem('wednesdayHours');
            const thursdayHours = localStorage.getItem('thursdayHours');
            const fridayHours = localStorage.getItem('fridayHours');
            const totalHours = parseInt(mondayHours) + parseInt(tuesdayHours) + parseInt(wednesdayHours) + parseInt(thursdayHours) + parseInt(fridayHours) 
            let hourCounting = ''
            if (totalHours >= 40){
                hourCounting = 'You are working too hard!!'
                more40++
            } else if (totalHours <= 30){
                hourCounting = 'You didn’t do enough work this week'
                less30++
            } else if (totalHours >= 31 && totalHours <= 39){
                hourCounting = 'Good work!!'
                goodhour++
            }


            
            const currentIndiv = document.createElement('div')
            currentIndiv.innerHTML = 
            `Summary for employee ${name} <br> Week: ${week} ID: ${id} Name: ${name} M: ${mondayHours} T: ${tuesdayHours} W: ${wednesdayHours} T: ${thursdayHours} F: ${fridayHours} Total hours: ${totalHours}, ${hourCounting}`;
            document.getElementById('completerowHolder').appendChild(currentIndiv)
            // Update dataCount and store it in local storage
            localStorage.setItem(id.toString(), JSON.stringify([id, name, mondayHours, tuesdayHours, wednesdayHours, thursdayHours, fridayHours]));
            dataCount++;
            localStorage.setItem('dataCount', dataCount.toString());

            localStorage.setItem('askedCount', 0);
            if (document.getElementById('complaintBox').innerHTML != '') {
                document.getElementById('complaintBox').innerHTML = ''
            }
            break;
    }
} else {
     let a = window.prompt('Too many employees, wipe them from reality? Y/N')
     if (a == 'y'){
        localStorage.clear()
     } else {
        let b = window.prompt('employees will remain cry? Y/N')
        while (b == 'y') { 
            b = window.prompt('boo Y/N')
            b = window.prompt('hoo Y/N')
        } 
     }
}
}

function clearButton(){
    localStorage.clear()
    document.getElementById('complaintBox').innerHTML = ''
    document.getElementById('completerowHolder').innerHTML = ''
}
