# Image Service
Webservice de imagens

### Considerações

  Este desafio consiste em um Webservice que consome uma coleção de objetos em um servidor MongoDB, a qual contém links de várias imagens, em três tamanhos diferentes, e os apresenta ao usuário em formato JSON. 
  
  Os links apresentados são de imagens contidas na pasta **/public/images** do projeto. Caso o usuário acesse qualquer um dos links apresentados, a imagem é mostrada no tamanho escolhido.

  Foi adicionado em **/app.js** uma rota para **/images**, para que haja a entrega dos arquivos estáticos. No arquivo **/db.js** está a configuração de acesso à coleção de imagens e seu respectivo esquema. Os dados da coleção utilizada foram salvos na pasta **/data**.
  
  No arquivo **/routes/index.js**, foi adicionada, na configuração da rota raiz, a função para apresentação da coleção de imagens. São dez itens na coleção, que após a iteração em um loop com os 3 tamanhos diferentes, apresentam 30 links diferentes.
  
  ### Autor: Rafael Calzado
  ### E-mail: rcalzado.ti@gmail.com
  