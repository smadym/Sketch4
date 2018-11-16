    // For this assignment I wanted to show how, just like images, fonts can be used to evoke emotion
    // I matched each emotion in the image with its own unique font that I felt conveyed a similar emotion to what was shown in the image
    // I made the movement and the placement of the words very purposeful so that it looks like the people are actually laughing, screaming, etc.


    // Declare Image variables
    var img1, img2, img3, img4, img5, img6, img7;
    var images;
    
    // Declare temporary image holder
	var imageTemps;
    
    // Declare variable to hold image positions
    var imagePos;

    // Declare original state of image status as false
    var imageStatus=[false,false,false, false,false,false, false]
   
    // Declare original state of filter status as false
    var imageGray=[false,false,false, false,false,false,false]

	// Declare font variables
    var font1, font2, font3, font4, font5, font6, font7;

    function preload()
    {
      // Load each image from assets folder
      img1 = loadImage("assets/picture1.jpg");
      img2 = loadImage("assets/picture2.jpg");
      img3 = loadImage("assets/picture3.jpg"); 
      img4 = loadImage("assets/picture4.jpg"); 
      img5 = loadImage("assets/picture5.jpg"); 
      img6 = loadImage("assets/picture6.jpg"); 
      img7 = loadImage("assets/picture7.jpg"); 
     
	  // Declare image position based on array
      imagePos = [0,135,270,405,540,675,810];

      // Load each font from assets folder
      font1 = loadFont('assets/cartwheel.otf'); //LOL
      font2 = loadFont('assets/boycott.ttf'); //STFU
      font3 = loadFont('assets/doctorSoosBold.ttf'); //LMAO
      font4 = loadFont('assets/elephant.ttf'); //omg
      font5 = loadFont('assets/impact.ttf'); //WTF
      font6 = loadFont('assets/maidenOrange.ttf'); //idk
      font7 = loadFont('assets/milkshake.otf'); //ily

    }
     
    function setup() 
    {
      createCanvas(1000, 504);
      // Call images through array
      images = [img1,img2,img3,img4,img5,img6,img7];

      // Creates original images on canvas      
      imageTemps = [createGraphics(img1.width,img1.height),createGraphics(img2.width,img2.height),createGraphics(img3.width,img3.height),
      createGraphics(img4.width,img4.height),createGraphics(img5.width,img5.height),createGraphics(img6.width,img6.height),
      createGraphics(img7.width,img7.height)];
    }
     
    function draw() 
    {
      background(255);


/* Here I tried to create a blur that would fade back to the original image when you hover over with the mouse
but it was taking too much time to load so I decided on a different route although it looked very cool graphically

      var temp1;
      temp1=createGraphics(img1.width,img1.height)
      temp1.image(img1,0,0)

      img1.filter(BLUR, 0.8);
      img2.filter(BLUR, 0.8);
      img3.filter(BLUR, 0.8); 
      
      image(img1, 0, 0); 
      image(img2, 135, 0);  
      image(img3, 270, 0);

*/


      // Filters image with a greyscale filter
	 	for(var i=0;i<images.length;i++){
      	imageGray[i]=1

      // Removes filters image with a greyscale filter
      	imageTemps[i].image(images[i],0,0)
      	if (!imageStatus[i]){
      		imageTemps[i].filter("gray")

      	}

      	// Loads original colored image
      	image(imageTemps[i],imagePos[i],10*sin(frameCount),imageTemps[i].filter(POSTERIZE, 15))

      
      	// Goes through array of images and declares which font will show with which image
      	if (imageStatus[0]){
	      textFont(font1);

	      //Font grows according to movement of mouse on Y axis
	      textSize(60 + (mouseY / height)*72 + 2*sin(frameCount));
	      
	      //Playing with fill style
	      //fill(150 + sin(frameCount*0.3) * 128);
	      fill(255);

	      //Declares the text that will show up on the image and its placement on the image
	      text("LOL",imagePos[0]+30,300)

      	}


      	if (imageStatus[1]){
	      textFont(font2)
	      textSize(60 + (mouseY / height)*72 + 5*sin(frameCount));
	      fill(255);
	      text("STFU",imagePos[1]+35,320)
      	}


      	if (imageStatus[2]){
	      textFont(font3)
	      textSize(60 + (mouseY / height)*72 + 5*sin(frameCount));
	      fill(255);
	      text("LMAO",imagePos[2]+30,260)
      	}


      	if (imageStatus[3]){
	      textFont(font4)
	      textSize(60 + (mouseY / height)*72 + 5*sin(frameCount));
	      fill(255);
	      text("omg",imagePos[3]+30,270)
      	}


      	if (imageStatus[4]){
	      textFont(font5)
	      textSize(60 + (mouseY / height)*72 + 5*sin(frameCount));
	      fill(255);
	      text("WTF",imagePos[4]+35,320)
      	}


      	if (imageStatus[5]){
	      textFont(font6)
	      textSize(60 + (mouseY / height)*72 + 5*sin(frameCount));
	      fill(255);
	      text("idk",imagePos[5]+30,320)
      	}


      	if (imageStatus[6]){
	      textFont(font7)
	      textSize(60 + (mouseY / height)*65 + 5*sin(frameCount));
	      fill(255);
	      text("ily",imagePos[6]+15,300)
      	}


      	//Declares the mouse position (width and height) for which the action will be triggered to change image color
      	//If mouse is on the image the filter will be removed, if mouse is not on the image the filter will be triggered
      	if ( mouseX>imagePos[i] &&  mouseX<imagePos[i] +images[i].width &&
      		 mouseY>0 &&  mouseY<images[i].height){
			imageStatus[i]=true
 			imageGray[i]=true
			
      	}else{
			imageStatus[i]=false
 			imageGray[i]=false
      	}

      }

     // Checks status of image based on mouse movement to make sure code is functioning
     // console.log(imageStatus)

      
    }

