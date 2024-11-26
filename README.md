## Introductie:

Storybook is een geweldige tool voor frontend-ontwikkeling die je helpt om componenten los van je main project te ontwikkelen en te testen. Dit betekent dat je de functionaliteit van je componenten kunt controleren zonder dat dit invloed heeft op de rest van je applicatie. In deze tutorial laat ik je zien hoe je Storybook kunt gebruiken om je componenten te verbeteren en te testen. We gaan niet alleen kijken naar hoe je je componenten optimaliseert, maar ook hoe je interacties kunt testen, documentatie kunt maken, en zelfs gebruik kunt maken van handige addons. Door Storybook in je ontwikkelproces te integreren, kun je ervoor zorgen dat je componenten goed werken, makkelijk hergebruikt kunnen worden en goed gedocumenteerd zijn en dat allemaal zonder dat dit je andere code beïnvloedt.

## Installatie:

Voordat we met Storybook aan de slag gaan, moeten we eerst alles installeren, inclusief React als je dat nog niet hebt:

1. **Maak een nieuwe React-app aan**

    Dit doe je door het volgende commando in je terminal in te voeren:

    `npx create-react-app <naam van je app>`

2. **Installeer Storybook**

    Het belangrijkste onderdeel van deze tutorial is Storybook zelf. Om de nieuwste versie van Storybook te krijgen, voer je het volgende commando uit in de root van je project:

    `npx storybook@latest init`

    Dit zorgt ervoor dat de laatste versie van Storybook geïnstalleerd wordt.

Na het initialiseren van Storybook, zie je twee nieuwe mappen verschijnen in je project:

-   **.storybook**: Deze map bevat de configuratiebestanden `main.js` en `preview.js`. Deze bestanden worden gebruikt om de instellingen van Storybook te beheren.
-   **src/stories**: Hier komen alle "stories" van je componenten. Dit is de map waar je de Storybook-codes plaatst, die je componenten isoleren en documenteren zodat je ze kunt testen en visualiseren.

Met deze stappen ben je klaar om aan de slag te gaan met Storybook!

Run beide applicaties:
npm start
npm run storybook

## Configuratie

Zodat ik net heb verteld heb je in je .storybook folder 2 bestanden `main.js` en `preview.js` . We begginen met namelijk `main.js` :
Hierin definieer je de instelling van Storybook, zoals welke verhalen je wilt tonen, welke addons je wilt gebruiken, en welke type van componenten je wilt laten renderen

Volgende bestand was onze `preview.js` hier kan je globale instellingen definieren zoals decorateurs of parameters. Settings die voor al je stories gaan tellen

Met deze configuratie ben je in staat om Storybook in te stellen en te gebruiken voor je volgend project! Het mogelijkheid om extra configuratie toe te voegen kan altijd naarmate je project groeit!

## BasisFunctionaliteit

(informatie)

## Geavanceerde functionaliteiten

(informatie)

## Afbeeldingen

(informatie)

## Best Practices

(informatie)

## Toekomstie updates

(informatie)

## Bronvermelding

StoryBook doc: https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/

Storybook with React (complete tutorial): https://www.youtube.com/watch?v=dwtmz5PHWDg&t=447s

## Github Repo

https://github.com/pgm-stijwalr/storybook-workshop
