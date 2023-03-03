
//criando aprimeira classe e atributos
class Cliente {
    nome;
    cpf;

}

class contaCorrente {
    agencia;
    saldo;


//Método sacar
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;


        }
    }
}


        const cliente1 = new Cliente();
        cliente1.nome = "Diego";
        cliente1.cpf = "12366677701";


        const cliente2 = new Cliente();
        cliente2.nome = "Letícia";
        cliente2.cpf = "55366673211";
      
        const contaCorrennteDiego = new contaCorrente();
        contaCorrennteDiego.saldo = 0;
        contaCorrennteDiego.agencia = 1001;


        console.log(cliente1);
        console.log(cliente2); 
