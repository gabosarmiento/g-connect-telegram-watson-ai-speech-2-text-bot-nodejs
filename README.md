# audio a texto usando un bot de telegram con watson y nodejs

Construyendo un Bot utilizando Inteligencia Artificial del IBM Watson usando Telegram y NodeJS en 50 lineas de código.
0. Lee acerca de los [bots](https://core.telegram.org/bots/) de [Telegram](https://web.telegram.org/)
0.5 Usa el exporador para probar cómo puedes obtener el JSON utilizando los métodos getUpdates y sendMessage.
1. Abre una cuenta en [Bluemix]](http://www.ibm.com/cloud-computing/bluemix/free-trial/)
2. Sigue este [Tutorial](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/getting_started/gs-full-nodejs.shtml) donde te pide instalar el cliente del Cloud Foundry y crear una una instancia en NodeJS con el paquete de speech to text service standard. Déjala corriendo.
3. Cuando ya esté listo y puedas correrlo localmente con npm start y online. Juega un poco cambiando los idiomas y probando que entienda el texto.
4. Ahora crea la aplicación en NodeJS que manea tu BOT. Para lo cual crea un archivo app.js
5. Crea un procfile para heroku
6. Carga el código del bot en bot.js
7. Reemplaza las credenciales que obtienes mediante el comando en consola
  `cf env <nombre de tu app que te da bluemix>`
8. Subes tu aplicación a heroku
9. Instala npm y revisa que estés usando los wrapers del api de telegram y de watson
10. Habla con el bot en telegram y explora.

[Source Article](https://medium.com/chat-bots/building-an-ibm-watson-powered-ai-chatbot-9635290fb1d3)
