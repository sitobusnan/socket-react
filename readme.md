<img src="https://raw.githubusercontent.com/webmad1019-1/w1d3-advanced-selectors-positioning-full-layout/master/img/ironhack.svg?sanitize=true" alt="Ironhack" width="60"/>

# Socket React Chat

Este repo consta de dos servicios:
- client-socket (Fron en React). Arranca con ```npm start```
- server-socket (Back en Express). Arranca con ```npm run dev```

El back necesita un archivo .env en el que se epecifique el puerto ```PORT=xxxx```

En el front, en App.js ```this.socket = io('http://192.168.96.69:5000')``` definimos la ip o host más el puerto en el que se encuentra el socket-server del black.

Más info y documentacion en: https://socket.io/




