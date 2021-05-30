Online Book Shop
============

Symfony5 

Requirements
------------

  * PHP 7.3 or higher;
  * NODE 14;
  * Composer;
  * and the [usual Symfony application requirements][2].
## Install

### 1. Clone the project with Git:

```
git clone https://github.com/reshanmadushanka/bookshop.git
$ cd bookshop
```

### 2. Install composer dependencies

```
composer install
```
### 3. Install assets and dump js routing

```
php bin/console assets:install --symlink
```

```
php bin/console fos:js-routing:dump
```

### 4. Set-up Database

Create database if it doesn't exist.
```
php bin/console doctrine:database:create
```
Create tables based on the Entity classes.
```
php bin/console doctrine:schema:update --force
```
Add sample data
```
php bin/console doctrine:fixtures:load
```
### 5 Setup Frontend
Install react.
```
yarn install
```
### 6. Run Project

run symfony project.
```
symfony serve
```
Run react Project
```
yarn run encore dev --watch
```
## License

This bundle is under the MIT license. See the complete license in the bundle:

    src/AppBundle/Resources/meta/LICENSE
