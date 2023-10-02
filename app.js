function setPage(a){
    switch(a){
        case 1: document.getElementById('bodyH').innerHTML =`
            <div>
                <div id="information">
                    <h1>
                        Photography you can trust
                    </h1>
                    <div>
                        <p>
                            Any scene, Anywhere.
                        </p>
                    </div>
                </div>
                <div id="display">
                    <img src="images/124-3504x2336.jpg" alt="Boat in ocean" srcset="">
                </div> 
            </div>
            <img id="homeImage" src="images/133-2742x1828.jpg" alt="Two parked cars" srcset="">`
        break;
        case 2: document.getElementById('bodyH').innerHTML =`
            <div>
                <div id="information">
                    Elevate your project with this tranquil scene — a greyish hill overlooking a meandering river. Muted tones create a calming backdrop, perfect for conveying serenity and untouched landscapes.
                </div>
                <div id="display">
                    <img src="images/125-1500x1000.jpg" alt="Hill overlooking river" srcset="">
                </div>
            </div>
            <div>
                <div id="display" style="border-left: none; border-right: 2px solid white;">
                    <img src="images/127-4032x2272.jpg" alt="Forest" srcset=""style="border-left: none;">
                </div>
                <div id="information">
                    Nature's intricate details shine in this close-up of lush forest flora. Ideal for projects focused on biodiversity or the allure of nature's small wonders.
                </div>
            </div>
            <div>
                <div id="information">
                    Transport your audience with this breathtaking shot — from grass to a mountain-framed lake. Perfect for projects conveying adventure and the awe-inspiring grandeur of landscapes.
                </div>
                <div id="display">
                <img src="images/128-3823x2549.jpg" alt="Grass overlooking lake" srcset="">
                </div>
            </div>`
        break;
        case 3: document.getElementById('bodyH').innerHTML =`
            
                <div class="contactInformation">
                    <h1>Contact Me</h1>
                    <p>Thank you for your interest in contacting us. feel free to use the information below to guide us on our way to your next scene</p>
                </div>
                <div class="contactInformation">
                    <p>Email: <a href="">Johnsoncustomerservice@email.com.</a></p>
                    <p>Phone: +0 (000) 000-000</p>
                </div>
                <div class="contactInformation">
                <p>Peter & Johnson LTD<br>
                     123 Main Street<br>
                    City, State, ZIP Code</p>
                </div>
            `
        break;
    
    }
}
