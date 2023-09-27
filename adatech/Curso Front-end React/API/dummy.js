

//Api dummy 
//Pegando todos os usuarios no sistema dummy 
async function getUsers() { 
    const resposta = await fetch('https://dummyapi.io/data/v1/user?created=1', {
        headers: {
            'app-id' : '6512c0e8e8d7471df25684d8' //id exigido para request! fornecido no site da Api dummy
        }
    });
    const user = await resposta.json();
    console.log(user.data);
} 
getUsers();





//Pegando apenas 1 Usuario pelo ID
async function getUser() { 
    const resposta1 = await fetch("https://dummyapi.io/data/v1/user/6512e3b82a49a24b1791d2e2",{ 
        headers: { 
            "app-id" : "6512c0e8e8d7471df25684d8" , //Id requerido 
        },
    }
    );
    const user =await resposta1.json();
    console.log(user);
}
getUser();

//Criando Usuario no sistema 

async function createUser() { 
    const userData = {     //obj js 
        firstName : "rodrigus" , 
        lastName : "santana",
        email : "fgordomeudeus@gmail.com",
    };
    try { 
       await fetch("https://dummyapi.io/data/v1/user/create", { 
            method: "POST", 
            headers: {
        "app-id" : "6512c0e8e8d7471df25684d8",//id exigido! fornecido no site da Api dummy
        "Content-Type" : "application/json", //informando tipo de arquivo json que sera enviado

    }, //body nao aceita obj javascript . é necessario converter para Json
    body: JSON.stringify(userData), //Convertendo dados usuario em JSON 
    
    });
    }catch (erro) { //trantando erro
        console.log('Deu erro ao tentar criar usuario ', erro);
    }finally {console.log('finalizado',userData)};
};
createUser();




