# symfony-micro-skeleton

[![Latest Stable Version](https://poser.pugx.org/ttskch/symfony-micro-skeleton/v/stable)](https://packagist.org/packages/ttskch/symfony-micro-skeleton)
[![Total Downloads](https://poser.pugx.org/ttskch/symfony-micro-skeleton/downloads)](https://packagist.org/packages/ttskch/symfony-micro-skeleton)

![image](https://user-images.githubusercontent.com/4360663/49428912-8e809700-f7ea-11e8-9d99-a6d261d857bd.png)

A skeleton to get started with Symfony which has following features.

* bootstrap4 based templates
* bootstrap4 based beautiful form themes
* font-awesome ready
* translation ready
* [select2](https://github.com/select2/select2) and [bootstrap4 theme](https://github.com/ttskch/select2-bootstrap4-theme) ready
* scss support (via [symfony/webpack-encore](https://github.com/symfony/webpack-encore))

## Requirements

* PHP 7.1.3+
* npm

## Installation

```bash
$ composer create-project ttskch/symfony-micro-skeleton:@dev {project-name}
```

## Usage

```bash
$ bin/console server:run
```

Then browse http://localhost:8000

### Form themes

Rearrange `twig.form_themes` array elements to specify the default theme.

```yaml
# config/packages/twig.yaml
twig:
    form_themes:
        - 'bootstrap_4_layout.html.twig'
#        - 'form_theme/bootstrap_4_horizontal_layout.html.twig'   # to be the default theme
```

You can also set arbitrary form theme to a specific form like below.

```twig
{% form_theme form 'form_theme/your_own_form_theme.html.twig' %}
{{ form(form) }}
```

## Development

### Scaffolding

You can create new classes with `bin/console make:` commands like below.

```bash
$ bin/console list make
Available commands for the "make" namespace:
  make:auth                Creates an empty Guard authenticator
  make:command             Creates a new console command class
  make:controller          Creates a new controller class
  make:entity              Creates a new Doctrine entity class
  make:form                Creates a new form class
  make:functional-test     Creates a new functional test class
  make:serializer:encoder  Creates a new serializer encoder class
  make:subscriber          Creates a new event subscriber class
  make:twig-extension      Creates a new Twig extension class
  make:unit-test           Creates a new unit test class
  make:validator           Creates a new validator and constraint class
  make:voter               Creates a new security voter class
```

### Assets

All assets in `assets` will be built with [Webpack Encore](http://symfony.com/doc/current/frontend.html) into `public/build`.

```bash
$ npm dev     # encore dev
$ npm watch   # encore dev --watch
$ npm build   # encore production
```

### Translations

For example, set `'ja'` to `parameters.locale` in `config/services.yaml` and create the corresponding catalog as `translations/messages.ja.yaml`.
