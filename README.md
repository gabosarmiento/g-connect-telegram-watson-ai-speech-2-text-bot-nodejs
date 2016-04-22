# audio a texto usando un bot de telegram con watson y nodejs

Construye un Bot utilizando Inteligencia Artificial del IBM Watson y úsalo en Telegram con muy pocas líneas de código.
...Primero lee acerca de los [bots](https://core.telegram.org/bots/) de [Telegram](https://web.telegram.org/) y usa el explorador para probar cómo puedes obtener el JSON utilizando los métodos getUpdates y sendMessage.
...Abre una cuenta en [Bluemix](http://www.ibm.com/cloud-computing/bluemix/free-trial/)
...Sigue este [Tutorial](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/getting_started/gs-full-nodejs.shtml) donde te pide instalar el cliente del Cloud Foundry y crear una una instancia en NodeJS con el paquete de speech to text service standard. Déjala corriendo.
...Cuando ya esté listo y puedas correrlo localmente con npm start y online. Juega un poco cambiando los idiomas y probando que entienda el texto.
...Ahora crea la aplicación en NodeJS que manea tu BOT. Para lo cual crea un archivo app.js
...Crea un procfile para heroku
...Carga el código del bot en bot.js
...Reemplaza las credenciales que obtienes mediante el comando en consola
  `cf env <nombre de tu app que te da bluemix>`
...Subes tu aplicación a heroku
...Instala npm y revisa que estés usando los wrapers del api de telegram y de watson
...Habla con el [bot](https://web.telegram.org/#/im?p=@DictactionBot) en español por telegram y mira lo que sucede .

[Atribución](https://medium.com/chat-bots/building-an-ibm-watson-powered-ai-chatbot-9635290fb1d3)
