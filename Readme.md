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

