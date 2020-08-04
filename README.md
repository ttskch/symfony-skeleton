# symfony-skeleton

[![Latest Stable Version](https://poser.pugx.org/ttskch/symfony-skeleton/v/stable)](https://packagist.org/packages/ttskch/symfony-skeleton)
[![Total Downloads](https://poser.pugx.org/ttskch/symfony-skeleton/downloads)](https://packagist.org/packages/ttskch/symfony-skeleton)

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghesk53dd1j315p0u0h6a.jpg)

A skeleton to get started with Symfony which has following features.

* OGP ready
* Bootstrap4 based templates
* Bootstrap4 based beautiful form themes
* font-awesome ready
* [select2](https://github.com/select2/select2) and [bootstrap4 theme](https://github.com/ttskch/select2-bootstrap4-theme) ready
* scss support (via [symfony/webpack-encore](https://github.com/symfony/webpack-encore))

## Requirements

* PHP 7.1.3+
* npm

## Installation

```bash
$ composer create-project ttskch/symfony-skeleton:@dev {project-name}
```

## Usage

```bash
$ symfony server:start
```

> If you don't have [symfony command](https://symfony.com/doc/current/setup/symfony_server.html) first [install it](https://symfony.com/download). 

Then browse http://localhost:8000

### Form themes

Rearrange `twig.form_themes` array elements to specify the default theme.

```yaml
# config/packages/twig.yaml
twig:
    form_themes:
        - 'form_theme/bootstrap_4_layout.html.twig'
#        - 'form_theme/bootstrap_4_horizontal_layout.html.twig'   # to be the default theme
```

You can also set arbitrary form theme to a specific form like below.

```twig
{% form_theme form 'form_theme/your_own_form_theme.html.twig' %}
{{ form(form) }}
```

#### Default appearances

| | before sending | with errors |
| --- | --- | --- |
| **horizontal** | ![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghesk53dd1j315p0u0h6a.jpg) | ![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gheskd4hkvj315p0u0avv.jpg) |
| **vertical** | ![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghesjxu8d2j315p0u0qnm.jpg) | ![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghesjqo1yrj315p0u0e1n.jpg) |

## Development

### Scaffolding

You can create new classes with `bin/console make:` commands like below.

```bash
$ bin/console list make
Available commands for the "make" namespace:
  make:auth                   Creates a Guard authenticator of different flavors
  make:command                Creates a new console command class
  make:controller             Creates a new controller class
  make:crud                   Creates CRUD for Doctrine entity class
  make:entity                 Creates or updates a Doctrine entity class, and optionally an API Platform resource
  make:fixtures               Creates a new class to load Doctrine fixtures
  make:form                   Creates a new form class
  make:functional-test        Creates a new functional test class
  make:message                Creates a new message and handler
  make:messenger-middleware   Creates a new messenger middleware
  make:migration              Creates a new migration based on database changes
  make:registration-form      Creates a new registration form system
  make:reset-password         Create controller, entity, and repositories for use with symfonycasts/reset-password-bundle.
  make:serializer:encoder     Creates a new serializer encoder class
  make:serializer:normalizer  Creates a new serializer normalizer class
  make:subscriber             Creates a new event subscriber class
  make:twig-extension         Creates a new Twig extension class
  make:unit-test              Creates a new unit test class
  make:user                   Creates a new security user class
  make:validator              Creates a new validator and constraint class
  make:voter                  Creates a new security voter class
```

### Assets

All assets in `assets` will be built with [Webpack Encore](http://symfony.com/doc/current/frontend.html) into `public/build`.

```bash
$ npm run dev     # encore dev
$ npm run watch   # encore dev --watch
$ npm run build   # encore production

# or

$ yarn dev
$ yarn watch
$ yarn build
```
