function calcular(){
    console.log("teste")
    let venda = Number(document.getElementById("venda").value)
    let cartao = document.getElementById("cartao").value
    let vezes = document.getElementById("vezes").value
    let taxa2 = document.getElementById("taxa");
    let valorTotal = document.getElementById("valorTotal")
    let taxa = 0
    let vetTaxas = []

    vetTaxas[1] = (3.09/100)
    vetTaxas[2] = (5.35/100)
    vetTaxas[3] = (6.10/100)
    vetTaxas[4] = (6.80/100)
    vetTaxas[5] = (7.55/100)
    vetTaxas[6] = (8.20/100)
    vetTaxas[7] = (8.90/100)
    vetTaxas[8] = (9.65/100)
    vetTaxas[9] = (10.19/100)
    vetTaxas[10] = (10.97/100)
    vetTaxas[11] = (11.40/100)
    vetTaxas[12] = (12.20/100)
    vetTaxas[13] = (12.42/100)
    vetTaxas[14] = (13.08/100)
    vetTaxas[15] = (13.74/100)
    vetTaxas[16] = (14.39/100)
    vetTaxas[17] = (15.04/100)
    vetTaxas[18] = (15.68/100)

    if(cartao == 1 && vezes == 1){
        taxa = venda*(1.34/100)
        taxa2.innerHTML = `A taxa é igual a R$${taxa.toFixed(2)} `
        valorTotal.innerHTML = `Valor recebido R$${(venda - taxa).toFixed(2)} `
    }
    else if(cartao == 2){
        for(let i = 1; i < 19; i++){
            if(i == vezes){
                taxa = venda * vetTaxas[i]
                taxa2.innerHTML = `A taxa é igual a R$${taxa.toFixed(2)} `
                valorTotal.innerHTML = `Valor recebido R$${(venda - taxa).toFixed(2)} `
            }
        }
    }
    else{
        respostas.innerHTML = "Compras no débito não podem ser parceladas";
    }

}
    