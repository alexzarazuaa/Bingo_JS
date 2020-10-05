export let carton = function() {

        let card = []
        let times = [1, 2, 3]
        times.forEach(element => card.push(Array.from({ length: 9 }, (_, i) => 0)));

        let rows = [0, 1, 2]
        let positions = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        let row_used = [];

        console.log(row_used)



        for (let b = 0; b < 2; b++) {

            console.log(row)

            let row = Math.floor(Math.random() * (rows.length));
            console.log("row= " + row)
            row = rows[row]
                // console.log(row)
            row_used.push(row);
            rows = rows.filter(item => item !== row)
            console.log("rows= " + rows)

            hollow_space(positions, card, row)


            positions = [0, 1, 2, 3, 4, 5, 6, 7, 8]

        }
        console.log(row_used)

        let indice_num = ""
        let positions1 = []

        for (let c = 0; c < 2; c++) {

            indice_num = (card[row_used[c]]).indexOf(null)
            do {
                positions1.push(indice_num);
                indice_num = (card[row_used[c]]).indexOf(null, indice_num + 1);
            } while (indice_num != -1)
            console.log(positions1);
        }


        let arr = positions1.slice().sort();
        let repeat_pos = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] == arr[i]) {
                repeat_pos.push(arr[i]);
            }
        }
        console.log(repeat_pos)

        for (let d = 0; d < repeat_pos.length; d++) {

            positions1 = positions1.filter(item => item !== repeat_pos[d])
            console.log(positions1)
        }


        hollow_space(positions1, card, rows)


        for (let h = 0; h < 9; h++) {

            let new_bolas = []

            let sum = h * 10

            let ball = bolas()
            for (let ray = 0; ray < ball.length; ray++) {

                new_bolas.push((ball[ray]) + (sum))
            }

            if (sum == 80) {
                new_bolas.push(90)
            }


            let balls = numbers(new_bolas).sort()

            for (let g = 0; g < 3; g++) {

                if ((card[g][h]) == 0) {
                    console.log('if')
                    console.log(card[g][h])


                    card[g][h] = balls[g]

                    console.log(card[g])

                }
            }



        }

        console.log(card)



        for (let e = 0; e < 3; e++) {

            let columns = [...positions]
            columns.forEach(function() {
                for (let f = 0; f < 9; f++) {
                    if (card[e][f] != null) {
                        document.getElementById([e] + ',' + [f]).style.background = '#094CF0';
                    } else {
                        document.getElementById([e] + ',' + [f]).style.background = '#000000';
                    }


                    document.getElementById([e] + ',' + [f]).innerHTML = card[e][f];

                }
            })


        }

    } //end_function_carton

let bolas = function() {
    let boles = Array.from({ length: 9 }, (_, i) => i + 1);
    let shuffle = () => boles.sort((a, b) => Math.random() - 0.5);

    return (shuffle())
}

let hollow_space = function(positions, card, row) {
    let nulls = Array.from({ length: 4 }, (_, i) => i + 1);

    nulls.forEach(function() {
        let posicion = Math.floor(Math.random() * (positions.length));


        posicion = positions[posicion]


        positions = positions.filter(item => item !== posicion)

        card[row][posicion] = null

        console.log(card)
    })

}


let numbers = function(numeros) {

    let colum = []
    let total_nums = Array.from({ length: 4 }, (_, i) => i + 1);

    total_nums.forEach(function() {
        let numero = Math.floor(Math.random() * (numeros.length));

        numero = numeros[numero]


        colum.push(numero)
        numeros = numeros.filter(item => item !== numero)
    })

    return colum
}