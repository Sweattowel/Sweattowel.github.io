function setPage(a){
    switch(a){
        case 1: document.getElementById('bodyH').innerHTML =`
            <div>
                <div id="information" >
                    <h1 style="border-right: 1px solid white; height: 350px; align-items: center; display: flex;">
                        Photography you can trust
                    </h1>
                    <div>
                    <p style=" border-bottom: 1px solid white; margin-left: 0;">
                    Any scene, Anywhere.
                </p>
                    </div>
                </div>
                <div class="display">
                    <img src="images/124-3504x2336.jpg" alt="Boat in ocean" srcset="">
                </div> 
            </div>
            <img id="homeImage" src="images/133-2742x1828.jpg" alt="Two parked cars" srcset="">`
        break;
        // :) 
        case 2: document.getElementById('bodyH').innerHTML =`
           
                <div id="information" style="margin-top: -12vh; margin-bottom: -12vh;">
                    <h1>Enjoy our everchanging catalogue </h1>
                </div>
            
            <div>
                <div id="information" style="border-right: 2px solid white; border-top: 2px solid white">
                    Elevate your project with this tranquil scene — a greyish hill overlooking a meandering river. Muted tones create a calming backdrop, perfect for conveying serenity and untouched landscapes.
                </div>
                <div class="display" style="border-top: 2px solid white">
                    <img src="images/125-1500x1000.jpg" alt="Hill overlooking river" srcset="">
                </div>
            </div>
            <div>
                <div class="display" style="border-left: none; border-right: 2px solid white;">
                    <img src="images/127-4032x2272.jpg" alt="Forest" srcset=""style="border-left: none;">
                </div>
                <div id="information">
                    Nature's intricate details shine in this close-up of lush forest flora. Ideal for projects focused on biodiversity or the allure of nature's small wonders.
                </div>
            </div>
            <div>
                <div id="information" style="border-right: 2px solid white">
                    Transport your audience with this breathtaking shot — from grass to a mountain-framed lake. Perfect for projects conveying adventure and the awe-inspiring grandeur of landscapes.
                </div>
                <div class="display">
                <img src="images/128-3823x2549.jpg" alt="Grass overlooking lake" srcset="">
                </div>
            </div>`
        break;
        case 3: document.getElementById('bodyH').innerHTML =`
            
                <div class="contactInformation" style="border-bottom: none; border-top: none; ">
                    <h1>Contact Me</h1>
                </div>
                <div class="contactInformation" style="border-bottom: none; border-top: none; height: 40px;">
                    <p style="font-size: 20px;">Thank you for your interest in contacting us. feel free to use the information below to guide us on our way to your next scene</p>
                </div>
                <br>
                <div class="contactInformation" style="border-bottom: none; border-top: none; height: 40px;">
                    <p style="font-size: 16px;">Email: <a href="">Johnsoncustomerservice@email.com.</a></p>
                </div>
                
                <div class="contactInformation" style="border-bottom: none; border-top: none; height: 40px;">
                    <p>Phone: +0 (000) 000-000</p>
                </div>
                <div class="contactInformation" style="border-bottom: none; border-top: none;">
                    <p>Peter & Johnson LTD<br>
                     123 Main Street<br>
                    City, State, ZIP Code</p>
                </div>
            
            `
        break;
    
    }
}


 const scene = new THREE.Scene();
              const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight , 0.1, 30);
              const renderer = new THREE.WebGLRenderer();
            
            changeCubeDimensions()

              addEventListener("resize", changeCubeDimensions);

              function changeCubeDimensions(){
                if (window.innerHeight < 700 || window.innerWidth < 700){
                cubeWidth = (window.innerWidth / 100) * 30
                cubeHeight =  (window.innerHeight / 100) * 30
              } else {
                cubeWidth = (window.innerWidth / 100) * 30
                cubeHeight = (window.innerHeight / 100) * 30
              }
              }
              

              renderer.setSize(cubeWidth, cubeHeight);
              document.getElementById('myCanvas').appendChild(renderer.domElement);
      
              const images = [
                  'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x600.jpg',
                  'https://fastly.picsum.photos/id/289/600/600.jpg?hmac=XIrchP0R2ERODlCwylxR0cZPu8BP2rF1eQMPUKMvu9k',
                  'https://fastly.picsum.photos/id/981/600/600.jpg?hmac=cLbEvWcCtsqC35CJ4Pv87iXtWXqKxyKNluti6frx3Rk',
                  'https://fastly.picsum.photos/id/974/600/600.jpg?hmac=3uc-RdHqWrmLdAHOHextU7-LaljxKszlzasvUHHumMQ',
                  'https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw',
                  'https://fastly.picsum.photos/id/892/600/600.jpg?hmac=LOuLMeEA8y9GHri7pVkY1Ws1FZb66uRQQ3Hme5TBeo8'
              ];
      
              const textures = images.map(image => new THREE.TextureLoader().load(image));
      
              const materials = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));
              
              const geometry = new THREE.BoxGeometry();
              const cube = new THREE.Mesh(geometry, materials);
              
              scene.add(cube);
      
              camera.position.z = 5;
      
              const animate = function () {
                  requestAnimationFrame(animate);
      
                  cube.rotation.x += 1;
                  cube.rotation.y += 0.01;
      
                  renderer.render(scene, camera);
              };
      
              animate();
