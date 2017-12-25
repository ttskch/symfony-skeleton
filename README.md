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

### Controllers

```bash
$ bin/console make:controller
```

### Assets

All assets in `/assets` will be built with [Webpack Encor](http://symfony.com/doc/current/frontend.html) into `/public/build`.

```bash
$ npm dev     # encore dev
$ npm watch   # encore dev --watch
$ npm build   # encore production
```
