function verificar(){
    var email = document.querySelector('#email')
    var password  = document.querySelector('#senha')
    var senha = document.querySelector('.senha')

    e = (email.value)
    p = (password.value)
    s = (senha.value)

    var t1 = document.querySelector('.text_1')
    var t2 = document.querySelector('.text_2')
    var t3 = document.querySelector('.text_3')
    var t4 = document.querySelector('.text_4')

    if(e == ""){
        t1.innerHTML = "Preencha este campo"
    }else{
        t1.innerHTML = ""
    }if(p == ""){
        t2.innerHTML = "Preencha este campo"
    }else{
        t2.innerHTML = ""
    }if(s == ""){
        t3.innerHTML = "Preencha este campo"
    }else{
        t3.innerHTML = ""
    }if(p == s){
        t4.innerHTML = ""
    }else{
        t4.innerHTML = "As senhas precisam ser iguais"
    }
}