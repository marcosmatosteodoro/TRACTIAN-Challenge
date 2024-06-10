# TRACTIAN CHALLENGE
## Sobre
Essa aplicação possui apenas uma página, mas com filtros por Company das quais é possivel selecionar o Asset necessitado e filtrar ele por status crítico ou de alerta, e se preferir escrevendo no buscado.
<br>
<br>
Caso prefira [clique aqui](https://tractian-challenge-alpha.vercel.app/) e veja a aplicação rodando na web

# Técnologias utilizadas:
- next: 14
- node: 21
- react: 18
- chakra-ui: 2

## Como iniciar
Para iniciar basta rodar os comandos

```bash
git clone https://github.com/marcosmatosteodoro/TRACTIAN-Challenge.git

cd TRACTIAN-Challenge

npm install

npm run dev
```

## Imagens do projeto
<p align="center">
  <img src="https://tractian-challenge-alpha.vercel.app/images/foto1.jpeg" width="45%" />
  <img src="https://tractian-challenge-alpha.vercel.app/images/foto2.jpeg" width="45%" />
  <br>
  <img src="https://tractian-challenge-alpha.vercel.app/images/foto3.jpeg" width="45%" />
  <img src="https://tractian-challenge-alpha.vercel.app/images/foto4.jpeg" width="45%" />
  <br>
  <img src="https://tractian-challenge-alpha.vercel.app/images/foto5.jpeg" width="45%" />
  <img src="https://tractian-challenge-alpha.vercel.app/images/foto6.jpeg" width="45%" />
</p>

<!-- ## Video do projeto -->

## Pontos do melhorarias
- Cobrir 100% a aplicação de testes unitários
- Distribuir melhor as variáveis e métodos globais para os componentes, atualmente todos os compontens recebem o que eles precisam diretamente de page.tsx
- Retirar mais códigos dos componentes e colocar em hooks
- Reaproveitar mais código que foi criado em duplicidade
- Criar tema global e variantes para conter cores, fonts, espaçamentos e etc
- Apagar tudo do global.css que acabei esquecendo e codifiquei com ele