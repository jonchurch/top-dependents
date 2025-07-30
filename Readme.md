## **Top Express Dependents**

This project ranks npm packages that **directly depend on [Express](https://npmjs.com/package/express)** by their download counts.

### **How we got this data**

1. Queried the **Google BigQuery public dataset** [`bigquery-public-data.deps_dev_v1`](https://deps.dev) to get a complete list of packages that directly depend on `express`.

   ```sql
   SELECT DISTINCT Dependent.Name AS package_name
   FROM `bigquery-public-data.deps_dev_v1.DependentsLatest`
   WHERE System = 'NPM'
     AND Name = 'express'
     AND MinimumDepth = 1
     AND DependentIsHighestReleaseWithResolution
   ```
2. Exported the results as JSON (`dependents.json`).
3. Used the [`download-counts`](https://www.npmjs.com/package/download-counts) dataset (updated bi‑monthly) to look up **monthly aggregate downloads** for each dependent package.
4. Sorted the enriched list by download count and output the top dependents.

### **What this data represents**

* **Direct dependents only:** Packages that list `express` in their `dependencies` (not transitive or devDeps).
* **Download counts:** Total downloads for all versions of a package in the last \~30 days (from the `download-counts` dataset).
* **Latest version per dependent:** We only included each dependent package once (its latest release), **but the download-counts data does not differentiate between versions**.

### Top 25 At time of publish (2025-07-30)

1. [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) – **69,096,964**
2. [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk) – **18,436,580**
3. [@nestjs/platform-express](https://www.npmjs.com/package/@nestjs/platform-express) – **16,632,993**
4. [@flmngr/flmngr-server-node-express](https://www.npmjs.com/package/@flmngr/flmngr-server-node-express) – **7,836,963**
5. [@storybook/manager-webpack4](https://www.npmjs.com/package/@storybook/manager-webpack4) – **5,751,017**
6. [express-joi-validations](https://www.npmjs.com/package/express-joi-validations) – **5,449,974**
7. [@google-cloud/functions-framework](https://www.npmjs.com/package/@google-cloud/functions-framework) – **3,863,030**
8. [@nx/react](https://www.npmjs.com/package/@nx/react) – **3,601,415**
9. [@nx/module-federation](https://www.npmjs.com/package/@nx/module-federation) – **3,429,519**
10. [@storybook/manager-webpack5](https://www.npmjs.com/package/@storybook/manager-webpack5) – **3,229,340**
11. [netlify](https://www.npmjs.com/package/netlify) – **3,102,482**
12. [firebase-tools](https://www.npmjs.com/package/firebase-tools) – **2,820,053**
13. [firebase-functions](https://www.npmjs.com/package/firebase-functions) – **2,732,164**
14. [servify](https://www.npmjs.com/package/servify) – **2,451,148**
15. [@slack/bolt](https://www.npmjs.com/package/@slack/bolt) – **2,364,233**
16. [@appium/base-driver](https://www.npmjs.com/package/@appium/base-driver) – **1,881,197**
17. [testem](https://www.npmjs.com/package/testem) – **1,682,463**
18. [@bull-board/express](https://www.npmjs.com/package/@bull-board/express) – **1,511,589**
19. [ember-cli](https://www.npmjs.com/package/ember-cli) – **1,442,954**
20. [gatsby](https://www.npmjs.com/package/gatsby) – **1,425,971**
21. [@lhci/cli](https://www.npmjs.com/package/@lhci/cli) – **1,419,841**
22. [@remix-run/dev](https://www.npmjs.com/package/@remix-run/dev) – **1,408,966**
23. [json-server](https://www.npmjs.com/package/json-server) – **1,367,309**
24. [telecom-mas-agent](https://www.npmjs.com/package/telecom-mas-agent) – **1,360,922**
25. [@flmngr/flmngr-server-node](https://www.npmjs.com/package/@flmngr/flmngr-server-node) – **1,334,717**
