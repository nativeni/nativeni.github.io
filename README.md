# Native Network Intelligence 

This is the repository for the  Native Network Intelligence (NativeNI) workshop. You can find the website [here](https://nativeni.github.io).

The site is created via [Hugo](https://gohugo.io/) and is based on a restyling of the [hugo-conference](https://themes.gohugo.io/themes/hugo-conference) template.

## Local development

After having installed hugo and cloned this repository, you can run it locally executing `bash ./run_hugo.sh` from the root of the cloned folder.

The website is a single page split into different `<section>` tags each mapped to a different markdown file located under the `/content` folder. The order of the visualization is defined in `config.yml`. 

Here an extract of the `config.yml`
```
...
params:
  Name: "NativeNI 2022"
  Description: "The 1st International Workshop on Native Network Intelligence <br> Co-located with ACM CoNEXT"
  Date: "December 6th"
  City:  "Rome"
  Country: "Italy"

  Sections:
    - cfp
    - submission
    - committee
    - contacts

  Titles:
    cfp: CFP
    submission: Submission
    committee: Committee
    contacts: Contacts
...
```
Beside the information to display in the header, `Sections` defines which markdown files located under `/content` and the order in which need to be displayed, while `Titles` defines how they are named in the top navigation bar.

Template and styling filres are under `themes/hugo-conferece`. In particular

* `themes/hugo-conference/layouts/index.html` is the rendering entry point
* `themes/hugo-conference/static/css/extras.css` is the CSS styling which override most of the definition of the default CSS of hugo-conference (see `main.css` in the same subfolder)

## Deploy on GitHub Pages

Whenever you change something, save and push your commit to the repo as usual. However, this does not automatically update the deployed website.

When using Hugo, GitHub Pages requires you to provide the compiled website as a `/doc` folder (see `Settings > Pages`)

So, the `config.yml` is configured to build a `/doc` folder (see the `publishDir` attribute), and the `deploy.sh` takes care of compiling and pushing to the repo the updated website.

*Note*: this could be probably automated using a github action.
