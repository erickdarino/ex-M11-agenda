const form = document.getElementById('formulario');
const inputNome = document.getElementById("inpnome");
const inputTel = document.getElementById("numcel");
const inputFav = document.getElementById('addfav');
const corpoTabela = document.getElementById('ctabela');
const nomes=[];
const numeros =[];
const personIcon = `<td class="firulinha"><img src="imagens/noface.png" alt="personicon"></td>`;
const favIcon = `<td class="firulinha1"><img src="imagens/fav.png" alt="favorito"></td>`;

form.addEventListener('submit',function(e){
    e.preventDefault();
    addLinha();
    

    inputNome.value = '';
    inputTel.value = '';
})
inputTel.addEventListener('input', function (t){
    let valor = t.target.value;
    
    valor = valor.replace(/\D/g, '');
    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2'); 
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2'); 
    t.target.value = valor;
})

    function addLinha(){
        if(nomes.includes(inputNome.value) || numeros.includes(inputTel.value)){
            alert(`Este nome ou número ja foi adicionado, verifique sua lista!`)
        }else{
            nomes.push(inputNome.value);
            numeros.push(inputTel.value);

            let linha = `<tr>`
            linha += personIcon;
            linha += `<td>${inputNome.value}</td>`;
            linha += `<td>${inputTel.value}</td>`
            linha += `${inputFav.checked ? favIcon :"<td></td>"}`;
            linha += `</tr>`;

            
            corpoTabela.innerHTML += linha;
        }
}