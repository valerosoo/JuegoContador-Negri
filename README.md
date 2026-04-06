# JuegoContador — Negri

Repositorio con tres implementaciones del mismo juego: un contador de clicks contra el tiempo, desarrollado en React + TypeScript.

---

## 📁 Estructura del repositorio

```
JuegoContador-Negri/
├── JuegoContadorChatGPT/
├── JuegoContadorClaudeSonnet/
└── JuegoContadorSinIA/
```

Cada carpeta contiene una versión independiente del juego. Podés correr cualquiera de las tres siguiendo los mismos pasos.

---

## 🎮 ¿De qué se trata el juego?

Clickeá un botón la mayor cantidad de veces posible en **5 segundos**. El juego guarda tu puntaje máximo para que puedas intentar superarlo.

---

## 🛠️ Requisitos previos

Antes de correr cualquiera de las versiones, necesitás tener instalado:

### 1. Node.js
Descargalo desde [https://nodejs.org](https://nodejs.org) — elegí la versión **LTS**.

Una vez instalado, verificá que funcione abriendo una terminal y ejecutando:
```bash
node -v
npm -v
```
Ambos comandos deberían mostrar un número de versión.

### 2. Git (opcional, para clonar el repositorio)
Descargalo desde [https://git-scm.com](https://git-scm.com).

---

## 🚀 Cómo correr una versión

### Paso 1 — Obtener el código

**Opción A: clonar con Git**
```bash
git clone https://github.com/valerosoo/JuegoContador-Negri.git
cd JuegoContador-Negri
```

**Opción B: descargar el ZIP**
1. Ir a [https://github.com/valerosoo/JuegoContador-Negri](https://github.com/valerosoo/JuegoContador-Negri)
2. Hacer click en el botón verde **Code** → **Download ZIP**
3. Descomprimir el archivo descargado

### Paso 2 — Entrar a la carpeta de la versión deseada

```bash
# Elegí una de estas:
cd JuegoContadorChatGPT
cd JuegoContadorClaudeSonnet
cd JuegoContadorSinIA
```

### Paso 3 — Instalar dependencias

```bash
npm install
```

### Paso 4 — Iniciar la app

```bash
npm run dev
```

La terminal va a mostrar una URL similar a:
```
➜  Local:   http://localhost:5173/
```

Abrí esa URL en tu navegador y el juego estará funcionando.

---

## ⚠️ Solución de problemas comunes

**Error: `npm install` falla con conflictos de dependencias**
```bash
npm install --legacy-peer-deps
```

**La página abre en blanco**
Abrí las DevTools del navegador (F12) → pestaña Console y revisá los errores.

**El puerto 5173 ya está en uso**
Vite asignará automáticamente el siguiente puerto disponible. Revisá la URL que aparece en la terminal.

---

## 📝 Consideraciones

- Las tres versiones tienen la misma funcionalidad pero fueron desarrolladas de forma independiente.
- **JuegoContadorChatGPT**: implementación asistida por ChatGPT.
- **JuegoContadorClaudeSonnet**: implementación asistida por Claude Sonnet.
- **JuegoContadorSinIA**: implementación realizada sin asistencia de IA.