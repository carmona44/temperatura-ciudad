# CLIMA DE UNA CIUDAD CON NODE

## Como usarlo

1. Descarga el código del proyecto.
2. Abre la consola en el directorio del proyecto.
3. Realiza la siguiente instrucción:

```
npm install
```

Nota: _ten en cuenta que previamente tienes que tener instalado node y npm en tu equipo._

4. Ya estas preparado para usar la app.

## Descripción

Esta es una app de práctica perteneciente a un curso de Udemy - "[Node: De cero a experto](https://www.udemy.com/course/node-de-cero-a-experto)" de **Fernando Herrera**.

Consiste en mandarle mediante consola el nombre de una ciudad y que este te diga la temperatura actual de dicho lugar. Para ello obtiene su latitud y longitud a través de una petición a la API de [_City Geo-Location Lookup_](https://rapidapi.com/dev132/api/city-geo-location-lookup) y luego con estos datos, obtiene la temperatura a través de otra API [_OpenWeather_](https://openweathermap.org/).

### Ejemplo de uso

```
node app -l Murcia
```

## Herramientas usadas

- JavaScript
- Node.js
- EcmaScript 6
- npm
- yargs
- git
- APIs