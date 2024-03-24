# cs.vuejs.org

Oficiální český překlad [dokumentace Vue.js](https://vuejs.org/).

Podívejte se na [poznámky k překladu](/about/cs).

## Pomoc s projektem

Tato stránka je vytvořena pomocí [VitePress](https://github.com/vuejs/vitepress) a závisí na [@vue/theme](https://github.com/vuejs/vue-theme). Obsah je psán v Markdown formátu v soubrech umístěných v adresáři `src`. Pro jednodušší změny můžeze soubor editovat přímo na GitHubu a následně vytvořit Pull Request. 

Pro lokální spuštění je preferovaný package manažer [pnpm](https://pnpm.io/):

```bash
pnpm i
pnpm run dev
```

Projekt potřebje Node.js ve verzi `v14.0.0` nebo vyšší, protože používáme novější JavaScript funkce, jako je _optional chaining_.

## Práce s obsahem

- Podívejte se dokumentaci VitePress ohledně podporovaných [Markdown rozšíření](https://vitepress.dev/guide/markdown) a na schopnost [použití Vue syntaxe uvnitř Markdown souborů](https://vitepress.dev/guide/using-vue).

- Přečtěte si [Writing Guide](https://github.com/vuejs-translations/docs-cs/blob/main/.github/contributing/writing-guide.md) (v angličtině) pro obecná pravidla a doporučení pro psaní a údržbu obsahu dokumentace + na [poznámky k českému překladu](/about/cs) pro udržení konzistence české verze.

- Vítáme jakoukoliv zpětnou vazbu a návrhy vylepšení ohledně kvality nebo přesnosti překladu. Pokud vám zde nějaký obsah vysloveně chybí, ujistěte se nejprve, že existuje v [originální Vue.js dokumentaci](https://vuejs.org/). Pokud ano, je to chyba, a musíme chybějící informace doplnit. Pokud ne, bude jej třeba nejprve vytvořit tam a potom teprve přenést do českého překladu. V každém případě [založte k probému issue](https://github.com/vuejs-translations/docs-cs/issues), domluvíme se na vhodném postupu.

## Práce se vzhledem

Pokud by bylo potřeba provést změny vzhledu, podívejte se na [instrukce pro vývoj vzhledu souběžně s dokumentací](https://github.com/vuejs/vue-theme#developing-with-real-content).
