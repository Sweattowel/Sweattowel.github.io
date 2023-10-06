function chooseSite(a) {
    switch(a){
        case 1:
            document.getElementById('bodyH').innerHTML = `
            <link rel="stylesheet" href="EmployeeTracker.css">
    <div class="navBar">
        <button class="button" type="button" onclick="setPage(4)">ENTER</button>
        <button class="button" type="button" onclick="setPage(5)">REPORT</button>
        <button class="button" type="button" onclick="setPage(6)">INDEX</button>
    </div>
   <br>
<div class="buttonHolder">
    <button id="nextButton" onclick=ask()>Ask</button>
    <button id="clearAll" onclick="clearButton()">Destroy data</button>
</div>
    <div id="complaintBox"></div>
    <div id="completerowHolder"></div>
    <div id="weekSummary">
        
        The number of employees who worked less than 30 hours a week <span id="less30"></span>
        <br>
        The number of employees who worked more than 40 hours a week <span id="more40"></span>
        <br>
        The number of employees who worked between 37-39 hours. <span id="goodhour"></span>

    </div>
            `
            break;
        case 2:
            document.getElementById('bodyH').innerHTML = `
            <body id="body">
            <div class="head">
                <h1>Peter & Johnson LTD</h1>
            </div>
            <div class="navbar">
                <button type="button" onclick="setPage(1)">HOME</button>
                <button type="button" onclick="setPage(2)">GALLERY</button>
                <button type="button" onclick="setPage(3)">CONTACT</button>
            </div>
            <div id="myCanvas"></div>
                <div id="bodyH">
                    <div>
                        <div id="information" >
                            <h1 style="border-right: 1px solid white; height: 350px; align-items: center; display: flex;">
                                Photography you can trust
                            </h1>
                            <div >
                                <p style=" border-bottom: 1px solid white; margin-left: 0;">
                                    Any scene, Anywhere.
                                </p>
                            </div>
                        </div>
                        <div class="display" >
                            <img id="homeIMG" src="images/124-3504x2336.jpg" alt="Boat in ocean" srcset="">
                        </div> 
                    </div>
                    <img id="homeImage" src="images/133-2742x1828.jpg" alt="Two parked cars" srcset="">
                    
                </div>
 
                <div class="footer">
                    <div class="socials">
                        <div id="face">
                            <a class="socialMediaImage" href="https://www.facebook.com/" target="_blank"><img src="images/socialfacebook.png" alt="Facebook" srcset=""></a>
                        </div>
                        <div id="inst">
                            <a class="socialMediaImage" href="https://www.instagram.com/" target="_blank"><img src="images/socialinstagram.png" alt="Facebook" srcset=""></a>
                        </div>
                        <div id="link">
                            <a class="socialMediaImage" href="https://linkedin.com/" target="_blank"><img src="images/sociallinkedin.png" alt="Facebook" srcset=""></a>
                        </div>
                    </div>
                <div class="copyright">
                    © 2023 Peter & Johnson LTD. All rights reserved. Unauthorized use of content on this site is prohibited. 
                    For licensing inquiries, contact Johnsoncustomerservice@email.com.
                    https://sweattowel.github.io/
                </div>
                <button type="button" onclick="returnPage()">RETURN HOME</button>
                        `
            break;
    }
}