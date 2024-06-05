//console.log('hola')
//Function
/*
function suma(a,b){
    return a+b
}

suma(2,3);

//VERSION NO SIMPLIFICADA
console.log(suma(2,3));
*/
/*
const suma = (a,b)=>{
    return a+ b
}

console.log(suma(2,3));
*/

//VERSION SIMPLIFICADA
/*const suma=(a,b)=> a+b

console.log(suma(2,3));


const usuario = {
    nombre:'Ricardo',
    apellido:'Flores',
    edad: 20,
    direccion:{
        pais:'Mexico',
        ciudad:'Queretaro',
        calle:'5 de febrero'
    },
    amigos:['Alex','Carlos'],
    estatus: true,
    enviaCorreo: enviarCorr=()=>'enviando...'
}

//PROPIEDADES
//console.log(usuario);
//console.log(usuario.direccion.calle);
//console.log(usuario.amigos);

//METODOS
//console.log(usuario.enviaCorreo())


// TRABAJO CON EL DOM

/*
const titulo= document.createElement('h1')
titulo.innerText= 'Soy un titulo creado con JS'
document.body.append(titulo)

const boton= document.createElement('button')
boton.innerText= 'Presioname'
document.body.append(boton)

boton.addEventListener('click', function (){
    //console.log('Evento click ejecutando')
    titulo.innerText="Evento click ejecutando"
    alert('Exito')
})
*/


//Practica 3

// Trabajo con arreglos 
/*
const nombres = ['alan','isa','pablo','juan luis']

for(let i = 0; i < nombres.length; i++){
    const elemento = nombres[i]
    console.log(elemento)
}

nombres.forEach(function (nombre){
    console.log(nombre)
})


//funcion Map permite generar copia de un array 
const array2= nombres.map(function (nombre){ 
    console.log(nombre)
    return nombre
})

console.log(nombres)
console.log(array2)


//Funcion FIND ubicar elemtos de un arreglo 
const resultado= nombres.find(function (nombre){ 
    if(nombre === 'pablo'){ 
        return nombre
    }
})
console.log(resultado)


//funcion filter recorre el arreglo resultado 
const resultado= nombres.filter(function (nombre){ 
    if(nombre != 'pablo'){ 
        return nombre
    }
})
console.log(nombres)
console.log(resultado)


// funcion concat
const edades =[78,89,12,8,10,15]
console.log(nombres.concat(edades))


//funcion Spread operator
console.log([...nombres, ...edades])


//modulo import y export

import {suma,resta} from './calculadora.js'

import * as calc from "./calculadora.js"
console.log(calc.suma(45,54))
console.log(calc.resta(45,5))
*/

// Practica 4
/*
const ul=document.createElement('ui')
let datos= fetch('https://jsonplaceholder.typicode.com/posts')
            .then (function (response){
                console.log ("CARGA DE DATOS COMPLETADA")
                return response.json()
             }).then (function (data) {
                    console.log(data)
                    data.forEach(function (post){
                        const li= document.createElement('li')
                        li.innerText= post.title
                        ul.append(li)
                    })
                    document.body.append(ul)
                 })
            

console.log ("Cargado HTML")
console.log ("Cargado CSS")
console.log ("Cargado imagenes")


console.log(datos) 
*/
//2 segunda parte de la practica 4

const ul=document.createElement('ui')
async function cargarDatos(){
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos= await response.json()
    console.log(datos)

    datos.forEach(function (post){
        const li= document.createElement('li')
        li.innerText= post.title
        ul.append(li)
    })
    document.body.append(ul)
    }
    cargarDatos()
    console.log ("Cargado HTML")
    console.log ("Cargado CSS")
    console.log ("Cargado imagenes")
