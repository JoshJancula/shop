var images1 = [

    {
        link: "images/top1.png"
    },
    {
        link: "images/top2.png"
    },
    {
        link: "images/top3.png"
    },
    {
        link: "images/top4.png"
    },
    {
        link: "images/top5.png"
    },
    {
        link: "images/top6.png"
    },
    {
        link:"images/top7.png"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsA3z-Vbw1aH1V8rYllBD9aYCrAoJHTferyBdFMFSB7zqKYLV-wQ"
    }


];

var images2 = [{
        link: "images/mid1.png"
    },
    {
        link: "images/mid2.png"
    },
    {
        link: "images/m3.png"
    },

]

var images3 = [{
        link: "images/b1.png"
    },
    {
        link: "images/b2.png"
    },
    {
        link: "images/b3.png"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i1uUk2zUTBFxsR7cwRgiYJemq5-Xa0UaCZ7u1AWklQDoaKUG"
    }

]



images1.forEach(function(result) {
    let newImage = $("<div class='item'>");
    let pic = result.link;
    pic = "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage'></div>";
    newImage.append(pic);
    $("#imagesRow1").append(newImage)
});

images2.forEach(function(result) {
    let newImage = $("<div class='item'>");
    let pic = result.link;
    pic = "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage'></div>";
    newImage.append(pic);
    $("#imagesRow2").append(newImage)
});


images3.forEach(function(result) {
    let newImage = $("<div class='item'>");
    let pic = result.link;
    pic = "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage'></div>";
    newImage.append(pic);
    $("#imagesRow3").append(newImage)
});
