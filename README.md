# symfony-micro-skeleton

A skeleton to get started with Symfony which has following features.

* bootstrap4 based templates
* bootstrap4 based form themes
* translation support
* scss support

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

All assets in `/assets` will be built with [Webpack Encore](http://symfony.com/doc/current/frontend.html) into `/public/build`.

```bash
$ npm dev     # encore dev
$ npm watch   # encore dev --watch
$ npm build   # encore production
```
