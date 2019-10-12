
$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 120) + 19;
    var ranGem1 = Math.floor(Math.random() * 12) + 1;
    var ranGem2 = Math.floor(Math.random() * 12) + 1;
    var ranGem3 = Math.floor(Math.random() * 12) + 1;
    var ranGem4 = Math.floor(Math.random() * 12) + 1;


    var win = 0;
    $('#win').text(win);

    var loss = 0;
    $('#loss').text(loss);

    $('#targetScore').text(randomNumber);
    console.log(randomNumber)

    var myNum = 0;
    $('#myNum').text(myNum);


    $('.gem1').on('click', function () {
        myNum = myNum + ranGem1;
        $('#myNum').text(myNum);
        if (myNum === randomNumber) {
            win++;
            $('#win').text(win)
            reset1();
        }
        else if (randomNumber < myNum) {
            loss++;
            $('#loss').text(loss);
            reset1();

        }
    });


    $('.gem2').on('click', function () {
        myNum = myNum + ranGem2;
        $('#myNum').text(myNum);
        if (myNum === randomNumber) {
            win++;
            $('#win').text(win)
            reset1();
        }
        else if (randomNumber < myNum) {
            loss++;
            $('#loss').text(loss);
            reset1();
        }
    });


    $('.gem3').on('click', function () {
        myNum = myNum + ranGem3;
        $('#myNum').text(myNum);
        if (myNum === randomNumber) {
            win++;
            $('#win').text(win)
            reset1();
        }
        else if (randomNumber < myNum) {
            loss++;
            $('#loss').text(loss);
            reset1();
        }
    });


    $('.gem4').on('click', function () {
        myNum = myNum + ranGem4;
        $('#myNum').text(myNum);
        if (myNum === randomNumber) {
            win++;
            $('#win').text(win)
            reset1();
        }
        else if (randomNumber < myNum) {
            loss++;
            $('#loss').text(loss);
            reset1();
        }


    });
    function reset1() {
        randomNumber = Math.floor(Math.random() * 120) + 19;
        ranGem1 = Math.floor(Math.random() * 12) + 1;
        ranGem2 = Math.floor(Math.random() * 12) + 1;
        ranGem3 = Math.floor(Math.random() * 12) + 1;
        ranGem4 = Math.floor(Math.random() * 12) + 1;
        myNum = 0;
        $('#myNum').text(myNum);
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $('#targetScore').text(randomNumber);




    }


});








