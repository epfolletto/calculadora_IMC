<p align="center">
  <a href="#Projeto">Projeto</a> ◦ 
  <a href="#Status">Status</a> ◦ 
  <a href="#Sobre">Sobre</a> ◦ 
  <a href="#Funcionalidades">Funcionalidades</a> ◦ 
  <a href="#Tecnologias">Tecnologias</a> ◦ 
  <a href="#Link">Link</a> ◦ 
  <a href="#Autor">Autor</a>
</p>

# Projeto
Calculadora IMC

# Status
Finalizado

# Sobre
Aplicação da Web desenvolvida com a finalidade de aprendizagem dos conteúdos de HTML5, CSS e JavaScript. 
O HTML da página é organizado da seguinte forma:
- head:
    - adiciona o título;
    - relaciona o arquivo de css chamado "style.css".
- body
    - uma tag h1 com título;
    - uma tag form, que possui dois campos de input e um botão;
    - uma tag div, onde será inserido o resultado do IMC;
    - ao final faz a relação com o arquivo em JavaScript chamado "main.js".

O documento "main.js" possui as seguintes instruções:  
    - utilizando "querySelector", seleciona a tag form através do id;  
    - adiciona um "addEventListener" para escutar o submit do botão "calcular";  
    - utilizando evento.target.querySelector, armazana-se os valores de peso e altura;  
    - chama-se a função "getImc" para calcular o valor do IMC;  
    - chama-se a função "getNivelImc" para verificar em qual faixa o IMC se encontra;  
    - cria-se a mensagem para ser exibida na tela para o usuário;  
    - chama-se a função "setResultado" para exibir o resultado na tela.  

# Funcionalidades
- [x] Campos de entrada de dados de Peso e Altura
- [x] Botão de iteração com o usuário para calcular o IMC 

# Link
A hospedagem foi feita utilizando o GitHub:
- [URL do Site](https://epfolletto.github.io/Calculadora_IMC/)

# Tecnologias
<div>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">  
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
</div>

# Autor
Evandro Paulo Folletto
<div>
  <a href="https://github.com/epfolletto" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/evandrofolletto/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href="mailto:<nowiki>evandrofolletto@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://www.youtube.com/evandropaulofolletto" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>
</div>