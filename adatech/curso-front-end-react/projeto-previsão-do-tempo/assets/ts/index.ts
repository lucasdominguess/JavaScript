const form = document.querySelector('#seach-form > form');
const input : HTMLInputElement | null = document.querySelector('#input-localizacao')
const sectionInfos = document.querySelector('#tempo-info')

form?.addEventListener('submit' , async (e) => { 
   e.preventDefault();

   if (!input) return //o mesmo que input===null
   const localizacao =input.value
    if (localizacao.length <3) { 
        alert('Local precisa ter pelo menos 3 letras ')
        return;
    }

    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=3b240899ed0a1686421b2d02eae95f3f&lang=pt_br&units=metric`);

    const dados = await resposta.json();
    console.log(dados)

    const infos = { 
        temperatura:Math.round(dados.main.temp), 
        local : dados.name ,  //nome da cidade ou local 
        icone : `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
    };

    sectionInfos?.innerHTML = ` 
      <div class="tempo-dados">
        <h2>${infos.local}°C</h2>
        <span>${infos.temperatura}</span>
      </div>

     <img src="${infos.icone}" alt="Icone tempo">`

});