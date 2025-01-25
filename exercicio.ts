const nome:string = 'Eduardo'

function multiplicaNumeros(multiplicadorA: number, multiplicadorB: number):number {
    return multiplicadorA * multiplicadorB;
}

function saudação(nome:string):void {
    console.log('Ola ' + nome);
}

saudação(nome);
multiplicaNumeros(2, 3);