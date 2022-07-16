let idAluno = $('#id__aluno');
let nomeAluno = $('#nome__aluno');
let notaAv1 = $('#nota__av1');
let notaAv2 = $('#nota__av2');
let mediaFinal = $('#media__final');
let aprovadoReprovado = $('#aprovado__reprovado');


let botao = $('#botao')

// Deixar o campo media final escondido
mediaFinal.parent().hide();
aprovadoReprovado.parent().hide();

var resultado = (Number(notaAv1.val()) + Number(notaAv2.val())) /2;

botao.on('click', (e) => {
    e.preventDefault();
    
    let clone = $('.table-hover').find('tr').eq(1).clone()
    clone.children('.id').html(idAluno.val())
    clone.children('.nome').html(nomeAluno.val())
    clone.children('.av1').html(notaAv1.val())
    clone.children('.av2').html(notaAv2.val())
    clone.children('.media-final').html((Number(notaAv1.val()) + Number(notaAv2.val())) /2)
    clone.children('.aprovado-reprovado').html(aprovadoReprovado.val())
    
    let media =  (Number(notaAv1.val()) + Number(notaAv2.val())) /2

    if(media >= 6){
        clone.children('.aprovado-reprovado').html('Aprovado')

    }else {
        clone.children('.aprovado-reprovado').html('Reprovado')
        console.log(media)
    }
 
    
    $('.table-hover').append(clone)
    
});

