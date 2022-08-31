let idAluno = $('#id__aluno');
let nomeAluno = $('#nome__aluno');
let notaAv1 = $('#nota__av1');
let notaAv2 = $('#nota__av2');
let mediaFinal = $('#media__final');
let aprovadoReprovado = $('#aprovado__reprovado');
let remover = $('#remover');
let botaoDelete= $('.botao-delete');
let btnDeletar = $('#btn-deletar');




let botao = $('#botao')

function camposEscondidos(){
    // Deixar o campo media final, aprovado/reprovado e idaluno escondido
    mediaFinal.parent().hide();
    aprovadoReprovado.parent().hide();
    idAluno.parent().hide();
    botaoDelete.hide();

}

function funcionalidades(){
    botao.on('click', (e) => {
        e.preventDefault();
        
        let clone = $('.table-hover').find('tr').eq(1).clone()
        clone.children('.id').html(idAluno.val())
        clone.children('.nome').html(nomeAluno.val())
        clone.children('.av1').html(notaAv1.val())
        clone.children('.av2').html(notaAv2.val())
        clone.children('.media-final').html((Number(notaAv1.val()) + Number(notaAv2.val())) /2)
        clone.children('.aprovado-reprovado').html(aprovadoReprovado.val())
        clone.children('.remover').html(`<button class="btn btn-primary id="btnDeletar">Deletar</button>`)
        
        
        
        let media = (Number(notaAv1.val()) + Number(notaAv2.val())) /2
        
    
        if(media >= 6){
            clone.children('.aprovado-reprovado').html('Aprovado')
    
        }else {
            clone.children('.aprovado-reprovado').html('Reprovado')
        }
     
    
        $('.table-hover').append(clone)
        
        
        
    });

}




botaoDelete.on('click', (e) => {
    e.preventDefault();
    
    console.log('cliquei')
})

// apagar linha
function removerLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
}

camposEscondidos();
funcionalidades();