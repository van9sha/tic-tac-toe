window.onload = function () {
    for (let i = 1; i <= 9; i++) {
        document.getElementById('main').innerHTML += '<div class="block"></div>';
    }



    let hod = 0;




    // Заполнение поля

    document.getElementById('main').onclick = function (event) {
        console.log(event);
        if (event.target.className === 'block') {
            if (hod % 2 === 0) {
                event.target.innerHTML = 'x';
            } else {
                event.target.innerHTML = '0';
            }
            hod++;
            checkWinner();


        }
    }


        // Проверка победы
    let check_player = 0;
    let check_draw = 0;
    let check_comp = 0;

    function checkWinner() {
        let allblock = document.getElementsByClassName('block');
        let check = document.getElementsByClassName('number');





        let result = 0;

        if (hod !== 9) {


            if ((allblock[0].innerHTML === 'x' && allblock[1].innerHTML === 'x' && allblock[2].innerHTML === 'x') ||
                (allblock[3].innerHTML === 'x' && allblock[4].innerHTML === 'x' && allblock[5].innerHTML === 'x') ||
                (allblock[6].innerHTML === 'x' && allblock[7].innerHTML === 'x' && allblock[8].innerHTML === 'x') ||
                (allblock[0].innerHTML === 'x' && allblock[3].innerHTML === 'x' && allblock[6].innerHTML === 'x') ||
                (allblock[1].innerHTML === 'x' && allblock[4].innerHTML === 'x' && allblock[7].innerHTML === 'x') ||
                (allblock[2].innerHTML === 'x' && allblock[5].innerHTML === 'x' && allblock[8].innerHTML === 'x') ||
                (allblock[0].innerHTML === 'x' && allblock[4].innerHTML === 'x' && allblock[8].innerHTML === 'x') ||
                (allblock[2].innerHTML === 'x' && allblock[4].innerHTML === 'x' && allblock[6].innerHTML === 'x'))
            {
                alert('Победили крестики');
                check_player++;
                check[0].innerHTML = " ";
                check[0].innerHTML = check[0].innerHTML + check_player;
                 newGame();
            }



            if ((allblock[0].innerHTML === '0' && allblock[1].innerHTML === '0' && allblock[2].innerHTML === '0') ||
                (allblock[3].innerHTML === '0' && allblock[4].innerHTML === '0' && allblock[5].innerHTML === '0') ||
                (allblock[6].innerHTML === '0' && allblock[7].innerHTML === '0' && allblock[8].innerHTML === '0') ||
                (allblock[0].innerHTML === '0' && allblock[3].innerHTML === '0' && allblock[6].innerHTML === '0') ||
                (allblock[1].innerHTML === '0' && allblock[4].innerHTML === '0' && allblock[7].innerHTML === '0') ||
                (allblock[2].innerHTML === '0' && allblock[5].innerHTML === '0' && allblock[8].innerHTML === '0') ||
                (allblock[0].innerHTML === '0' && allblock[4].innerHTML === '0' && allblock[8].innerHTML === '0') ||
                (allblock[2].innerHTML === '0' && allblock[4].innerHTML === '0' && allblock[6].innerHTML === '0'))
            {
                alert('Победили нолики') ;
                check_comp++;
                check[2].innerHTML = " ";
                check[2].innerHTML = check[2].innerHTML + check_comp;
                newGame();

            }


        } else {
            alert('Ничья');
            check_draw++;
            check[1].innerHTML = " ";
            check[1].innerHTML = check[1].innerHTML + check_draw;
            newGame();
        }



    

    }


    // Очистка поля

    function newGame() {
        let allblock = document.getElementsByClassName('block')

            for (let i = 0; i < 9; i++) {
                allblock[i].innerHTML = " ";
            }

            hod = 0;
        }



        // Сброс счета

        let button = document.querySelector(".reset");
        let number = document.getElementsByClassName("number");
    let check = document.getElementsByClassName('number');


             button.addEventListener('click', () => {
                 for (let i=0;i<3;i++)
                 {
                 number[i].innerHTML = "";
                 check[i].innerHTML = "0";
                 check_player = 0;
                 check_draw = 0;
                 check_comp = 0;
                 }
             });





}


